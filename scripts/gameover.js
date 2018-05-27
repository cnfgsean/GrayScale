var lossMessage;
var messageLostTime = [
  "Too fast for you?",
  "Just not enough time.",
  "Speed it up, dude!",
  "Wish you had more time?"
];
var messageLostWrong = [
  "Wrong color!",
  "Bad guess.",
  "Turn up your brightness?"
];
var topMessage = [
  "Oops!",
  "Sorry!",
  "Unfortunately,",
  "It looks like",
  "It appears"
];

function gameOver() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  switch(messageType) {
    case 0:
      lossMessage = messageLostTime[Math.floor(Math.random() * messageLostTime.length)];
      break;
    case 1:
      lossMessage = messageLostWrong[Math.floor(Math.random() * messageLostWrong.length)];
      break;

  }

  gradientDisplayTop();
  gradientDisplay(colors);
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

  c.font = "45px Tahoma";
  c.fillStyle = "rgba(256, 256, 256, 0.65)";
  c.fillText("Yeah, it was rectangle " + (missingIndex + 1).toString(), canvas.width / 2, (canvas.height / 2) + 120);

  c.fillStyle = `rgb(${colors[missingIndex][0]}, ${colors[missingIndex][1]}, ${colors[missingIndex][2]})`;
  c.fillRect((canvas.width / 2) - rectWidth, (canvas.height / 2) + 150, rectWidth * 2, 20);
}
