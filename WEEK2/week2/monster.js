function setup(){
  createCanvas(480, 120);
  background(204);
}

function draw(){
  fill(0);
  beginShape();
  vertex(50, 120);
  vertex(450, 90);


  vertex(410, 70);
  vertex(380, 80);
  vertex(350, 70);
  vertex(320, 80);
  vertex(290, 70);
  vertex(260, 80);
  vertex(230, 70);

  vertex(320, 10);
  vertex(120, 50);

  endShape();

  fill(255, 0, 0);
  ellipse(155, 60, 18, 18);

  fill(255);
  ellipse(145, 100, 30, 30);
}
