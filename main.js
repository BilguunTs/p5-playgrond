let wall;
let ray;
let particle;
function setup() {
  createCanvas(windowWidth * 0.8, windowHeight * 0.9);
  wall = new Boundary(400, 100, 400, 400);
  particle = new Particle();
}

function draw() {
  background(10);
  wall.show();

  particle.update(mouseX, mouseY);
  particle.show();
  particle.look(wall);
  // let pt = ray.cast(wall);
  // if (pt) {
  //   fill(255);
  //   circle(pt.x, pt.y, 20);
  // }
}
