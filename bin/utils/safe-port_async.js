var net = require('net')

// 检测端口是否被占用
function portIsOccupied (port, cb) {
  // 创建服务并监听该端口
  var server = net.createServer().listen(port)

  server.on('listening', function () { // 执行这块代码说明端口未被占用
    server.close() // 关闭服务
    cb({
      status: 1,
      msg: 'The port【' + port + '】 is available.'
    })
  })

  server.on('error', function (err) {
    if (err.code === 'EADDRINUSE') { // 端口已经被使用
      cb({
        status: 0,
        msg: 'The port【' + port + '】 is occupied, please change other port.'
      })
    }
  })
}

/*
const safePort = require('./safe-port_async')

safePort.check(3000, function (res) {
  console.log(res.status)
  console.log(res.msg)
})

safePort.get(3000, function (port) {
  console.log('server port:' + port)
}) 
 */
module.exports = {
  check: function (port, cb) {
    portIsOccupied(port, (res) => {
      cb(res)
    })
  },
  get: function (port, cb) {
    let count = 0;
    (function fn () {
      portIsOccupied(port + count, (res) => {
        if (res.status) {
          cb(port + count)
        } else {
          count++
          fn()
        }
      })
    }())
  }
}
