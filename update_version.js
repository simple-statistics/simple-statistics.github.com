var fs = require('fs');
var path = require('path');
var version = require(process.argv[2]).version;

fs.writeFileSync(path.join(__dirname, './index.html'),
  fs.readFileSync(path.join(__dirname, './template.html'), 'utf8')
  .replace(/{VERSION}/g, version));
