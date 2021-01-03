
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone,boy,tree,ground,mango1, mango2, mango3, mango4, mango5, mango6,mango7,mango8,chain1,boy2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone = new Stone(100,540,10)
boy2 = new Boy(100,540,10,10)
boy = new Boy(150,600,10,10)
tree = new Tree(650,400,10,10)
ground = new Ground(0,675,10000,20)
mango1 = new Mango(600,300,20)
mango2 = new Mango(650,400,20)
mango3 = new Mango(570,350,20)
mango4 = new Mango(500,400,20)
mango5 = new Mango(600,400,20)
mango6 = new Mango(700,350,20)
mango7 = new Mango(550,450,20)
mango8 = new Mango(550,400,20)
chain1 = new Launcher(stone.body,{
  x : 100,
  y:540
});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  boy2.display();
  boy.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  chain1.display(); 
  ground.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{
      x: mouseX,
      y: mouseY
  })
}
function mouseReleased(){
    chain1.fly();
    
}

function detectollision(lstone,lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body, {x:100,y:540})
    chain1.attach(stone.body);
  }
}
