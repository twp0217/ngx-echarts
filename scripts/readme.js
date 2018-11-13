const fs = require('fs');
const sourceFile = './README.md';
const targetFile = './dist/ngx-echarts/README.md';

fs.createReadStream(sourceFile).pipe(fs.createWriteStream(targetFile));