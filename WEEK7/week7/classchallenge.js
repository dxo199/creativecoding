var dog1;
var dog2;

function preload(){
  dog1 = loadImage('dog1.jpg');
  dog2 = loadImage('dog2.jpeg');
}

function setup(){
  createCanvas(480, 240);
  background(204);
}

function draw() {
  background(204);
  image(dog1, mouseX-120, mouseY-60, 240, 120);
  image(dog2, 240, 120, 240, 120);
}
