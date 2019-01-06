var fs = require('fs-extra'),
	path = require('path'),
	currentPath = process.cwd()



module.exports = function (file, finder) {
	if (fs.existsSync(__dirname + '/template/' + file)) {
		finder = finder || ''
		let savePath = path.join(currentPath, finder, file)
		fs.copySync(__dirname + '/template/' + file, savePath)
		console.success(file + '文件创建成功!\n')
	} else {
		console.error(file + ' 模板不存在!\n')
	}
}