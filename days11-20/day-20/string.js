function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noLoop();
}
const blue = 'rgba(92,147,257,0.35)';

function draw() {
  background(0);
  noFill();
  strokeWeight(1);
  translate(width / 2, height / 2);

  for (let i = 0; i < 200; i++) {
    push();
    rotate(sin(frameCount + i) * 900);
    stroke(blue);
    rect(0, 0, 900 - i * 3, 600 - i * 3, 200 - i);
    pop();
  }
}
