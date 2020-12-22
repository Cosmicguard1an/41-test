class Drops {
    constructor(x,y,r) {
        var options = {
            isStatic: true,
            restitution: 0.5,
            friction: 1
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body);


    }

    update() {
        if(this.body.position.y > 400) {
            Matter.Body.setPosition(this.body, {x: random(0,400), y: random(0,400)})
        }
    }

    display() {
        var pos = this.body.position
        push();
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r, this.r);
        pop();
    }
}