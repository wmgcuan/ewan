var fs = require('fs-extra'),
	path = require('path'),
	currentPath = process.cwd(),
	curring = require('../lib/curring'),
	package = require('../lib/package')

require('../lib/date-format.js')()

module.exports = function(type, savepath) {
	if (fs.existsSync(__dirname + '/template/' + type)) {
		curring.step(package.depend, package.create, package.body())(['babel-runtime', '^6.26.0'], true)([
			'babel-core',
			'^6.26.4'
		])(
			//(["babel-loader", "^7.1.5"])()
			//(["babel-plugin-transform-runtime", "^6.23.0"])
			['babel-preset-env', '^1.7.0']
		)()

		return
		let targetFile = path.join(currentPath, type)
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
