let x , y, r, g, b;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  x=0;
  y=0;
}

function draw() {
  x=random(width);
  y=random(height);
  r=random(100,255);
  g=random(100,255);
  b=random(100,255);
  
  noStroke();
  fill(r,g,b,100);
  ellipse(x,y,random(5,40));
}

function mousePressed() {
  background(0);
  return false;
}