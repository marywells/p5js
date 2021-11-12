let grotesk;
let fontSize = 400;
let topArray;
let bottomArray;
let r = 0;

function preload() {
  grotesk = loadFont('grotesk.ttf');
}

function setup() {
  createCanvas(800, 800);
  textFont(grotesk);
  textSize(fontSize);
  noLoop();

  topArray = grotesk.textToPoints('::::::::', 0, 300, fontSize, {
    sampleFactor: 0.05,
  });
  bottomArray = grotesk.textToPoints('::::::::', 0, 650, fontSize, {
    sampleFactor: 0.05,
  });
}

function draw() {
  background(255);
  for (let i = 0; i < width; i += 10) {
    for (let j = 0; j < height; j += 10) {
      textFont('Georgia');
      textSize(10);
      fill(50);
      text('::::::', i, j);
    }
  }
  for (let i = 0; i < topArray.length; i++) {
    push();
    translate(topArray[i].x, topArray[i].y);
    rotate(r);
    r++;
    strokeWeight(3);
    stroke('yellow');
    line(-7, -7, 7, 7);
    pop();
    push();
    translate(topArray[i].x, topArray[i].y);
    rotate(r);
    r++;
    strokeWeight(1);
    stroke('yellow');
    line(-20, -20, 20, 20);
    pop();
  }

  for (let i = 0; i < bottomArray.length; i++) {
    push();
    translate(bottomArray[i].x, bottomArray[i].y);
    rotate(r);
    r++;
    strokeWeight(1);
    stroke('yellow');
    line(-9, -9, 9, 9);
    pop();
    push();
    translate(bottomArray[i].x, bottomArray[i].y);
    rotate(r);
    r++;
    strokeWeight(3);
    stroke('yellow');
    line(-20, -20, 20, 20);
    pop();
  }
}
