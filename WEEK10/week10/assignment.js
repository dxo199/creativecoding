var x = 80;
var y = 60;
var speed = 5;


function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);
  currentTime = millis ();
  if (currentTime < 7000) {
     y += speed;
    if (y > height) {
        y = 0;
      }
    stroke(255);
      line(x, y, x, y+20);
      line(2*x, y-30, 2*x, y+20-30);
      line(3*x, y+50, 3*x, y+20+50);
      line(4*x, y-10, 4*x, y+20-10);
  } else {
fill(255, 255, 0);
noStroke()
ellipse(width-40, y-40, 30, 30);
}
}
