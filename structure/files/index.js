var fs = require('fs-extra'),
	path = require('path'),
	currentPath = process.cwd()

require('../lib/date-format.js')()

module.exports = function(file, savepath) {
	if (fs.existsSync(__dirname + '/template/' + file)) {
		let saveTarget = path.join(currentPath, type)
		//let targetFile = path.join(currentPath, savepath, 'demo-' + type)
		// if (fs.existsSync(targetFile)) {
		//   var hash = new Date().format("MMddhhmmss")
		//   targetFile = path.join(currentPath, savepath, 'demo' + hash + '-' + type)
		// }
		fs.copySync(__dirname + '/template/' + type, targetFile)
		console.info(type + '文件创建成功!')
		if (type === 'webpack.config.js') {
			fs.copySync(__dirname + '/template/webpack', currentPath + '/webpack')
		}
	} else {
		console.error(type + ' 模板不存在！')
	}
}
