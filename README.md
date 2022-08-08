# zip-node-app

Easily zip your node project excluding `node_modules` and `package-lock.json`.


## Quick Start

Directly run the script using `npx`.
```
npx zip-node-app path-to-project
```
Or install the `zip-node-app` package globally and run the `zip-node-app` command:
```
npm install -g zip-node-app
zip-node-app path-to-project
```

The zip file with name `project-archived.zip` will be created.



## Options

Use `-o` or `--output` option to give custom name to zip file

```
npx zip-node-app path-to-project -o out.zip
```
```
npx zip-node-app path-to-project --output out.zip
```

Use `-f` or `--format` option to give custom format to archived file. (default is `zip`).
```
npx zip-node-app path-to-project -f tar
```
```
npx zip-node-app path-to-project --format tar
```
*Note*: only `ZIP` and `TAR` format is supported.
