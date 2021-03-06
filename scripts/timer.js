function Timer(time) {
  this.time = time;

  this.tick = function() {
    if ((this.time > 0) && (!timeOut)) {
      this.time -= 0.001;
    } else if (timeOut) {
      timeOut = true;
    } else {
      messageType = 0;
      hasLost = true;
      timeOut = true;
    }
  }

  this.disp = function() {
    var toFill = Math.floor(200 * this.time) + 30;
    c.fillStyle = `rgb(${toFill}, ${toFill}, ${toFill})`;
    c.fillRect(0, 0, canvas.width * this.time, gap);
  }
}
