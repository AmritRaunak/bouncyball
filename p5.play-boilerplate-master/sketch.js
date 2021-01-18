const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  
 
var ballOption={
restitution : 1.0
}

  ball=Bodies.circle(200,200,20,ballOption);
  World.add(world,ball);

  var groundOption={
    isStatic : true
  }
  ground=Bodies.rectangle(200,390,50,100,groundOption);
  World.add(world,ground);

  
}

function draw() {
  background(3,30,21); 
  Engine.update(engine);
  

  fill("yellow");
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,40,40);
  console.log(ground.position.y);
  
  rectMode(CENTER);
  fill("blue");
  rect(ground.position.x,ground.position.y,400,10);
 
}