var fs = require('fs-extra'),
  colors = require('./colors'),
  currentPath = process.cwd()

console.info('蓝底黑字info示例\n')
console.warn('黄底黑字warn示例\n')
console.success('绿底黑字success示例\n')
console.color(['green', 'DONE'], 'Compiled successfully in 19987ms\n')


module.exports = {
  body: function () {
    return fs.existsSync(currentPath + '/package.json') ? require(currentPath + '/package.json') : require('../file/template/package.json')
  },
  depend: function (package, option, isPro) {
    const parentKey = isPro ? 'dependencies' : 'devDependencies'
    package[parentKey] = package[parentKey] || {}
    if (package[parentKey][option[0]]) {
      console.error(option[0] + ': ' + package[parentKey][option[0]] + '略过\n')
    } else {
      package[parentKey][option[0]] = option[1]
    }
    return package
  },
  create: function (package) {
    fs.writeFileSync(currentPath + '/package.json', JSON.stringify(package, null, 2))
  }
}

