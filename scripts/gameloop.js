var rounds = 1;
var gradientAmt = 4;
var resetTimeValue = 1;
var globalTimer = new Timer(resetTimeValue);
var newRound = true;
var colors;
var timeOut = false;
var hasLost = false;
const gap = 15;
var clickSector;
var missingIndex;
var colorsButOne;
var messageType;

canvas.addEventListener("click", function(e) {
  if(onPlay) {
    console.log(e.clientX);
    console.log(e.clientY);

    var widthUnit = canvas.width / gradientAmt;
    var heightUnit = canvas.height / gradientAmt;

    clickSector = Math.floor(e.clientX / widthUnit);
    if (e.clientY > (heightUnit * clickSector)) {
      timeOut = true;
    }
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

function play() {
  if (onPlay) {
    c.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(play);
  } else {
    console.log("Not playing!");
  }

  // WIN CONDITIONS
  if (hasLost) {
    console.log("You lost!!");
    timeOut = false;
    onPlay = false;
  } else if (timeOut) {
    // check if answer is true
    console.log("Checking click sector " + clickSector);
    if (clickSector == missingIndex) {
      // If correct
      newRound = true; // Start a new round
      timeOut = false; // The time did not stop
      globalTimer.time = resetTimeValue * 0.99;
      resetTimeValue = globalTimer.time;
      rounds++;
      if (rounds % 10 == 0) {
        gradientAmt++;
      }
    } else {
      hasLost = true;
      messageType = 1;
    }

  }

  // ROUNDS
  if (newRound) {
    console.log("New Round");
    colors = makeGradient();
    console.log(colors);

    missingIndex = Math.floor(Math.random() * gradientAmt);
    colorsButOne = colors.slice();
    colorsButOne.splice(missingIndex, 1);
    colorsButOne = shuffle(colorsButOne);
    console.log(missingIndex + " is gone");
    console.log(colorsButOne);
    newRound = false;
  }

  // GRADIENT
  gradientDisplay(colors);

  // TOP
  gradientDisplayTop();

  // TIMER
  if (!timeOut) {
    globalTimer.tick();
    globalTimer.disp();
  }

  // SCORE
  dispScore();

  if (hasLost) {
    gameOver();

  }

}
