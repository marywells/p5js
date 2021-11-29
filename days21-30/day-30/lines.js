function setup() {
  createCanvas(800, 800);
  noLoop();
  background(0);
}
const white = 'rgba(182, 190,180,0.5)';

function draw() {
  for (let i = 0; i < 800; i += 8) {
    for (let j = 0; j < 800; j += 670) {
      push();
      strokeWeight(1);
      stroke(white);
      line(i, j, 20, i);
      pop();
    }
  }
}
