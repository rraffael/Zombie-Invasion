cc.Class({
    extends: cc.Component,

    properties: {
        _direction: cc.Vec2,
        speed: cc.Float,
    },

    update (dt) {
        let movimentation = this._direction.mul(this.speed * dt);
        this.node.position = this.node.position.add(movimentation);
    },

    setDirection : function(direction){
        this._direction = direction.normalize();
    },
});
