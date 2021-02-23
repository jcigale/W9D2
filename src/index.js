const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Util = require('./util.js');

window.Util = Util;
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = 500;
    canvasEl.height = 500;
    const ctx = canvasEl.getContext('2d');

    let options = { 'pos': [30, 30], 'vel': [10, 10], 'radius': 5, 'color': '#00FF00' };
    mObj = new MovingObject(options);

    mObj.draw(ctx);
    mObj.move();
    mObj.draw(ctx);

    Util.inherits(Asteroid, MovingObject);

    ast = new Asteroid({pos: [450,450]});
    ast.draw(ctx);
    ast.move();
    ast.draw(ctx);

});


console.log("its working");