function makeGradient() {
  var ranges = [];
  var isGray = Math.floor(Math.random() * gradientAmt);
  var r = Math.floor(Math.random() * 180);
  var g = Math.floor(Math.random() * 180);
  var b = Math.floor(Math.random() * 180);

  var r_right = Math.floor(Math.random() * (255 - r)) + r;
  var g_right = Math.floor(Math.random() * (255 - g)) + g;
  var b_right = Math.floor(Math.random() * (255 - b)) + b;

  var r_sep = Math.ceil((r_right - r) / gradientAmt) + 5;
  var g_sep = Math.ceil((g_right - g) / gradientAmt) + 5;
  var b_sep = Math.ceil((b_right - b) / gradientAmt) + 5;

  if (isGray > 3) {
    g = r;
    b = r;
    g_sep = r_sep;
    b_sep = r_sep;
  }
  for (var i = 0; i < gradientAmt; i++) {
    ranges.push([(r + (r_sep * i)) % 255,
      (g + (g_sep * i)) % 255,
      (b + (b_sep * i)) % 255]);
  }

  return shuffle(ranges);
}

function gradientDisplay(colors) {
  for (var i = 0; i < gradientAmt; i++) {
    var r = colors[i][0];
    var g = colors[i][1];
    var b = colors[i][2];
    c.fillStyle = `rgb(${r}, ${g}, ${b})`;
    c.fillRect(i * (canvas.width / gradientAmt), (i * (canvas.height / gradientAmt)) + gap, (canvas.width / gradientAmt) - gap , 3000);

    c.strokeStyle = "#ddd";
    c.lineWidth = 5;
    c.strokeRect(i * (canvas.width / gradientAmt), (i * (canvas.height / gradientAmt)) + gap, (canvas.width / gradientAmt) - gap , 3000);

  }
}
