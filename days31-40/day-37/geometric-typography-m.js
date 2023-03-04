function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  stroke(255);
  fill(255);
  strokeWeight(15);

  line(125, 125, 125, 375);
  line(375, 125, 375, 375);
  line(375, 125, 250, 250);
  line(125, 125, 250, 250);

  const ellipseSize = 50;
  stroke(255);
  fill(0);
  strokeWeight(15);

  ellipse(125, 125, ellipseSize, ellipseSize);

  ellipse(125, 375, ellipseSize, ellipseSize);

  ellipse(250, 250, ellipseSize, ellipseSize);

  ellipse(375, 125, ellipseSize, ellipseSize);

  ellipse(375, 375, ellipseSize, ellipseSize);
}
