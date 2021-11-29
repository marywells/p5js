function setup() {
  createCanvas(800, 800);
  noLoop();
  background(30);
}
const white = 'rgba(200,230,230,0.7)';

function draw() {
  for (let i = 100; i < 800; i += 9) {
    for (let j = 130; j < 800; j += 1) {
      push();
      rotate(sin * 3);
      strokeWeight(random(0, 3));
      stroke(white);
      point(i, j);
      pop();
    }
  }
}
