var path = require('path'),
  fs = require('fs-extra'),
  currentPath = process.cwd()

module.exports = function () {
  fs.copySync(path.resolve(__dirname, '../file/template/socket'), currentPath + '/socket')
}