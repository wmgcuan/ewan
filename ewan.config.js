const config = {
  projects: [
    { name: 'docs', desc: '文档支持', start: './node_modules/.bin/docsify serve docs' },
    { name: 'rollup', desc: '--' },
    { name: 'es6', desc: 'ES6支持' },
    { name: '其它', desc: '更多的其它安装' }
  ]
}
config.projectMap = {}
config.projects.forEach(function (item) {
  config.projectMap[item.name] = item
})

module.exports = config