function setup() {
  createCanvas(800, 800);
  angleMode(RADIANS);
  noLoop();
}

function draw() {
  background(190);
  translate(width / 2, height / 2);

  for (let i = 0; i < 900; i++) {
    r = random(1, 90);
    g = random(1, 90);
    b = random(1, 90);
    a = random(1, 120);
    push();
    rotate(sin(frameCount + i) * 100);
    noStroke();
    fill(r, g, 255, a);
    rect(i, i, i, i * 2, 200);
    pop();
  }
}
