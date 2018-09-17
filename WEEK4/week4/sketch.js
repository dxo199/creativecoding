var y = 85;
var d = 20;
var w = 37;
var h = 12;
var p = 10;
var z = 342;

  function setup (){
  createCanvas(480, 500);
  background(250);
  noFill();
  }

function draw (){


  rect(10, 10, 444, 150);
      for(var i = 1; i < 7; i++) {
      ellipse(353, y, i*d, i*d);
      }
      for(var i = 1; i < 7; i++) {
      ellipse(110, y, i*d, i*d);
      }


  rect(10, 176, 444, 144);
      rect(10, 176, w, h);
      for(var i = 1; i < 12; i++) {
      rect(10+i*w, 176+i*h, w, h);
      }

  rect(10, 342, 444, 150);
  for(var j = 1; j< 0.1; j+= 0.05){
    for(var i= 1; i < 24; i++){
      ellipse(d*i, z*j, p, p);
      line(d*i, z*j, 222, 417);
  }
    }
}
