class Sling {

constructor (bodyA,bodyB,x,y) {

    var options = {

        bodyA: bodyA,
        bodyB: bodyB,
        pointB : {x : x ,y : y},
        stiffness: 1,
        angularStiffness: 1,
        length: 220
    };


    this.pointX = bodyA.x;
    this.pointY = bodyA.y - 250;
    this.sling = Matter.Constraint.create(options);
    World.add(world, this.sling);

}

    display() {


        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            push();
            strokeWeight(3,5);
            stroke("yellow");
           line(pointB.x, pointB.y, pointA.x, pointA.y)
                pop();
  
  }
 }
}