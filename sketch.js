var ball;
var target1,target2,target3;
var ground1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 400);
 
	engine = Engine.create();
	world = engine.world;

ground1 = new Ground(600,400,1200,20)

target1 = new target(900,320,50,15);
target1.shapeColor = "white";
target2 = new target(900,285,15,50);
target3 = new target(980,285,15,50);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  target1.display();
  target2.display();
  target3.display();
  ground1.display();
  
  drawSprites();
 
}



