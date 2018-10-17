var field;
var ball;
var shooter;
var shooterr;
var x = 1000;
var y = 250;
var mspeed = 5;
var bspeed = 2;
var m = 90;
var b = 250;
var r = 18;


function preload(){
  field = loadImage('field.jpg');
  ball = loadImage('ball2.png');
  shooter = loadImage('shootr.png');
  shooterr = loadImage('sh.png');
}

function setup(){
  createCanvas(1280, 717);
  textFont(" Source Code Pro");

}

function draw(){

  background(0);
  textSize(28);
  fill(255);
  text("Dalanda - Ultimate Match", 430, 40);

  image(field, 90, 80, 1100, 600);


  image(shooter, mouseX-100, mouseY-90, 200, 180);


  if(keyIsPressed){
    if(keyCode == LEFT_ARROW){
    x = x - 10;
  } else if(keyCode == RIGHT_ARROW) {
    x = x + 10;
  } else if(keyCode == UP_ARROW) {
    y = y - 10;
  } else if(keyCode == DOWN_ARROW){
    y = y + 10;
  }
  }
image(shooterr, x, y, 90, 140);


image(ball, m, b, r*2, r*2);
m += mspeed;
b += bspeed;
if (m > 1100-r || m < r){
  mspeed = -mspeed;
}
if (b < 717 - r || b >r){
  bspeed = -bspeed;
}




}
