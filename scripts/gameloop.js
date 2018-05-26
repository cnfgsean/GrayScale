var rounds = 1;
var gradientAmt = 4;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function makeGradient() {
  var ranges = [];
  var isGray = Math.floor(Math.random() * gradientAmt);
  var r = Math.floor(Math.random() * 180);
  var g = Math.floor(Math.random() * 180);
  var b = Math.floor(Math.random() * 180);

  var r_right = Math.floor(Math.random() * (255 - r)) + r;
  var g_right = Math.floor(Math.random() * (255 - g)) + g;
  var b_right = Math.floor(Math.random() * (255 - b)) + b;

  var r_sep = Math.ceil((r_right - r) / gradientAmt);
  var g_sep = Math.ceil((g_right - g) / gradientAmt);
  var b_sep = Math.ceil((b_right - b) / gradientAmt);

  if (isGray == 1) {
    g = r;
    b = r;
    g_sep = r_sep;
    b_sep = r_sep;
  }
  for (var i = 0; i < gradientAmt; i++) {
    ranges.push([(r + (r_sep * i)),
      (g + (g_sep * i)),
      (b + (b_sep * i))]);
  }

  return shuffle(ranges);
}

function gradientDisplay(colors) {
  for (var i = 0; i < gradientAmt; i++) {
    var r = colors[i][0];
    var g = colors[i][1];
    var b = colors[i][2];
    c.fillStyle = `rgb(${r}, ${g}, ${b})`;
    console.log(c.fillStyle);
    c.fillRect(i * (canvas.width / gradientAmt), i * (canvas.height / gradientAmt), (canvas.width / gradientAmt) - 10 , canvas.height);
  }
}

function play() {
  // if (onPlay) {
  //   requestAnimationFrame(play);
  // }
  var colors = makeGradient();
  console.log(colors);
  console.log("Finished");
  c.fillStyle = "#fff";
  gradientDisplay(colors);
}
