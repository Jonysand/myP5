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
  v = 0;
}

function draw() {
  hit = collideLineCircle(0, windowHeight, windowWidth, windowHeight, cord_x, cord_y, 10)
  if (hit){
    v = (-0.5)*v;
    //reset();
  }
  
  if (fall_flag==1){
    v+=g;
    cord_y+=v;
  }
  
  if (cord_x!=0 && cord_y!=0){
    clear();
    fill(0);
    circle(cord_x, cord_y, 10);
  }
}

function touchStarted() {
  clear();
  v=0;
  cord_x = mouseX;
  cord_y = mouseY;
  fall_flag=1;
}
