const rings = [];

const blue = 'rgba(92,147,147,0.75)';

function setup() {
  createCanvas(800, 800);
  const count = 270;

  for (let i = 0; i < count; i++) {
    const diameter = (i * 2) / count;
    const arcLength = random(PI * 0.05, PI * 2);
    const arcAngle = random(-PI * 2, PI * 2);

    rings.push({
      diameter,
      arcLength,
      arcAngle,
    });
  }
  noLoop();
}

function draw() {
  background(0);
  const minDim = 1000;

  noFill();
  strokeWeight(1);
  strokeCap(ROUND);
  stroke(blue);

  let d = minDim;
  d -= d * 0.4;

  for (let i = 0; i < rings.length; i++) {
    const { diameter, arcLength, arcAngle } = rings[i];
    const spin = (millis() / 1000) * 1;

    arc(
      width / 2,
      height / 2,
      diameter * d,
      diameter * d,
      spin + arcAngle,
      spin + arcAngle + Math.PI * arcLength
    );
  }
}

//thanks to @mattdesl for this one!
