const jsonfile = require('jsonfile');
const sourceFile = './package.json';
const targetFile = './dist/ngx-echarts/package.json';

const sourceObject = jsonfile.readFileSync(sourceFile);
const targetObject = jsonfile.readFileSync(targetFile);
targetObject.version = sourceObject.version;

jsonfile.writeFileSync(targetFile, targetObject, { spaces: 2, EOL: '\r\n' });