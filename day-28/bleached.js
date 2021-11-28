function setup() {
  createCanvas(800, 800);
  noLoop();
  background(30, 50, 30);
}
const white = 'rgba(18,255,80,0.1)';

function draw() {
  for (let i = 0; i < 990; i += 15) {
    for (let j = 0; j < 400; j += 5) {
      push();
      rotate(random(noise(i), noise(j)));
      strokeWeight(random(1, 3));
      stroke(white);
      line(i / 2, j / 2, i, j);
      pop();
    }
  }
}
