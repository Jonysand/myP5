width = 400;
height = 400;
radius = 10

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  reset();
}

function reset(){
  clear();
  cord_x = 0;
  cord_y = 0;
  fall_flag = 0;
  g = 0.2;
  gx = 0;
  guy = 0;
  vx = 0;
  vy = 0;
}

function draw() {
  clear();
  if (cord_x>=windowWidth-radius || cord_x<=radius){
    vx = vx;
  }
  if (cord_y>=windowHeight-radius || cord_y<=radius){
    vy = vy;
  }
  
  gx = g * Math.sin(radians(rotationX))
  gy = g * Math.sin(radians(rotationY))
  
  if (fall_flag==1){
    vx += gx;
    vy += gy;
    cord_x += vy;
    cord_y += vx;
    fill(0);
    circle(cord_x, cord_y, radius);
  }
}

function touchStarted() {
  reset();
  cord_x = mouseX;
  cord_y = mouseY;
  fall_flag=1;
}
