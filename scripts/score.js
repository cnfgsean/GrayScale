var radius = canvas.width / 27;

function dispScore() {
  // OUTER PIE
  var lastDig = parseInt(rounds.toString().slice(-1));
  // console.log(lastDig);
  c.fillStyle = "rgba(50, 50, 50, 0.5)";
  var center = (canvas.height / 8);
  // c.beginPath();
  c.moveTo(center, center);
  c.arc(center, center, radius + 10, 0, (lastDig * 0.1) * (Math.PI * 1.5), false);
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
