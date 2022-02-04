var Jaxon, Jaxon_Running;
var Road, Road_Image;
var Line_1, Line_2;

function preload(){
  Jaxon_Running = loadAnimation("Runner-1.png","Runner-2.png");
  Road_Image = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  Jaxon = createSprite(200,300,30,30);
  Jaxon.addAnimation("Running", Jaxon_Running);
  Jaxon.scale = 0.08
  
  Road = createSprite(200,200,80,80);
  Road.addImage(Road_Image);
  Road.scale = 1.3

  Line_1 = createSprite(10,200,10,400);
  Line_1.visible = false;
  Line_2 = createSprite(390,200,10,400);
  Line_2.visible = false;

}

function draw() {
  background(0);

  Jaxon.x = World.mouseX
  Road.velocity.y = +3

  if(Road.y > 400 ){
    Road.y = height/2;
  }

  Road.depth = Jaxon.depth-1;
 
  Jaxon.collide(Line_1);
  Jaxon.collide(Line_2);

  drawSprites();
}
