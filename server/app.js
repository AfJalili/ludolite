const express = require('express'),
    http = require('http'),
    socketio = require('socket.io'),
    cors = require('cors'),
    socketHandler = require('./socketHandler.js')
    
    
const app = express();
const httpServer = http.createServer(app);
const io = socketio(httpServer);


io.on('connection', socketHandler);

// Middlewares
app.use(cors);

// Settings
const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => console.log(`Server has started on port ${PORT}`));


module.exports = { io };
