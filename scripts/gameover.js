var lossMessage;
var messageLostTime = [
  "Too fast for you?",
  "Just not enough time.",
  "Speed it up, dude!",
  "Wish you had more time?",
  "With practice comes speed."
];
var messageLostWrong = [
  "Wrong color!",
  "Bad guess.",
  "Turn up your brightness?",
  "That was a toughie.",
  "Wish you knew everything.."
];
var topMessage = [
  "Oops!",
  "Sorry!",
  "Unfortunately,",
  "It looks like",
  "It appears"
];
var messageReveal = [
  "Yeah, it was",
  "Should have clicked",
  "Better choice would have been",
  "Who knew? It was",
  "Apparently, it was"
];

function gameOver() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  canvas.addEventListener("click", function() {
    location.reload();
  });

  document.addEventListener("keydown", function(e) {
    if ((e.keyCode == 32) && (localStorage.getItem("highscore") != null)) {
      localStorage.removeItem("highscore");
      console.log("High score reset.");
      c.font = "15px Tahoma";
      c.fillStyle = "rgba(0, 0, 0, 1)";
      c.fillText("High Score reset for next time.", canvas.width / 2, (canvas.height - 30));
    }
  });

  switch(messageType) {
    case 0:
      lossMessage = messageLostTime[Math.floor(Math.random() * messageLostTime.length)];
      break;
    case 1:
      lossMessage = messageLostWrong[Math.floor(Math.random() * messageLostWrong.length)];
      break;

  }
  if ((localStorage.getItem("highscore") == null) || parseInt(localStorage.getItem("highscore")) < rounds) {
    localStorage.setItem("highscore", rounds.toString());
  }

  gradientDisplayTop();
  gradientDisplay(colors);
  dispHighScore();
  dispScore();


  // BACKGROUND CIRCLE OUTSIDE
  c.beginPath();
  c.fillStyle = "rgba(50, 50, 50, 0.4)";
  c.arc(canvas.width / 2, canvas.height / 2, 320, 0, Math.PI * 2, false);
  c.fill();

  // BACKGROUND CIRCLE INSIDE
  c.beginPath();
  c.fillStyle = "rgba(50, 50, 50, 0.7)";
  c.arc(canvas.width / 2, canvas.height / 2, 300, 0, Math.PI * 2, false);
  c.fill();

  // GRAYSCALE
  c.font = "30px Tahoma";
  c.fillStyle = "rgba(256, 256, 256, 0.65)";
  c.fillText(topMessage[Math.floor(Math.random() * topMessage.length)], (canvas.width / 2) - 100, (canvas.height / 2) - 150);

  c.font = "100px Tahoma";
  c.fillStyle = "rgba(256, 256, 256, 0.65)";
  c.fillText("GrayScale", canvas.width / 2, (canvas.height / 2) - 60);

  c.font = "37px Tahoma";
  c.fillStyle = "rgba(256, 256, 256, 0.65)";
  c.fillText("has ended.", canvas.width / 2, (canvas.height / 2));

  c.font = "50px Tahoma";
  c.fillStyle = "rgba(256, 256, 256, 0.65)";
  c.fillText(lossMessage, canvas.width / 2, (canvas.height / 2) + 60);

  const rectWidth = 100;

  c.font = "27px Tahoma";
  c.fillStyle = "rgba(256, 256, 256, 0.65)";
  c.fillText(messageReveal[Math.floor(Math.random() * messageReveal.length)] + " rectangle " + (missingIndex + 1).toString(), canvas.width / 2, (canvas.height / 2) + 120);

  c.fillStyle = `rgb(${colors[missingIndex][0]}, ${colors[missingIndex][1]}, ${colors[missingIndex][2]})`;
  c.fillRect((canvas.width / 2) - rectWidth, (canvas.height / 2) + 150, rectWidth * 2, 20);

  c.strokeStyle = "rgba(255, 255, 255, 0.7)";
  c.lineWidth = 2;
  c.strokeRect((canvas.width / 2) - rectWidth, (canvas.height / 2) + 150, rectWidth * 2, 20);

  c.font = "15px Tahoma";
  c.fillStyle = "rgba(256, 256, 256, 0.65)";
  c.fillText("Click me and get a better score!", canvas.width / 2, (canvas.height / 2) + 200);

  c.font = "15px Tahoma";
  c.fillStyle = "rgba(256, 256, 256, 0.65)";
  c.fillText("Press Space to reset the high score.", canvas.width / 2, (canvas.height / 2) + 230);
}
