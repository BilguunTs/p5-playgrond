class SinWave {
  constructor() {
    this.size = 10;
    this.angle = 0;
    this.yAxis = window.innerHeight / 2;
    this.amplitude = 10;
    this.freq = 5;
    this.increment = TWO_PI / 360;
  }

  _resonate() {
    for (let i = 1; i <= 360; i++) {
      let ampSin = map(
        sin(this.angle + i * 2),
        -1,
        1,
        this.yAxis - 200,
        this.yAxis + 200
      );
      circle(i * this.size, ampSin, this.size);
      line(i * this.size, this.yAxis, i * this.size, ampSin);

      stroke(255);
    }

    this.angle += this.increment;
  }
  setSize(val) {
    this.size = val;
  }
  setAmp(val) {
    this.amplitude = val;
  }
  render() {
    this._resonate();
  }
}
