var robotColor = 255;
var mouseLoc = "";
 
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  hill(-100,600,400,500);
  hill(100,600,700,600);
  hill(0,600,600,400);
  
  fill(0);
  textSize(20);
  text(mouseLoc,10,590);
  
  translate(mouseX-200,mouseY-200);
  arm();
  body();
  head();
  eye(100,100);
  eye(200,100);
  mouth();
}

function keyPressed() {
  robotColor = color(random(256),random(256),random(256));
}

function mouseMoved() {
  mouseLoc = "mouse at (" + mouseX + "," + mouseY + ")";
}

function head() {
  var x = 50;
  var y = 50;
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

function body() {
  var x = 50;
  var y = 200;
  fill(robotColor);
  stroke(100);
  triangle(x+100,y,x,y+300,x+200,y+300);
}

function mouth() {
  var x = 120;
  var y = 200;
  fill(0);
  arc(x, y, 80, 80, 0, PI+QUARTER_PI, CHORD);
  fill(color(255,0,0));
  arc(x, y, 60, 70, 0, PI+QUARTER_PI, PI);
}

function arm() {
  fill(robotColor);
  rect(190,330,100,20);
}

function hill(x,y,w,h) {
  fill(color(0,255,0));
  arc(x+(w/2), y, w, h, PI, 0, PIE);
}
