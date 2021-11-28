function setup() {
  createCanvas(800, 800);
  noLoop();
  background(30, 90, 90);
}
const white = 'rgba(180,255,80,0.3)';

function draw() {
  for (let i = 0; i < 990; i += 15) {
    for (let j = 0; j < 400; j += 5) {
      push();
      rotate(random(noise(i), 200));
      strokeWeight(random(1, 3));
      stroke(white);
      line(i / 2, j / 2, i, j);
      pop();
    }
  }
}
