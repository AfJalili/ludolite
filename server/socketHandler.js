const { io } = require('app.js'),
    { joinRoom, leaveRoom, getPlayer, getPlayersInRoom } = require('./roomController');


function onConnection(socket) {
    console.log('We have a new connection!')


    socket.on('join', onJoin);

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {
            user: user.name,
            text: message
        });

        callback();
    });

    socket.on('disconnect', () => console.log('User has left!'));


    function onJoin({ name, room }, errorHandler) {
        try {
            joinRoom(socketId, name, room);
            socket.join(room)

            // todo: noitfy otherUsers in room
        }
        catch (e) {
            errorHandler(e);
        }
    }
}

module.exports = { onConnection };