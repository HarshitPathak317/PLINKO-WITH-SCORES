class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.body = Bodies.circle(x, y, this.r, options);
        this.r = 10;
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        Stroke(6);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.x,this.y,this.r);
        pop();
    }

};