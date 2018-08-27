function setup() {
createCanvas(400, 200);
background(204);
}

function draw(){

//drawing the simple frog

//face
fill(0, 204, 153);
ellipse(100, 60, 80, 40);

//eyes
fill(204, 204, 0);
ellipse(80, 40, 10, 10);
ellipse(120, 40, 10, 10);

//mouth
fill(153, 0, 204);
ellipse(100, 65, 40, 10);
}
