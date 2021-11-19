let values = [];
let i = 0;
let w = 2;

function setup() {
  createCanvas(800, 800);
  values = new Array(width / w);
  for (let i = 0; i < values.length; i++) {
    values[i] = noise(i / 100.0) * height;
  }
  noLoop();
}

function draw() {
  background(0, 38, 38);

  for (let i = 0; i < values.length; i++) {
    stroke(255);

    line(height + values[i], i, values[i], i * w);
  }
}
