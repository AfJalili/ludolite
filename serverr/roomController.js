// id, name, room, 
const players = [];
 // roomName, playerCount
const rooms = [];

function joinRoom(id, name, room) {
    // todo: Validate data
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    if(!name || !room) return { error: 'Username and room are required.' };
  
    // check for existing room and taken username
    const existingUser = players.find((player) => player.room === room && player.name === name);
    if(existingUser) return { error: 'Username is taken.' };
  
    // Add player
    const player = { id, name, room };
    players.push(player);
  
    return player;
}

function leaveRoom(id) {
    const index = players.findIndex((player) => player.id === id);
    if (index !== -1) {
        return players.splice(index, 1);
    }
}

function getPlayer(id) {
     players.find((player) => player.id === id);
}

function getplayersInRoom(room) {
    players.filter((player) => player.room === room);
}    

function getAvailableRooms() {
    // TODO return list of rooms available
}

module.exports = {
    joinRoom, leaveRoom, getPlayer, getPlayersInRoom
};