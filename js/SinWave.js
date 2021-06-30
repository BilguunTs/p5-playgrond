class SinWave {
  constructor(x, y) {
    this.y = y;
    this.x = x;
    this.sY = 0;
    this.size = 10;

    this.amplitude = 10;
    this.freq = 5;
  }

  _draw() {
    point(this.y, this.x, this.size);
  }
  _resonate() {
    for (let i = 1; i <= 360; i++) {
      let ampSin = Math.sin((i / 100) * res) * 50;
      circle(i * size, ampSin + yAxis, size);
    }
  }
  setSize(val) {
    this.size = val;
  }
  setAmp(val) {
    this.amplitude = val;
  }
  render() {
    this._draw();
    this._resonate();
  }
}
