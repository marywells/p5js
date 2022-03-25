function setup() {
  createCanvas(700, 700);
}

function draw() {
  background('FFF');
  for (let i = 0; i < 1000; i++) {
    blendMode(MULTIPLY);
    if (i % 2 === 0) {
      line(0, i, 700, i);
      strokeWeight(13);
      stroke(200, 200, 10, 1);
      i += 18;
    }
    if (i % 3 === 0) {
      line(i, 0, i, 700);
      strokeWeight(4);
      stroke(10, 100, 200, 1);
    }
  }
}
