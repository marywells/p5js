function setup() {
  createCanvas(800, 800);
  angleMode(RADIANS);
  noLoop();
}
const green = 'rgba(200,200,220,0.50)';
function draw() {
  background(17, 45, 25);
  noFill();
  translate(width / 1.5, height / 1.5);

  for (let i = 0; i < 600; i++) {
    push();
    rotate(tan(frameCount + i));
    strokeWeight(random(1, 2));
    stroke(green);
    rect(i, i, i * 3, i * 3);
    pop();
  }
}
