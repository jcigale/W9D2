const Util = {
    inherits(childClass, parentClass) {
        function Surrogate() {};
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    },

    randomVec(length) {
        const degree = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(degree), Math.cos(degree)], length);
    },

    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }
}
module.exports = Util;