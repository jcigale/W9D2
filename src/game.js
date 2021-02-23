const Asteroid = require("./asteroid");

function Game() {
    this.asteroids = this.addAsteroids();

}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 100;

Game.prototype.randomPosition = function(){
    return [(Math.floor(Math.random() * DIM_X)), (Math.floor(Math.random() * DIM_Y))]
}

Game.prototype.addAsteroids = function() {
    let asteroids = [];
    for (let index = 0; index < NUM_ASTEROIDS; index++) {
        asteroids.push(new Asteroid({pos: this.randomPosition()}));
    }
    return asteroids;
}

Game.prototype.draw = function(ctx){
    clearRect(ctx);
    for (let index = 0; index < this.asteroids.length; index++) {
        this.asteroids[index].draw();
    }
}

Game.prototype.move = function(){
    for (let index = 0; index < this.asteroids.length; index++) {
        this.asteroids[index].move();
    }
}