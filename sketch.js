var helicopterIMG, helicopterSprite;
var ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	
	
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    

	Engine.run(engine);
  zone1=new zone(400,640,10,50);
  zone2=new zone(300,640,10,50);
  zone3=new zone(350,655,100,10)
  parcel=new box(350,100,20,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  zone1.display();
  zone2.display();
  zone3.display();
  parcel.display();
  drawSprites();
 
}


    
  




