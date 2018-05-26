var rounds = 1;
var gradientAmt = 4;
var resetTimeValue = 1;
var globalTimer = new Timer(resetTimeValue);
var newRound = true;
var colors;
var timeOut = false;
var hasLost = false;
const gap = 15;

canvas.addEventListener("click", function(e) {
  if(onPlay) {
    console.log(e);
    timeOut = true;
  }
});

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

  if (isGray > 3) {
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
    c.fillRect(i * (canvas.width / gradientAmt), (i * (canvas.height / gradientAmt)) + gap, (canvas.width / gradientAmt) - gap , 3000);
  }
}

function play() {
  if (onPlay) {
    c.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(play);
  } else {
    console.log("Not playing!");
  }

  // WIN CONDITIONS
  if (hasLost) {
    console.log("Time out!");
    timeOut = false;
    onPlay = false;
  } else if (timeOut) {
    // check if answer is true
    console.log("Checking");
    // If correct
    newRound = true; // Start a new round
    timeOut = false; // The time did not stop
    globalTimer.time = resetTimeValue * 0.99;
    resetTimeValue = globalTimer.time;
    rounds++;
    if (rounds % 7 == 0) {
      gradientAmt++;
    }
  }

  // ROUNDS
  if (newRound) {
    colors = makeGradient();
    console.log(colors);
    console.log("New Round");
    newRound = false;
  }

  // GRADIENT
  gradientDisplay(colors);

  // TIMER
  if (!timeOut) {
    console.log(globalTimer.time);
    globalTimer.tick();
    globalTimer.disp();
  }

}
