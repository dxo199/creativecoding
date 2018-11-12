var smiley1;

function setup(){
  createCanvas(500, 500);
  background(204);
  image(grass, 0, -350, 1000, 1050);
  angleMode(DEGREES);

  smiley1= new Smiley(width/6, height/5, 50, 160, 160);
  smiley2= new Smiley(width/3, height/5, 40, 160, 160);
  smiley3= new Smiley(width/2, height/5, 35, 160, 160);
  smiley4= new Smiley(width/1.5, height/5, 30, 160, 160);
  smiley5= new Smiley(width/1.2, height/5, 20, 160, 160);

}

function draw(){
  smiley1.smile();
  smiley2.smile();
  smiley3.smile();
  smiley4.smile();
  smiley5.smile();
}

function preload(){
  grass = loadImage('grass.jpg');
}

function Smiley(initX, initY, size, coloR, colorG, colorB){

  this.x = initX;
  this.y = initY;
  this.size = size;
  this.R = coloR;
  this.G = colorG;
  this.B = colorB;

  this.smile = function(){


    fill(this.R, this.G, this.B);
    rect(this.x, this.y, this.size, this.size*2);
    fill(this.R/3, this.G/3, this.B/3);
    ellipse(this.x+this.size/4, this.y*1.3, this.size/5, this.size);
    ellipse(this.x+this.size/1.5, this.y+15, this.size/3, this.size/3);
  }
}
