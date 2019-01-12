const config = {
	projects: [
		{ name: 'vue2', desc: 'vue官方构建', start: '', nstall: 'vue init webpack dm' },
		{ name: 'socket', desc: 'socket服务端与客户端', start: '', install: '' },
		{ name: 'docs', desc: '文档支持', start: './node_modules/.bin/docsify serve docs' },
		{ name: 'rollup', desc: '--' },
		{ name: 'es6', desc: 'ES6支持' }
	],
	file: ['vuepage', 'vuerouter.js', 'html5.html', 'webpack.config.js', 'es5.js', 'es6.js', 'package.json', '.gitignore', 'rollup.config.js'],
	server: ['koa', 'express', 'nginx']
}
config.projectMap = {}
config.projects.forEach(function (item) {
	config.projectMap[item.name] = item
})

module.exports = config