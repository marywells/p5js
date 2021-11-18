function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  noLoop();
}
const green = 'rgba(90,240,90,0.35)';
function draw() {
  background(20, 69, 61);
  noFill();
  translate(width / 2, height / 7);

  for (let i = 0; i < 200; i++) {
    push();
    rotate(sin(frameCount + i) * 90);
    strokeWeight(2);
    stroke(green);
    rect(0, 0, 600 - i * 3, 600 - i * 3, 900 - i);
    pop();
  }
}
