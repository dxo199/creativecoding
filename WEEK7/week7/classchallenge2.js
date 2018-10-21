var bgImg;
var houseImg;

function preload(){
  bgImg = loadImage('landscape.jpg');
  houseImg = loadImage('house_PNG61.png');
}

function setup(){
  createCanvas(600, 400);
}

function draw() {
  image(bgImg, 0, 0);
  //apply
  tint(255, 20);
  image(houseImg, 20, 200, 400, 200);
}
