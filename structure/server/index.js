var fs = require('fs-extra'),
  path = require('path'),
  currentPath = process.cwd()

require('../../lib/colors')



module.exports = function (file, finder) {
  const targetDirectorName = 'server'
  fs.copySync(__dirname + '/' + file, currentPath + '/' + targetDirectorName)
  // 端口探测
  const safePort = path.resolve(__dirname, '../../bin/utils/safe-port_async.js')
  fs.copySync(safePort, currentPath + '/' + targetDirectorName + '/utils/safe-port_async.js')

  console.list('$ cd ' + targetDirectorName)
  console.list('$ npm i')
  console.list('$ npm start\n')
}