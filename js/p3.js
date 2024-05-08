//code help from https://cratecode.com/info/p5js-text-effects

var space;
var cursor;

function preload() {
  space = loadImage("img/space.jpg");
  cursor = loadImage('img/TimeAdventure.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  image(space, windowWidth, windowHeight);

  //fill(151, 53, 255);
  stroke(255);
  strokeWeight(1);
  textAlign(CENTER);
  textSize(100);
  textFont("medievalsharp");
  imageMode(CENTER);
  noCursor();
}

function draw() {
  if (mouseIsPressed) {
   fill(random(151, 53, 255), random(158), random(224, 214, 255));
}
  
  image(space, windowWidth / 2, windowHeight / 2);
  let message = "So   we   are   always";
  let message1 = "living   in   the";
  let message2 = "present   tense";
  let spacing = 36;

  for (let i = 0; i < message.length; i++) {
    let x = 155 + i * 70;
    let y = 150 + sin(frameCount * 0.1 + i) * 50;
    text(message.charAt(i), x, y);
  }

  for (let i = 0; i < message1.length; i++) {
    let x = 255 + i * 70;
    let y = 350 + sin(frameCount * 0.1 + i) * 50;
    text(message1.charAt(i), x, y);
  }

  for (let i = 0; i < message2.length; i++) {
    let x = 355 + i * 70;
    let y = 550 + sin(frameCount * 0.1 + i) * 50;
    text(message2.charAt(i), x, y);
  }
  image(cursor,mouseX,mouseY,100,100);
}
