cc.Class({
    extends: cc.Component,

    properties: {
        target: cc.Node,
        _movimentation: cc.Component,
    },

    onLoad (){
        this._movimentation = this.getComponent("Movimentation");
        this._movimentation.speed = 100;
    },

    update : function(dt) {
        let direction = this.target.position.sub(this.node.position);
        this._movimentation.setDirection(direction);
    }

});