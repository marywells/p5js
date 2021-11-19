function setup() {
  createCanvas(900, 900);
  background(200);
  textFont('Calibri');
  textSize(5);
  noLoop();
}

const blue = 'rgba(92,147,147,0.75)';
const yellow = 'rgba(229,134,29,0.6)';

function draw() {
  for (let i = 0; i < width; i += 80) {
    for (let j = 0; j < height; j += 80) {
      point(i, j);
      stroke(blue);
      strokeWeight(120);
    }
  }

  for (let i = 0; i < width; i += 80) {
    for (let j = 0; j < height; j += 80) {
      point(i, j);
      stroke(yellow);
      strokeWeight(90);
    }
  }
  for (let i = 0; i < width; i += 80) {
    for (let j = 0; j < height; j += 80) {
      point(i, j);
      stroke(255);
      strokeWeight(50);
    }
  }
  for (let i = 0; i < width; i += 80) {
    for (let j = 0; j < height; j += 80) {
      point(i, j);
      stroke(yellow);
      strokeWeight(30);
    }
  }

  for (let i = 0; i < width; i += 80) {
    for (let j = 0; j < height; j += 80) {
      noStroke();
      text('KOM364D', i, j);
      strokeWeight(1);
    }
  }
}
