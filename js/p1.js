//got wavy text code from https://editor.p5js.org/illus0r/sketches/m_1lNsw9s
//snail png from https://adventuretimesuperfans.fandom.com/wiki/Snail
//background image from Adobe Stock

var clock;
var cursor;

function preload() {
  clock = loadImage("img/clock.jpeg");
  cursor = loadImage('img/TimeAdventure.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  fill(151, 53, 255);
  stroke(255);
  strokeWeight(1);
  textAlign(CENTER);
  textFont("medievalsharp");
  frameRate(40);
  noCursor();
}

function draw() {
  image(clock, windowWidth /2, windowHeight /2);

  if (mouseX > 5500 || mouseY > 350) {
    for (let i = 0; i < 1; i += 0.2) {
      push();
      let x = width / 2 + 50 * sin(frameCount / 10 + i);
      let y = 220 + 450 * i;
      let size = 130;
      textSize(size);
      translate(x, y);
      scale(0.5 + 1 * sin(frameCount / 45 + i));
      text("Time is an illusion", 0, 0);
      pop();
    }
  }
  image(cursor,mouseX,mouseY,150,150);
}
