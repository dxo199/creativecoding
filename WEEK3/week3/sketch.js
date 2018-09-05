var x = 80
var y = 40
var d = 70
var s = 40

function setup() {
createCanvas(480, 200);
background(204);
}

function draw(){

rect(x, y, s, s);
rect(x+d+s, y, 2*s, 2*s);
rect(2*s+d+x+d+s, y, 3*s, 3*s);
}
