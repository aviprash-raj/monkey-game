
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var BananaGroup, ObstacleGroup
var score

var survivalTime = 0

var Banana,Obstacle

function preload(){
  

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating monkey
  monkey = createSprite(80,351,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  //obstacle = createSprite(260,346,20,20);
  //obstacle.addImage(obstaceImage);
  //obstacle.scale = 0.2
  
  bananaGroup = new Group();
  ObstacleGroup = new Group();
  
  //creating ground
  ground = createSprite(400,390,900,10);
  ground.velocityx = -4
  ground.x = ground.width/2
  console.log = (ground.x);

}


function draw() {
background("white")
  drawSprites();
  
  if(keyDown("space")){
     monkey.velocityY = -12;
     }
  
  monkey.velocityY = monkey.velocityY + 0.5

monkey.collide(ground);

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime: "+survivalTime,100,50);
  
  
  
  
  
}

function Banana(){
   if(frameCount%50===0){
  banana = createSprite(200,200,20,20);
  //banana.y = Math.round(random(10,10)); 
  banana.addImage(bananaImage);
  banana.scale = 0.1
     
     bananaGroup.add(Banana);
   }
   }

function Obstacle(){
   if(frameCount%60===0){
  obstacle = createSprite(200,200,20,20);
  //obstacle.y = Math.round(random(10,10)); 
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1
 
   obstacleGroup.add(Obstacle);
   }
}
  