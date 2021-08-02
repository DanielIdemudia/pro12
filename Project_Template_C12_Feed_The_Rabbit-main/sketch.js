var garden,rabbit;
var gardenImg,rabbitImg;
var apple,orange;
var appleImg, orangeImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  orangeImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createApples();
  createOrange();
  
  
  drawSprites();
}

function createApples(){
  
  if (frameCount%80==0){
    apple = createSprite(random(50, 350, 40, 10, 10))
    apple.addImage(appleImg)
    apple.scale = 0.07
    apple.velocityY = 3
    apple.lifetime = 150
  }
  
}

function createOrange(){
  if (frameCount%160==0){
    orange = createSprite(random(50, 350, 40, 10, 10))
    orange.addImage(orangeImg)
    orange.scale = 0.07
    orange.velocityY = 3
    orange.lifetime = 150
  }
  
}