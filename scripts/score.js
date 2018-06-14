var radius = canvas.width / 27;
var center = (canvas.height / 8);

function dispScore() {
  // OUTER PIE
  var lastDig = parseInt(rounds.toString().slice(-1));
  // console.log(lastDig);
  c.fillStyle = "rgba(50, 50, 50, 0.5)";
  // c.beginPath();
  c.moveTo(center, center);
  c.arc(center, center, radius + 10, Math.PI * 1.5, (Math.PI * 1.5) + ((lastDig * 0.1) * Math.PI * 2), false);
  c.lineTo(center, center);
  c.fill();

  // INNER CIRCLE
  c.fillStyle = "rgba(50, 50, 50, 0.5)";
  c.beginPath();
  c.arc((canvas.height / 8), (canvas.height / 8), radius, 0, Math.PI * 2, false);
  c.fill();

  c.fillStyle = "rgba(255, 255, 255, 0.8)";
  c.font = "50px Tahoma";
  c.fillText(rounds.toString(), center, center * 1.2);

}

function dispHighScore() {
  c.fillStyle = "rgba(50, 50, 50, 0.3)";
  c.beginPath();
  c.arc((canvas.height / 8), (canvas.height / 2), radius * 2, 0, Math.PI * 2, false);
  c.fill();

  c.fillStyle = "rgba(50, 50, 50, 0.1)";
  c.beginPath();
  c.arc((canvas.height / 8), (canvas.height / 2), radius * 1.8, 0, Math.PI * 2, false);
  c.fill();

  c.fillStyle = "rgba(255, 255, 255, 0.95)";
  c.font = "25px Verdana";
  c.fillText("High Score:", center, canvas.height / 2);

  c.fillStyle = "rgba(255, 255, 255, 1)";
  c.font = "35px Verdana";
  c.fillText(localStorage.getItem("highscore"), center, (canvas.height / 2) + 40);

}
