var hit = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  rect(200,200,100,150);
  ellipse(mouseX,mouseY,100,100);

  hit = collideRectCircle(200,200,100,150,mouseX,mouseY,100);

  print("colliding? " + hit);
}
