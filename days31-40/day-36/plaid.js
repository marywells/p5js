function setup() {
  createCanvas(700, 700);
}

function draw() {
  background('FFF');
  for (let i = 0; i < 700; i += 6) {
    line(0, i, 700, i);
    strokeWeight(1);
    stroke(200, 100, 10);

    line(i, 0, i, 700);
    strokeWeight(1);
    stroke(100, 100, 200);
  }

  push();
  for (let i = 2; i < 700; i += 12) {
    blendMode(MULTIPLY);

    strokeWeight(3);
    stroke(80, 200, 255, 190);
    line(i, 700, i, 0);
  }
  pop();
}
