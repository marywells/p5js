function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  blendMode(MULTIPLY);
  noStroke();

  background('rgba(252,191,73, 0.4)');

  const x = width / 2;
  const y = height / 2;

  const dim = min(width, height);
  const size = dim * 0.9;

  fill(0, 133, 204);
  ellipse(x / 1.2, y, size, size);
  push();
  fill(233, 83, 83);
  ellipse(x * 1.2, y, size, size);
  pop();
}
