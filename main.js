let wall;
let ray;
function setup() {
  createCanvas(windowWidth * 0.8, windowHeight * 0.9);
  wall = new Boundary(400, 100, 400, 400);
  ray = new Ray(200, 200);
}

function draw() {
  background(10);
  wall.show();
  ray.show();
}
