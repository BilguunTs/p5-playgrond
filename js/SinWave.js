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
    if (this.amplitude == 1) {
      this.y = -1;
    } else if (this.amplitude == -1) {
      this.y = +1;
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
