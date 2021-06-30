//let wall;
//let ray;
//let particle;
let size = 10;
let yAxis;
let res = 0;
function setup() {
  yAxis = windowHeight / 2;
  createCanvas(windowWidth * 0.8, windowHeight * 0.9);
  // wall = new Boundary(400, 100, 400, 400);
  //particle = new Particle();
}

function draw() {
  background(10);
  // wall.show();

  // for (let i = 1; i <= 360; i++) {
  //   let ampSin = Math.sin((i / 100) * res) * 50;
  //   circle(i * size, ampSin + yAxis, size);
  // }

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
