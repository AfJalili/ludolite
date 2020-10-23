const { getPath } = require('../helpers/path.js');

function perform(state, command) {

}

function roll(state) {
    const point = generateDiceNumber();
    const tokens;

    return /*A new state or a list of clickable ids */
}



function canMove(token, point) {
    if (isToeknOutOfGame(token.description) && point === 6) return true;
    else if (isDistInrange() && isDistEmpty(token, point)) return true;


    return false;

    function isToeknOutOfGame(tokenDescription) {
        return token.description === 'out';
    }
    
    function isDistEmpty(token, point) {
        if (token.description === 'in') {
            const distId = token.positionId + point;

        }
    }
    
    
}


        
function generateDiceNumber() { return Math.floor((Math.random() * 6) + 1); }
        
function isItsTurn(token, color) { return token.index.startsWith(color); }





