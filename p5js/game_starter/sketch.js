var monster_img;
var cookie_img;
var points;
var monster_x, monster_y;
var cookie_x, cookie_y;

function preload() {
  monster_img = loadImage("assets/cookie_monster.png");
  cookie_img = loadImage("assets/cookie.png");
}

function setup() {
  createCanvas(720, 400);
  monster_x = 150
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  points = 0;
}

function draw() {
  background(200);
  displayPoints();
  
  image(monster_img, monster_x, monster_y);
  image(cookie_img, cookie_x, cookie_y);
  
  moveCookie();
  moveMonster();
  checkForChomp();
}

function displayPoints() {
  fill(160);
  textSize(150);
  text(points,10,370);
}

function moveCookie() {
  if(cookie_x < 0) {
    cookie_x = 725;
    cookie_y = random(350);
  }
  else 
    cookie_x -= 4;
}

function moveMonster() {
  if(keyIsDown(UP_ARROW) && monster_y > 0)
    monster_y -= 2;
  if(keyIsDown(DOWN_ARROW) && monster_y < height-150)
    monster_y += 2;
}

function checkForChomp() {
  var d = dist(cookie_x, cookie_y, monster_x, monster_y);
  if (d < 100) {
    points += 1;
    cookie_x = 725;
    cookie_y = random(350);
  }
}
