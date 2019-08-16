cc.Class({
    extends: cc.Component,
    properties: {
        _movimentation: cc.node,
        direction: cc.Vec2,
    },

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.startMovement, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.stopMovement, this);

        this._movimentation = this.getComponent("Movimentation");
        this._movimentation.speed = 200;
    },

    startMovement : function(event){
        switch(event.keyCode){
            case cc.macro.KEY.a: this.direction.x = -1; break;
            case cc.macro.KEY.d: this.direction.x = 1; break;
            case cc.macro.KEY.s: this.direction.y = -1; break;
            case cc.macro.KEY.w: this.direction.y = 1; break;
        }
    },

    stopMovement : function(event){
        switch(event.keyCode){
            case cc.macro.KEY.a: 
            case cc.macro.KEY.d: this.direction.x = 0; break;
            case cc.macro.KEY.s: 
            case cc.macro.KEY.w: this.direction.y = 0; break;
        }
    },

    update (dt) {
        this._movimentation.setDirection(this.direction);
    },
});
