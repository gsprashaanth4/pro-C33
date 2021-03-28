const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var th1;
var th2;
var th3;
var th4;

var engine;
var world;

var drops = [];
var randomM;
var maxCount = 120;
var thFrame = 0;

var um11img;
var um22img;
var um33img;
var um44img;
var um55img;
var um66img;
var um77img;
var um88img;

var um1;
var um12;
var um123;

var thunder;

function preload()
{
  th1 = loadImage("1.png");  
  th2 = loadImage("2.png");
  th3 = loadImage("3.png");
  th4 = loadImage("4.png");

  um12 = loadImage("j1.png");
  bgimg = loadImage("bg123.jpg");

}

function setup()
{
  createCanvas(600,600);
  
    engine = Engine.create();
    world = engine.world;

    um1 = new umbrella(300,450);

    um123 = createSprite(300,450,100,100);
    um123.scale = 0.35;
    um123.addImage(um12);

    if(frameCount % 140 === 0)
    {
      for(var i = 0 ; i<maxCount ; i++)
      {
        drops.push(new snow(random(0,600) , random(0,600)));
      }
    }
    
}

function draw()
{
   background(bgimg);
   Engine.update(engine); 
   drawSprites();

    
    for(var i = 0 ; i<maxCount ; i++)
    {
        drops[i].display();
        drops[i].bounceoff();
    }

  //um1.display();

 
  






} 



