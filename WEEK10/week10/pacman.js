var x = 0;
var speed = 5;
var radius = 40;
var d = 1;

function setup() {
createCanvas(480, 120);
angleMode(DEGREES);
}

function draw(){
background(0);
fill(255, 255, 0);
x += speed;
if(x > width){
  speed =-5;
  d=-1;
}else if(x<0){
  speed = 5;
  d=1;
}
if(d == 1){
arc(x, 60, radius, radius, 45, 315);
}else{
  arc(x, 60, radius, radius, 225, 135);
}
}
