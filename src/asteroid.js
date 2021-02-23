const Util = require('./util.js');
const MovingObject = require('./moving_object.js');


class Asteroid {
    
    // COLOR = "yellow";
    
    // RADIUS = 15;
    
    constructor(pos){
        new MovingObject({'pos' : pos, 'vel' : Util.randomVec(2), 'radius': 5, 'color': "yellow"})
    };
    
    
    
}

Util.inherits(Asteroid, MovingObject);



module.exports = Asteroid;