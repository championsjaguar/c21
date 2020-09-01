var fixedRect, movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 object1=createSprite(100,400,50,80);
 object2=createSprite(200,400,50,80);
 object3=createSprite(300,400,50,80);
 object4=createSprite(400,400,50,80);
 left=createSprite(250,400,50,80);
 right=createSprite(600,400,50,80);
  
    
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  var value = isTouching(movingRect, object3);
  if(value === true)
  {
    object3.shapeColor = "yellow";
    //fixedRect.shapeColor = "yellow";
  }
  else if(value === false)
  {
    object3.shapeColor = "green";
    //fixedRect.shapeColor = "green";
  }
  bounceOff(left,right);

  drawSprites();
}

