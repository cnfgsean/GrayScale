// CANVAS ISTANTIATION
var canvas = document.querySelector("canvas");

canvas.height = window.innerHeight - 30;
canvas.width = window.innerWidth - 30;

var c = canvas.getContext("2d");
var startCounter = 0;
var onPlay = false;

var splashes = [
  "Stuff happens.",
  "Not your normal game.",
  "Shhhhhhhh.",
  "When there aren't enough colors.",
  "Because we can.",
  "What if?",
  "Not yet.",
  "Because we ran out of colors.",
  "Because gray isn't loved enough.",
  "Not enough sleep."
];

var splashChoice = Math.floor(Math.random() * splashes.length);
var hasShownRules = false;

function beginPlay() {
  console.log("Click");
  if (!hasShownRules) {
    showRules();
    hasShownRules = true;
  } else {
    document.removeEventListener("click", beginPlay);
    console.log("Playing");
    onPlay = true;
    c.clearRect(0, 0, canvas.width, canvas.height);
    play();
  }
}

function startup() {
  c.textAlign = "center";
  if (startCounter < 1) {
    requestAnimationFrame(startup);
  } else {
    console.log("Menu Loaded");
    document.addEventListener("click", beginPlay);
  }


  c.clearRect(0, 0, canvas.width, canvas.height);
  c.globalAlpha = startCounter;

  // BACKGROUND CIRCLE OUTSIDE
  c.beginPath();
  c.fillStyle = "rgba(50, 50, 50, 0.33)";
  c.arc(canvas.width / 2, canvas.height / 2, 320, 0, Math.PI * 2, false);
  c.fill();

  // BACKGROUND CIRCLE INSIDE
  c.beginPath();
  c.fillStyle = "rgba(50, 50, 50, 0.6)";
  c.arc(canvas.width / 2, canvas.height / 2, 300, 0, Math.PI * 2, false);
  c.fill();

  // GRAYSCALE
  c.font = "100px Tahoma";
  c.fillStyle = "rgba(256, 256, 256, 0.65)";
  c.fillText("GrayScale", canvas.width / 2, (canvas.height / 2) + 10);

  // SPLASH
  if (startCounter < .95) {
    c.font = "35px Arial";
    c.fillStyle = "rgba(256, 256, 256, 0.65)";
    c.fillText(splashes[splashChoice], canvas.width / 2, (canvas.height / 2) + 70);
  } else {
    c.font = "35px Arial";
    c.fillStyle = "rgba(256, 256, 256, 0.65)";
    c.fillText("Click to begin.", canvas.width / 2, (canvas.height / 2) + 70);
  }


  // Credits
  c.font = "12px Arial";
  c.fillStyle = "rgba(0, 0, 0, 0.35)";
  c.fillText("Coded in color - Sean", canvas.width / 2, canvas.height - 6);

  startCounter += 0.007;

}

// THE REAL GAME
var rounds = 0;
// var seps = 3; // The amount of rectangles in the gradient

function init() {
  startup();
}

init();
