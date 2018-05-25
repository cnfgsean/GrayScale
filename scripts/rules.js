var counter = 0;

function showRules() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  dispRules();
}

function dispRules() {
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
  c.font = "80px Tahoma";
  c.fillStyle = "rgba(256, 256, 256, 0.65)";

  c.fillText("The Gist", canvas.width / 2, (canvas.height / 2) - 100);
  c.font = "35px Arial";
  c.fillStyle = "rgba(256, 256, 256, 0.65)";
  c.fillText("stuff.", canvas.width / 2, (canvas.height / 2) + 70);



  c.font = "35px Arial";
  c.fillStyle = "rgba(256, 256, 256, 0.65)";
  c.fillText("Click to begin.", canvas.width / 2, (canvas.height / 2) + 70);

}
