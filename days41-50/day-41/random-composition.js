// trcc
let fg = '#f1f1f1';
let bg = '#000000';

function setup() {
  createCanvas(900, 900);
}

function draw() {
  noLoop();
  background(bg);
  fill(fg);

  let randomCircleDiameter = random(100, 200);

  ellipse(
    random(100, 800),
    random(100, 800),
    randomCircleDiameter,
    randomCircleDiameter
  );

  stroke(fg);
  strokeWeight(8);
  line(random(600, 800), random(100, 800), random(200, 400), random(50, 90));

  strokeWeight(2);
  line(random(800, 600), random(800, 100), random(400, 200), random(800, 60));

  strokeWeight(50);
  rect(random(10, 800), random(100, 800), random(100, 400), random(100, 800));

  // saveFrames('filename.png');
}
