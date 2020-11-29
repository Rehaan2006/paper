
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	 ground =new Ground (400,600,800,20);  
	paper=new Paper(200,200,10);
   
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  paper.display();
  ground.display();
  drawSprites();
 
}



