var fs = require('fs-extra'),
	path = require('path'),
	currentPath = process.cwd(),
	vue = path.resolve(__dirname, '../structure/vue')



module.exports = function () {
	fs.copySync(vue + '/ewan.config.js', currentPath + '/ewan.config.js')
	fs.copySync(vue + '/config/index.js', currentPath + '/config/index.js')
	// 主路由页
	fs.copySync(vue + '/src/App.vue', currentPath + '/src/App.vue')
	/*
		挂载全局axios为 $$
	 */
	fs.copySync(vue + '/src/main.js', currentPath + '/src/main.js')

	fs.copySync(vue + '/src/components/Main.vue', currentPath + '/src/components/Main.vue')
	fs.copySync(vue + '/src/components/ChildItem.vue', currentPath + '/src/components/ChildItem.vue')
	fs.copySync(vue + '/src/components/Header.vue', currentPath + '/src/components/Header.vue')
	fs.copySync(vue + '/src/assets/fonts', currentPath + '/src/assets/fonts')
	fs.copySync(vue + '/src/assets/style.css', currentPath + '/src/assets/style.css')

	// 路由配置
	fs.copySync(vue + '/src/router/index.js', currentPath + '/src/router/index.js')
	// 页面开发集成
	fs.copySync(vue + '/src/pages/page.vue', currentPath + '/src/pages/page.vue')
	// 嵌套路由
	fs.copySync(vue + '/src/pages/nest', currentPath + '/src/pages/nest')
	// vuex使用
	fs.copySync(vue + '/src/store', currentPath + '/src/store')
	fs.copySync(vue + '/src/utils', currentPath + '/src/utils')




}