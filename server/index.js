const express = require("express");
const { createServer } = require('http');
const { Server } = require("socket.io");

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    })
});

httpServer.listen(3000, () => {
    console.log('server running at http://localhost:3000');
  });