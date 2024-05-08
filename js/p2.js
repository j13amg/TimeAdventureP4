//got code help from https://genekogan.com/code for color changes
//snail png from https://adventuretimesuperfans.fandom.com/wiki/Snail
//background image from Adobe Stock

var wavy;

function preload() {
  wavy = loadImage("img/wavy.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  image(wavy, windowWidth, windowHeight);
}

function draw() {
  if (frameCount % 30 == 0) {
    fill(random(189, 120, 224), random(0, 84, 174), random(224, 214, 255));
  }
}

function mouseClicked() {
  textFont("medievalsharp");
  stroke(255);
  strokeWeight(1);
  textSize(70);
  text("That helps things make sense", mouseX, mouseY);
}
