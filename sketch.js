
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var stone1;
var boy,boyimg

function preload()
{
	boyimg = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
   stone1= new Stone(100,100);
   boy = createSprite(100,100,50,50);
   boy.addImage(boyimg);
   tree = new Tree(300,200);
   mango1 = new Mango(300,200);
   mango2 = new Mango(300,200);
   mango3 = new Mango(300,200);
   mango4 = new Mango(300,200);
   mango5 = new Mango(300,200);
   launcherObject=new Launcher(stone1.body,{x:235,y:420})
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
  tree.display();
  drawSprites();
 Engine.update(engine);
 stone1.display();
 detectcollision(stone1,mango1)
 detectcollision(stone1,mango2)
 detectcollision(stone1,mango3)
 detectcollision(stone1,mango4)
 detectcollision(stone1,mango5)
}

function mouseDragged(){
   
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }



function mouseReleased(){
   launcher.fly();
   
}
 
function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y)

if (distance<-lmango.r+lstone.r)
{
	Matter.Body.setStatic(lmango.body,false);
}








}

