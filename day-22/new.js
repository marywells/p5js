function setup() {
  createCanvas(800, 800);
  angleMode(RADIANS);
  noLoop();
}
const white = 'rgba(230,230,230,0.70)';
function draw() {
  background(255);
  for (let i = 0; i < 10000; i += 1) {
    push();
    rotate(tan(i * random(1, 9)));
    stroke(16, 16, 24);
    strokeWeight(random(1, 19));
    point(0, i / 9);
    pop();
  }
}
