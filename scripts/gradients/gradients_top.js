function gradientDisplayTop() {
  for (var i = 0; i < colorsButOne.length; i++) {
    var r = colorsButOne[i][0];
    var g = colorsButOne[i][1];
    var b = colorsButOne[i][2];
    c.fillStyle = `rgb(${r}, ${g}, ${b})`;
    c.fillRect((i + 1) * (canvas.width / gradientAmt), gap, (canvas.width / gradientAmt) - gap, ((i + 1) * (canvas.height / gradientAmt)) - (gap * 2.5));

    c.strokeStyle = "#ddd";
    c.lineWidth = 5;
    c.strokeRect((i + 1) * (canvas.width / gradientAmt), gap, (canvas.width / gradientAmt) - gap, ((i + 1) * (canvas.height / gradientAmt)) - (gap * 2.5));

  }
}
