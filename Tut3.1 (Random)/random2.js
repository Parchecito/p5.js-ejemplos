let x , y, r, g, b;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  r=255;
  g=255;
  b=255;
}

function draw() {
  x=0
  y=0
  
  noStroke();
  fill(r,g,b,100);
  rect()
}

function mousePressed() {
  if (mouseButton == LEFT) {
    r=random(100,255);
    g=random(100,255);
    b=random(100,255);
  }
  if (mouseButton == CENTER) {
    background(0);
  }
  //if (mouseButton == ) {}
}