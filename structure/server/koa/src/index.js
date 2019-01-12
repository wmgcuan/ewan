const Koa = require('koa')
const Router = require('koa-router')
const SafePort = require('../utils/safe-port_async')
const path = require('path')
const app = new Koa()

// Session
const session = require('koa-session')
const sessionConfig = require('./session')(app)
app.use(session(sessionConfig, app))

// API
const bodyParser = require('koa-bodyparser')
const router = require('./api')(Router)
app
    .use(bodyParser()) // 支持POST
    .use(router.routes()) // 启动路由
    .use(router.allowedMethods()) // 在当所有路由中间件之后调用.此时根据 ctx.status 设置response响应头

// 静态资源
const statics = require('koa-static')
app.use(statics(path.resolve(__dirname, '../www')))


SafePort.get(3000, function (port) {
    app.listen(port)
    console.log('server port:' + port)
})
