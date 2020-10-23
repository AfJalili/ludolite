'use strict';
const { initTokensState } = require('./initialState.js');

class Game {
    constructor(players,gameType,roomId) {
        this.players = players; // an array of players data
        this.gameType = gameType; // 'offline' or 'online'
        this.roomId = roomId || 0; // 0 for offline game
        this.state =  {
            Tokens: initTokensState(players.length), // an array of objects
            turn: 'yellow' // 'blue' or 'red' or 'green'
        }
    }
}

module.exports = { Game };
