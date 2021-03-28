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
var maxCount = 100;
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

  um11img = loadImage("walking_8.png");
  um22img = loadImage("walking_7.png");
  um33img = loadImage("walking_6.png");
  um44img = loadImage("walking_5.png");
  um55img = loadImage("walking_4.png");
  um66img = loadImage("walking_3.png");
  um77img = loadImage("walking_2.png");
  um88img = loadImage("walking_1.png");

  um12 = loadAnimation(um11img, um22img, um33img, um44img, um55img, um66img, um77img, um88img );

}

function setup()
{
  createCanvas(600,600);
  
    engine = Engine.create();
    world = engine.world;

    um1 = new umbrella(300,450);

    um123 = createSprite(300,450,100,100);
    um123.scale = 0.35;
    um123.addAnimation("um4" , um12);

    if(frameCount % 140 === 0)
    {
      for(var i = 0 ; i<maxCount ; i++)
      {
        drops.push(new drop(random(0,600) , random(0,600)));
      }

    }
    
}

function draw()
{
   background("black");
   Engine.update(engine); 

   randomM = Math.round(random(1,4));

   if(frameCount % 90 === 0)
   {
     thFrame = frameCount
     thunder = createSprite(random(10,370) , random(10,30), 8, 8)
     
     switch(randomM)
     {
         case 1 : thunder.addImage(th1);
         break;

         case 2 : thunder.addImage(th2);
         break;

         case 3 : thunder.addImage(th3);
         break;

         case 4 : thunder.addImage(th4);
         break;

         default : break; 
     }
     
     thunder.scale = random(0.2,1);
    }


    if(thFrame + 10 === frameCount && thunder)
    {
        thunder.destroy();
    }
    
    for(var i = 0 ; i<maxCount ; i++)
    {
        drops[i].display();
        drops[i].bounceoff();
    }

  //um1.display();

  drawSprites();
  






} 



