const archiver = require("archiver");
const fs = require("fs-extra");
const path = require("path");

const cleanNodeProject = async (projectPath) => {
  const nmPath = path.resolve(`${projectPath}/node_modules`);
  const plPath = path.resolve(`${projectPath}/package-lock.json`);
  if (fs.existsSync(nmPath)) fs.rmSync(nmPath, { recursive: true });
  if (fs.existsSync(plPath)) fs.rmSync(plPath);

  const projectDir = fs.opendirSync(projectPath);
  for await (let dirent of projectDir) {
    if (dirent.isDirectory()) {
      cleanNodeProject(`${projectPath}/${dirent.name}`);
    }
  }
};

const archiveProject = (dirPath, outName, format) => {
  const outPath = path.resolve(`./${outName}`);

  const archive = archiver(format, { zlib: { level: 9 } });
  const stream = fs.createWriteStream(outPath);

  archive
    .directory(dirPath, false)
    .on("error", (err) => reject(err))
    .pipe(stream);

  stream.on("close", () => {
    fs.rmSync(dirPath, { recursive: true });
    console.log(`Successfully created ${outName} !`);
  });
  archive.finalize();
};

module.exports = { cleanNodeProject, archiveProject };
