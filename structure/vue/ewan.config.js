/* 
  vue@2.5.2
  vue-router@3.0.1 
  */
/* 
  less@3.9.0/less-loader@4.1.0
  axios@0.18.0
  vuex@3.0.1
  */
const proxyUrl = 'http://house.bitradex.info'
module.exports = {
  //  |  | 匹配替换路径，如匹配‘http://localhost/’替换为proxyUrl+'/'
  proxy: {
    '/': {
      target: proxyUrl, // 接口域名
      // secure: false,  // https接口
      changeOrigin: true, // 是否跨域
      pathRewrite: { '^/': '/' }
    }
    // ,'/test': { target: proxyUrl, changeOrigin: true, pathRewrite: { '^/test': '/test' }}
  },
  api: {
    login: '/user/login'
  }
}