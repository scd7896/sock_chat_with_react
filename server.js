const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io').listen(server)
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors({
    origin : true
}))
app.get('/roomlist', (req,res)=>{
    res.send(io.sockets.manager.rooms)
})
io.sockets.on('connection', function(socket){
    socket.on('chat-msg', (msg) => {
        console.log('message:', msg)
        // 모든 클라이언트에게 전송 --- (※6)
        io.emit('chat-msg', msg)
      })
})
//klklk

server.listen(9080, ()=> console.log("서버 9080진행중"))