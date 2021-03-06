class Bob {

    constructor(x,y,color){

        var options  = {

       restitution: 1,
       friction: 0  ,
       frictionAir: 0.0
       
        

        };

        this.body = Bodies.circle(x, y, 50, options);
        
        this.radius = 50;
        this.color = color;
        World.add (world, this.body);
        
    }

    display() {

    var angle = this.body.angle;
    var pos = this.body.position; 
    push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipse (0,0,this.radius,this.radius); 
        pop();
    }
}