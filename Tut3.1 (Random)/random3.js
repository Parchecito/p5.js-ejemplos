let x , y, r, g, b, tam;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(240);
  x=0;
  y=0;
}

function draw() {
  r=random(50,255);
  g=random(50,255);
  b=random(50,255);
  tam=5;
  noStroke();
  fill(r,g,b);
  rect(x,y,tam);
  x+=tam;
  if(x > width){
    x=0;
    y+=tam;
  }
}

function mousePressed() {
  background(0);
  x=0;
  y=0;
  //if (mouseButton == ) {}
}