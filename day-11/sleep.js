function setup() {
  createCanvas(800, 800);
  textFont('Georgia');
  noLoop();
}

const green = 'rgba(0,255,0,0.75)';
const yellow = 'rgba(255, 123, 0,0.10)';

function draw() {
  for (let i = 0; i < width; i += 70) {
    for (let j = 0; j < height; j += 70) {
      rect(i, j, i, j);

      strokeWeight(random(0, 30));
    }
  }

  for (let i = 10; i < width; i += 20) {
    for (let j = 20; j < width; j += 20) {
      textSize(15);
      text('asleep', i, i);
      fill(green);
      text('awake', j, j);
    }
  }
}
