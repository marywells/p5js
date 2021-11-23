function setup() {
  createCanvas(800, 800);
  angleMode(RADIANS);
  noLoop();
}

function draw() {
  background(0);
  for (let i = 0; i < 900; i++) {
    r = random(1, 200);
    g = random(1, 200);
    b = random(1, 200);
    a = random(1, 255);

    push();
    rotate(cos(i));
    fill(255, g, b, a);

    strokeWeight(0);
    rect(i, i, i * 3, i * 3);
    pop();
  }
}
