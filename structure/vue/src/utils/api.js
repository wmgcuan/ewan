import EWAN_CONFIG from '../../ewan.config'
import axios from 'axios'
import Qs from 'qs'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 添加表头
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  // 参数处理 json转成拼接字符
  config.data = Qs.stringify(config.data)

  return config
}, function (error) {
  // return Promise.reject(error)
  // 此处处理catch处逻辑

})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  if (response.status === 200) {
    return response.data
  } else {
    // 请求异常统一处理

  }
}, function (error) {
  // return Promise.reject(error)
  // 此处处理catch处逻辑

})

export default {
  // 用户登录 { phone: '13713753208', password: '123456'}
  login (cfg, cb) { axios.post('/user/login', cfg).then(function (res) { cb(res) }) },
  // 用户注册 { phone:'13713753208', password:'123456', repeat_password:'123456' }
  register (cfg, cb) { ajax.post('/user/register', cfg).then(function (res) { cb(res) }) }

}