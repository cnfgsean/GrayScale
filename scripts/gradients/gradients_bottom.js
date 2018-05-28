function makeGradient() {
  var ranges = [];
  var isGray = Math.floor(Math.random() * (gradientAmt * 2));
  var r = Math.floor(Math.random() * 180);
  var g = Math.floor(Math.random() * 180);
  var b = Math.floor(Math.random() * 180);

  var r_right = Math.floor(Math.random() * (255 - r)) + r;
  var g_right = Math.floor(Math.random() * (255 - g)) + g;
  var b_right = Math.floor(Math.random() * (255 - b)) + b;

  var r_sep = Math.ceil((r_right - r) / gradientAmt) + 2;
  var g_sep = Math.ceil((g_right - g) / gradientAmt) + 5;
  var b_sep = Math.ceil((b_right - b) / gradientAmt) + 7;

  if (isGray == 1) {
    g = r;
    b = r;
    g_sep = r_sep + 4;
    b_sep = r_sep + 10;
  }
  for (var i = 0; i < gradientAmt; i++) {
    ranges.push([(r + (r_sep * i)) % 255,
      (g + (g_sep * i)) % 255,
      (b + (b_sep * i)) % 255]);
  }

  return shuffle(ranges);
}

function gradientDisplay() {
  for (var i = 0; i < gradientAmt; i++) {
    var r = colors[i][0];
    var g = colors[i][1];
    var b = colors[i][2];
    c.fillStyle = `rgb(${r}, ${g}, ${b})`;
    c.fillRect(i * (canvas.width / gradientAmt), (i * (canvas.height / gradientAmt)) + gap * 2.7, (canvas.width / gradientAmt) - gap , 3000);

    c.strokeStyle = "#bbb";
    c.lineWidth = 8;
    c.strokeRect(i * (canvas.width / gradientAmt), (i * (canvas.height / gradientAmt)) + gap * 2.7, (canvas.width / gradientAmt) - gap , 3000);

    c.font = "20px Arial";
    for (var j = 0; j < gradientAmt; j++) {
      c.beginPath();
      c.fillStyle = "rgba(50, 50, 50, 0.33)";
      c.arc(j * (canvas.width / gradientAmt) + ((canvas.width / gradientAmt) / 2), canvas.height - 23, 15, 0, Math.PI * 2, false);
      c.fill();

      c.fillStyle = "rgba(256, 256, 256, 0.6)";
      c.fillText((j + 1).toString(), j * (canvas.width / gradientAmt) + ((canvas.width / gradientAmt) / 2), canvas.height - 15);

    }

  }
}
