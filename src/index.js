#! /usr/bin/env node
const fs = require("fs-extra");
const path = require("path");
const minimist = require("minimist");
const {
  cleanNodeProject,
  archiveProject,
  getDefaultProjectName,
} = require("./utils");

const args = minimist(process.argv.slice(2));
const projectName = Array.isArray(args._) ? args._[0] : args._;
const format = args.f || args.format || "zip";
const outName =
  args.o || args.output || getDefaultProjectName(projectName, format);

const projectPath = path.resolve(`./${projectName}`);
const tempPath = path.resolve(`./${projectName}-temp`);

fs.copySync(projectPath, tempPath);
cleanNodeProject(tempPath);
archiveProject(tempPath, outName, format);
