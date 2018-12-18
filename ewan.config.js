const config = {
  projects: [
    { name: 'socket', desc: 'socket服务端与客户端', start: '', install: '' },
    { name: 'vue2', desc: 'vue官方构建', start: '', install: 'vue init webpack dm' },
    { name: 'docs', desc: '文档支持', start: './node_modules/.bin/docsify serve docs' },
    { name: 'rollup', desc: '--' },
    { name: 'es6', desc: 'ES6支持' }
  ]
}
config.projectMap = {}
config.projects.forEach(function (item) {
  config.projectMap[item.name] = item
})

module.exports = config