'use strict'

/*
  设置 session
  ctx.session.username = "张三"
  获取 session
  ctx.session.username
*/
module.exports = function (koa) {
  koa.keys = ['some secret hurr']; /*cookie的签名*/
  return {
    key: 'koa:sess', // 默认
    maxAge: 10000, // cookie的过期时间【需要修改】
    overwrite: true, // (boolean) can overwrite or not (default true) 没有效果，默认 
    httpOnly: true, // true表示只有服务器端可以获取cookie 
    signed: true, // 默认 签名 
    rolling: true, // 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）【需要修改】 
    renew: false // (boolean) renew session when session is nearly expired【需要修改】
  }
}