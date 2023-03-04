function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
  fill(255);
  noStroke();
  rectMode(CENTER);

  fill(0);
  rect(width / 2, height / 2, 300, 300);

  push(); // create a new, independent co-ordinate system, open
  translate(width / 2, height / 2);
  rotate(radians(frameCount));

  fill(255);
  rect(0, 0, 20, 400);
  pop(); // close co-ordinate system
}
