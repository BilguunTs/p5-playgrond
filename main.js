//let wall;
//let ray;
//let particle;
let size = 10;
let yAxis;
let res = 0;
let angle = 0;

function setup() {
  yAxis = windowHeight / 2;
  createCanvas(windowWidth * 0.8, windowHeight * 0.9);
  // wall = new Boundary(400, 100, 400, 400);
  //particle = new Particle();
}

function draw() {
  background(10);
  // wall.show();

  for (let i = 1; i <= 360; i++) {
    let ampSin = map(sin(angle + i * 2), -1, 1, yAxis - 200, yAxis + 200);
    circle(i * size, ampSin, size);
    line(i * size, yAxis, i * size, ampSin);

    stroke(255);
  }

  let increment = TWO_PI / 360;

  angle += increment;

  // res++;
  // particle.update(mouseX, mouseY);
  // particle.show();

  // particle.look(wall);
  // let pt = ray.cast(wall);
  // if (pt) {
  //   fill(255);
  //   circle(pt.x, pt.y, 20);
  // }
}
