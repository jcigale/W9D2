const Util = require('./util.js');
const MovingObject = require('./moving_object.js');


function Asteroid(options) {
    options.color = "yellow";
    options.vel = Util.randomVec(2);
    options.radius = 5;

    MovingObject.call(this, options);    
    
}

Util.inherits(Asteroid, MovingObject);



module.exports = Asteroid;