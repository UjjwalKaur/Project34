const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(140,400,60);
	bob2 = new Bob(200,400,60);
	bob3 = new Bob(260,400,60);
	bob4 = new Bob(320,400,60);
	bob5 = new Bob(380,400,60);

	roof = new Roof(250,100,400,30,PI/2);

	rope1 = new Rope(bob1.body,{x:140,y:100});
	rope2 = new Rope(bob2.body, {x:200,y:100});
	rope3 = new Rope(bob3.body,{x:260,y:100});
	rope4 = new Rope(bob4.body,{x:320,y:100});
	rope5 = new Rope(bob5.body,{x:380,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();

}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}



