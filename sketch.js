
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boy , boyImg;
var stones;
var mango1 , mango2 , mango3 , mango4 , mango5 , mango6 , mango7 , mango8 , mango9 , mango10;
var dground , tree , treeImg;

function preload()
{
  treeImg = loadImage("Pluckingmangoes/tree.png")
  boyImg = loadImage("Pluckingmangoes/boy.png")	
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	dground = new Ground();
	stones = new Stone(96,380,23);

  tree=createSprite(775,268);
  tree.addImage(treeImg);
  tree.scale=0.42;

  boy=createSprite(160,450);
  boy.addImage(boyImg);
  boy.scale=0.125;

	 mango1 = new Mango(600,190,34)
	 mango2 = new Mango(855,225,35)
	 mango3 = new Mango(670,160,35)
	 mango4 = new Mango(730,90,35)
	 mango5 = new Mango(710,220,36)
	 mango6 = new Mango(780,150,35)
	 mango7 = new Mango(855,70,33)
	 mango8 = new Mango(930,180,35)
	 mango9 = new Mango(850,100,35)
	 mango10 = new Mango(750,200,35)
	 
   //attach = new Throw(stones.body,{x:95,y:387})

	 


  
}


function draw() {

  background(255);
  Engine.update(engine)

  fill("black");
  textSize(18);

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);

  drawSprites();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stones.display();
  dground.display();
  //attach.display();

  
 
}
function mouseDragged(){
  Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
 // attach.fly();
}

function detectCollision(object1, object2){
	var mangoBodyPosition=object1.body.position
	var stoneBodyPosition=object2.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	
	if(distance<=object2.radius + object1.radius){
		Matter.Body.setStatic(object2.body,false);
	}
}
       
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setStatic(stones.body, false)
    Matter.Body.applyForce(stones.body,stones.body.position,{x:90,y:-95})
    //Matter.Body.setPosition(stones.body,{x:96,y:380})
   // attach.launch(stones.body)
  }

  if(keyCode===UP_ARROW){
		Matter.Body.setPosition(stones.body, {x:96,y:380})
		Matter.Body.setStatic(stones.body, true);
	}
 
}




