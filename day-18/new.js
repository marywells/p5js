//thanks to xinxin @xinemata ♥

let grotesk;
let fontSize = 900;
let wordArray;
let r = 0;
const green = 'rgba(90,240,0,0.65)';

function preload() {
  grotesk = loadFont('grotesk.ttf');
}

function setup() {
  createCanvas(800, 800);
  textFont(grotesk);
  textSize(fontSize);

  noLoop();

  wordArray = grotesk.textToPoints('M', 10, 600, fontSize, {
    sampleFactor: 0.06,
  });
}

function draw() {
  background(255);

  for (let i = 0; i < wordArray.length; i++) {
    push();
    translate(wordArray[i].x, wordArray[i].y);
    rotate(r);
    r++;
    strokeWeight(39);
    stroke(green);
    point(-20, -20, 20, 20);
    pop();
  }
}
