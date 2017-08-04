var robotColor = 255;
var mouseLoc = "";
 
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  fill(0);
  textSize(20);
  text(mouseLoc,10,590);
  translate(mouseX-200,mouseY-200);
  
  arm(190,330);
  body(50,200);
  head(50,50);
  eye(100,100);
  eye(200,100);
  mouth(120,200);
}

function keyPressed() {
  robotColor = color(random(256),random(256),random(256));
}

function mouseMoved() {
  mouseLoc = "mouse at (" + mouseX + "," + mouseY + ")";
}

function head(x,y) {
  //head box
  fill(robotColor);
  stroke(100);
  rect(x,y,200,200);
  //antennas
  line(x+100,y,x+60,y-40);
  line(x+100,y,x+170,y-30);
  //nose
  fill(255);
  triangle(x+90,y+110,x+110,y+110,x+100,y+120); 
}

function eye(x,y) {
  fill(0);
  ellipse(x,y,100,100);
  fill(255);
  ellipse(x+20,y+15,40,50);
}

function body(x,y) {
  fill(robotColor);
  stroke(100);
  triangle(x+100,y,x,y+300,x+200,y+300);
}

function mouth(x,y) {
  fill(0);
  arc(x, y, 80, 80, 0, PI+QUARTER_PI, CHORD);
  fill(color(255,0,0));
  arc(x, y, 60, 70, 0, PI+QUARTER_PI, PI);
}

function arm(x,y) {
  fill(robotColor);
  rect(x,y,100,20);
}
