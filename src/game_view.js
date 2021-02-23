const Game = require('./game.js');
const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Util = require('./util.js');


function GameView() {
    this.game = new Game();
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = 500;
    canvasEl.height = 500;
    this.ctx = canvasEl.getContext('2d'); 
}

GameView.prototype.start = function() {
        setInterval(this.game.move(), 20);
        setInterval(this.game.draw(this.ctx), 20);
}


module.exports = GameView;

