var app = require('http').createServer(),
  io = require('socket.io')(app),
  PORT = 3050


var clientCount = 0,
  socketMap = {}

app.listen(PORT)
console.log('websocket listening on port ' + PORT)

io.on('connection', function (socket) {
  clientCount++
  socket.clientNum = clientCount
  socketMap[clientCount] = socket

  // if (clientCount % 2 == 1) {
  //   socket.emit('waiting', 'socket ready')
  // } else {
  //   socket.emit('start')
  //   socketMap[clientCount - 1].emit('start')
  // }
  var count = 0
  setInterval(function () {
    socket.emit('start', count)
    count++
  }, 2000)


  //socket.emit('client ' + clientCount)

  socket.on('disconnect', function () {

  })
})