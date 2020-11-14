
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(50,325,20,20);
  monkey.addAnimation("run",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(200,380,400,50);
  ground.shapeColor="brown";
  
  bananaGroup= new Group();
  obstaclesGroup= new Group();
  
 score=0;
  
}


function draw() {
 background("lightblue");
  
 
text("score : "+score,350,20);
  
  monkey.collide(ground);
  
 if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  console.log(frameCount);
  
  if(frameCount%100===0){
    fruit();
  }
  
 if(frameCount%200===0) {
    rock();
 }
  
  
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score=score+1;
  }
  
  if(monkey.isTouching(obstaclesGroup)){
    obstaclesGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    bananaGroup.destroyEach();
  }
  drawSprites();
}

 function fruit(){
 banana=createSprite(450,200,20,20);
  banana.addImage(bananaImage); 
   banana.y=random(100,350);
  banana.scale=0.09;
   banana.lifetime=300;
  banana.velocityX=-4;
   bananaGroup.add(banana);
 }

function rock(){
 obstacles=createSprite(450,350,20,20);
  obstacles.addImage(obstacleImage);
  obstacles.scale=0.2;
  obstacles.velocityX=-5;
  obstaclesGroup.add(obstacles);
}
