//thanks to xinxin @xinemata ♥

let grotesk;
let fontSize = 900;
let wordArray;
let r = 0;

function preload() {
  grotesk = loadFont('grotesk.ttf');
}

function setup() {
  createCanvas(800, 800);
  textFont(grotesk);
  textSize(fontSize);
  noLoop();

  wordArray = grotesk.textToPoints('%', 50, 720, fontSize, {
    sampleFactor: 0.4,
  });
}

function draw() {
  background(0);
  for (let i = 0; i < width; i += 5) {
    for (let j = 0; j < height; j += 5) {
      textFont('Georgia');
      textSize(5);
      fill(50);
      text('%', i, j);
    }
  }
  for (let i = 0; i < wordArray.length; i++) {
    push();
    translate(wordArray[i].x, wordArray[i].y);
    rotate(r);
    r++;
    strokeWeight(1);
    stroke(255);
    line(-20, -20, 20, 20);
    pop();
  }
}
