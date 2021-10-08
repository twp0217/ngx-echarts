const fs = require('fs');
const sourceFile = './README.md';
const targetFile = './dist/twp0217/ngx-echarts/README.md';

fs.createReadStream(sourceFile).pipe(fs.createWriteStream(targetFile));