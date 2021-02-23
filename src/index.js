const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Util = require('./util.js');
const Game = require('./game.js');
const GameView = require('./game_view.js');

// window.Util = Util;
// window.MovingObject = MovingObject;
// window.Asteroid = Asteroid;


document.addEventListener('DOMContentLoaded', () => {
    
    gameView = new GameView();
    console.log(gameView);
    gameView.start();
 
});


