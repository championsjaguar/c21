var fixedRect, movingRect;
var left,right;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
left=createSprite(250,400,50,80);
right=createSprite(600,400,50,80);
 // movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;
left.velocityX=5;
right.velocityX=-5;

}

function draw() {
  background(0,0,0);  

  bounceOff(left,right);
  drawSprites();
}




















