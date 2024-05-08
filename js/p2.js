//got code help from https://genekogan.com/code for color changes

var wavy;
var cursor;

function preload() {
  wavy = loadImage("img/wavy.jpeg");
  cursor = loadImage('img/TimeAdventure.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textFont("medievalsharp");
  image(wavy, windowWidth, windowHeight);
}

function draw() {
  if (frameCount % 30 == 0) {
    fill(random(189, 152, 224), random(117, 84, 174), random(224, 214, 255));
  }
  image(cursor,mouseX,mouseY,100,100);
}

function mouseClicked() {
  stroke(255);
  strokeWeight(1);
  textSize(70);
  text("That helps things make sense", mouseX, mouseY);
}
