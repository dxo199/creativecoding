function setup() {
createCanvas(480, 120);
background(0);
fill(0, 102);
//noStroke();
}

function draw(){

if (mouseY< 40){
  fill(255, 0, 0);
} else if (mouseY<80) {
  fill(0, 0, 255);
}else{
  fill(0, 255, 0);
}
ellipse(mouseX, mouseY, 20, 20);

}
