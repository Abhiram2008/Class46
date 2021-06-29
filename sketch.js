var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cactusGroup,cactus1,cactus2,cactus3;

var score;
var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound

var eagle, eagle_flying;

function preload(){
  trex_running = loadAnimation("fox images/fox2.png","fox images/selected 1.png")
  trex_collided = loadAnimation("fox images/death.png");
  
  eagle_flying=loadAnimation("eagle img/eagle1.png","eagle img/eagle2.png","eagle img/eagle3.png");

  groundImage = loadImage("ground2.png");
  
 cactus1=loadImage("Cactus/Cactus1.png")
 cactus2=loadImage("Cactus/Cactus2.png")
 cactus3=loadImage("Cactus/Cactus3.png")
  
  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")
}

function setup() {
  createCanvas(600, 200);

  
  
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided", trex_collided);
  
eagle=createSprite(100,100,35,90);
eagle.addAnimation("flying", eagle_flying);
eagle.scale=0.3;
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
 
  
  
  
 
 
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  
  background(180);
  spawnObstacles();
  drawSprites();
}



function spawnObstacles(){
var rand=Math.round(random(1,3));
if(frameCount%300===0){
cactus=createSprite(600,190,10,10);
cactus.velocityX=-4
switch(rand){
  case 1: cactus.addImage(cactus1)
  break;
  case 2: cactus.addImage(cactus2)
  break;
  case 3: cactus.addImage(cactus3)
  break;

}
}
}