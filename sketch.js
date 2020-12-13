
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2,670,width,20);
	line1=new Dustbin(1200,height-119,200,20);
	line2=new Dustbin(1090,height-160,20,100);
	line3=new Dustbin(1290,height-160,20,100);
	paper=new Paper(200,450,40);
	Engine.run(engine);
	
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  line1.display();
  line2.display();
  line3.display();
  paper.display();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.bodies,paper.bodies.position,{x:70,y:-85});
  
	}
}