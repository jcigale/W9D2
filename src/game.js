const Asteroid = require("./asteroid");

function Game() { 
    console.log(this) 
    this.asteroids = this.addAsteroids();
}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 2;

Game.prototype.randomPosition = function(){
    return [(Math.floor(Math.random() * Game.DIM_X)), (Math.floor(Math.random() * Game.DIM_Y))]
}

Game.prototype.addAsteroids = function() {
    let asteroids = [];
    for (let index = 0; index < Game.NUM_ASTEROIDS; index++) {
        asteroids.push(new Asteroid({pos: this.randomPosition()}));
    }
    return asteroids;
}

Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, 500, 500);
    for (let index = 0; index < this.asteroids.length; index++) {
        this.asteroids[index].draw(ctx);
    }
}

Game.prototype.move = function(){
    for (let index = 0; index < this.asteroids.length; index++) {
        this.asteroids[index].move();
    }
}


module.exports = Game;