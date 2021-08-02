class Platform{

constructor(){
    var option = {
        isStatic :  true 

    }
    this.body = Bodies.rectangle(250,100,325,35,option);
    this.width = 325;
    this.height = 35;
    World.add (world, this.body);

    }

display(){

    var angle = this.body.angle;
    var pos = this.body.position; 
    push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("brown");
        rect (0,0,this.width,this.height); 
        pop();
    }



}




