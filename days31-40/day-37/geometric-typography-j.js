function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  dot = 120;
  fill(0);
  stroke(200);
  strokeWeight(20);

  ellipse(260, 125, dot, dot);

  radius = 60;
  fill(200);
  stroke(255);

  rect(235, 185, 50, 150, radius, radius, 0, 0);
  rect(160, 335, 125, 50, radius, 0, radius, radius);
}
