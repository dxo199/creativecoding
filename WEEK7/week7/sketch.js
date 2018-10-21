var dog;
var x = 250;
var y = 150;

function preload(){
  dog = loadImage('dog1.jpg');
}

function setup(){
  createCanvas(600, 500);
background(0);
  textFont(" Source Code Pro");
}

function draw() {

  textSize(20);
  fill(290);
  background(0);
  text(" Use your keyboard's arrow", 150, 450);
  text("to put the dog inside the squares", 100, 490);



  fill(155);
  rect(0, 0, 100, 100);
  rect(499, 0, 100, 100);
  rect(0, 299, 100, 100);
  rect(499, 299, 100, 100);



  if(keyIsPressed){
    if(keyCode == LEFT_ARROW){
    x = x - 1;
  } else if(keyCode == RIGHT_ARROW) {
    x = x + 1;
  } else if(keyCode == UP_ARROW) {
    y = y - 1;
  } else if(keyCode == DOWN_ARROW){
    y = y + 1;
  }
  }
image(dog, x, y, 100, 100);
}
