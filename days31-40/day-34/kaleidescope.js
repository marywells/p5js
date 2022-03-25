function setup() {
  createCanvas(700, 700);
}

function draw() {
  background('FFF');
  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < 21; i++) {
    blendMode(MULTIPLY);
    rotate(9);
    noStroke();
    strokeWeight(290);
    if (i % 2 === 0) {
      stroke(80, 150, 255, 90);
      rect(10, 70, 50, 50);
    } else if (i % 3 === 0) {
      stroke(255, 255, 0);
      rect(10, 70, 50, 50);
    }
  }
  pop();
}
