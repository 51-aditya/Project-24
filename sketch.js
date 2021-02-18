const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var line1,line2,line3;


function setup() {
	createCanvas(800, 700);
 
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,700,800,20);

	paper = new Paper(200,200,25); 

	line1 =  new Bin(500,680,200,20);
	line2 =  new Bin(500,590,20,140);
	line3 =  new Bin(700,590,20,200);

	Engine.run(engine);
}


function draw() {
  //rectMode(CENTER);
  background(0);
  drawSprites();

  paper.display();
  line1.display();
  line2.display();
  line3.display();
  ground.display();
}


function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-100});
	}
}