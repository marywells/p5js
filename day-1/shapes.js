// @mattdesl

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  blendMode(BLEND);

  background(255, 196, 196);

  fill(255);

  blendMode(DIFFERENCE);

  noStroke();

  const x = width / 2;

  const y = height / 2;

  const dim = min(width, height);

  const size = dim * 0.5;

  rectMode(CENTER);
  rect(x, y, size, size);

  push();
  translate(size / 4, size / 4);
  ellipse(x, y, size, size);
  pop();

  push();
  translate(-size / 4, -size / 4);
  triangle(
    x,
    y - size / 2,
    x + size / 2,
    y + size / 2,
    x - size / 2,
    y + size / 2
  );
  pop();
}
