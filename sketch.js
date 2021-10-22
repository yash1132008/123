var rect1,rect2,rect3,rect4;
var bgIMG;
var tank,tankIMG;
var b1,bIMG,b2,b2IMG;
var f1,f2,f3,fr;
var em,em1;
var ind,i,can,c;
var b1Group,b2Group;
var h1,h2,h3,hIMG;

function preload (){
  bgIMG = loadImage("bg2.png")
  tankIMG = loadImage("tank1.jpg");
  bIMG = loadImage("b1.jpg");
  em = loadImage("ee1.png");
  ind = loadImage("india.png");
  can = loadImage("canada.png");
  b2IMG = loadImage("b2.jpg")
  hIMG = loadImage("heart1.jpg");
}
function setup() {
  createCanvas(1500,690);
  
b1Group=new Group();
b2Group=new Group();
//creating tank
tank = createSprite(200,200);
tank.addImage(tankIMG);
tank.scale=0.3;

//creating enemy tank
em1 = createSprite(1300,200);
em1.addImage(em);
em1.scale=0.3;

//creating indian flag
i = createSprite(200,600);
i.addImage(ind);
i.scale=0.4;

//creating candian flag
c = createSprite(1350,600);
c.addImage(can);
c.scale=0.3;

//creating inside boundary
f1 = createSprite(350,525,20,290);
f2 = createSprite(350,150,20,290);
f3 = createSprite(1150,525,20,290);
f4 = createSprite(1150,150,20,290);

//creating outside boundary
rect1= createSprite(15,200,20,1000);
rect2= createSprite(1485,200,20,1000);
rect3= createSprite(750,15,1500,20);
rect4= createSprite(750,685,1500,20);

h1= createSprite(100,50);
h1.addImage(hIMG);
h1.scale=0.1;

h2= createSprite(130,50);
h2.addImage(hIMG);
h2.scale=0.1;

h3= createSprite(160,50);
h3.addImage(hIMG);
h3.scale=0.1;
}
function draw() {
  background(bgIMG); 
  

  // code for moving tank and enemy
  if(keyDown("right")){
    tank.x=tank.x+5;
    em1.x=em1.x-5;
  }
  if(keyDown("left")){
   tank.x=tank.x-5;
   em1.x=em1.x+5;
  }
if(keyDown("up")){
   tank.y=tank.y-5;
   em1.y=em1.y+5;
  }
if(keyDown("down")){
    tank.y=tank.y+5;
    em1.y=em1.y-5;
  }

  // code for collide boundaries
  tank.bounceOff(f1);
  tank.bounceOff(f2);
  tank.bounceOff(rect1);
  tank.bounceOff(rect2);
  tank.bounceOff(rect3);
  tank.bounceOff(rect4);

  em1.bounceOff(f1);
  em1.bounceOff(f2);
  em1.bounceOff(rect1);
  em1.bounceOff(rect2);
  em1.bounceOff(rect3);
  em1.bounceOff(rect4);

  tank.bounceOff(em1);
  em1.bounceOff(tank);

  
  em1.bounceOff(f3);
  em1.bounceOff(f4);
  
  tank.bounceOff(f3);
  tank.bounceOff(f4);
  
  
  
//giving colour
  rect1.shapeColor="yellow";
  rect2.shapeColor="yellow";
  rect3.shapeColor="yellow";
  rect4.shapeColor="yellow";

  f1.shapeColor="brown";
  f2.shapeColor="brown";
  f3.shapeColor="brown";
  f4.shapeColor="brown";

  //creating arrow
 if (keyDown("space")) {
  var temp_b1 = createB1();
    temp_b1.addImage(bIMG);
    temp_b1.y = tank.y;
    temp_b1.x = tank.x;
  }
  if (keyDown("space")) {
    var temp_b1 = createE1();
      temp_b1.addImage(b2IMG);
      temp_b1.y = em1.y;
      temp_b1.x = em1.x;
    }

   

if (b1Group.isTouching(em1)){
  
  em1.destroy();
   b1Group.destroyEach();
   
   }
   
if (b2Group.isTouching(tank)){
  tank.destroy();
   b2Group.destroyEach();
   }
  drawSprites();
}


function createB1() {
  b1= createSprite(360, 100, 5, 10);
  b1.velocityX = +6;
  b1.scale = 0.1;
  b1.lifetime = 500;

  b1Group.add (b1)
  
  return b1;
  
}

function createE1() {
  b2= createSprite(360, 100, 5, 10);
  b2.velocityX = -6;
  b2.scale = 0.1;
  b2.lifetime = 500;
  b2Group.add(b2)
  return b2;
}