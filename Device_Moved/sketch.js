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
  textSize(16);
  if (fall_flag==1){
    vx += gx;
    vy += gy;
    cord_x += vx;
    cord_y += vy;
    fill(0);
    circle(cord_x, cord_y, radius);
    text('Rx'+String(int(rotationX)), 10, 15);
    text('Ry'+String(int(rotationY)), 10, 30);
    text('Cx'+String(int(cord_x)), 10, 45);
    text('Cy'+String(int(cord_y)), 10, 60);
  }
}

function touchStarted() {
  reset();
  cord_x = mouseX;
  cord_y = mouseY;
  fall_flag=1;
}
