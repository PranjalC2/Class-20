function setup() {
  createCanvas(800,400);
  fixedR=createSprite(400, 200, 100, 100);
  movingR=createSprite(300, 100, 50, 50);
}

function draw() {
  background(255,255,255);  
  movingR.x=mouseX;
  movingR.y=mouseY;

  if(fixedR.width/2+movingR.width/2>=fixedR.x-movingR.x
    &&fixedR.width/2+movingR.width/2>=movingR.x-fixedR.x
    && fixedR.height/2+movingR.height/2>=fixedR.y-movingR.y
    && fixedR.height/2+movingR.height/2>=movingR.y-fixedR.y ){
    movingR.shapeColor="pink";
    fixedR.shapeColor="pink";

  }else {
    movingR.shapeColor="blue";
    fixedR.shapeColor="blue";

  }


  drawSprites();
}