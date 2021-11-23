function setup() {
  createCanvas(800, 800);
  angleMode(RADIANS);
  noLoop();
}

function draw() {
  background(190);
  for (let i = 20; i < 400; i += random(3, 15)) {
    b = random(1, 150);
    a = random(1, 30);

    push();
    rotate(0);
    fill(0, 0, b, a);
    strokeWeight(0);
    rect(i, i, i * i, i);
    pop();
  }
}
