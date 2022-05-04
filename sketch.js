var barcoImg
var barco
var oceanoImg
var oceano


function preload(){
  barcoImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  oceanoImg = loadImage("sea.png");
 
  

}

function setup(){
  createCanvas(600,400);


  oceano = createSprite(200,240,390,30);
  oceano.addImage(oceanoImg);
  oceano.scale = 0.3
  oceano.velocityX = -3;

  barco = createSprite(280,200,100,100);
  barco.addAnimation("navegando",barcoImg);
  barco.scale = 0.5
}

function draw() {
  background("blue");
    drawSprites();
  console.log(); 

if (oceano.x<0){
  oceano.x = width/2

}
  
}
