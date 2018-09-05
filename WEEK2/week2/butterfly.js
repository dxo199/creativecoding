function setup() {
createCanvas(400, 200);
background(204);
}

function draw(){

  // drawing the butterfly

//head
ellipse(200, 30, 40, 40);

//body
rect(175, 50, 50, 100);

// wings
quad(40, 10, 175, 50, 175, 150, 40, 180);
quad(360, 10, 225, 50, 225, 150, 360, 180);

}
