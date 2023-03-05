// trcc
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
  fill(255);
  noStroke();
  rectMode(CENTER);

  push();
  translate(width / 2, height / 2);
  rotate(radians(frameCount));
  fill(0);
  rect(0, 0, 300, 300);

  fill(255);
  rect(0, 0, 20, 400);
  pop;
}
