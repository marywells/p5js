function setup() {
  createCanvas(800, 800);
  angleMode(RADIANS);
  noLoop();
}

function draw() {
  const white = 'rgba(182, 190,180,0.5)';
  translate(width / 2, height / 2);

  for (let i = 0; i < 900; i++) {
    r = random(1, 90);
    g = random(1, 90);
    b = random(1, 90);
    a = random(1, 120);
    push();
    rotate(sin(frameCount + i) * 100);
    stroke(0);
    fill(r, g, 255, a);
    rect(i, i, i, i * 2, 100);
    pop();
  }
}
