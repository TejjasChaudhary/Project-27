const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;



function preload()
{
	
}

function setup() {
    createCanvas(750, 650);
    
    
    engine = Engine.create();
	world = engine.world;

	Engine.run(Engine);

    bob1 = new Bob ( 150,450,"red");
    bob2 = new Bob ( 200,450,"red");
    bob3 = new Bob ( 250,450,"red");
    bob4 = new Bob ( 300,450,"red");
    bob5 = new Bob ( 350,450,"red");
    platform = new Platform();
    sling1 = new Sling (bob1.body,platform.body,-50,0)
    


}

function draw() {
    rectMode(CENTER);
    background(10,10);
   
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    platform.display();
    sling1.display();

  }
  