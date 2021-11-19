let font;
function preload() {
  font = loadFont('grotesk.ttf');
}

let points;
let bounds;

function setup() {
  createCanvas(600, 600);
  noStroke(0);
  fill(220, 237, 49);
  noLoop();

  points = font.textToPoints('m', 0, 0, 9, {
    sampleFactor: 10,
    simplifyThreshold: 0,
  });
  bounds = font.textBounds('  m', 0, 0, 11);
}

function draw() {
  background(165, 165, 141);
  beginShape();
  translate((-bounds.x * width) / bounds.w, (-bounds.y * height) / bounds.h);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    vertex(
      (p.x * width) / bounds.w +
        (sin((20 * p.y) / bounds.h + millis() / 1000) * width) / 30,
      (p.y * height) / bounds.h
    );
  }
  endShape(CLOSE);
}
