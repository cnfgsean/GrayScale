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
  c.fillStyle = "rgba(256, 256, 256, 0.8)";

  c.fillText("The Gist", canvas.width / 2, (canvas.height / 2) - 100);
  c.font = "30px Arial";
  c.fillStyle = "rgba(256, 256, 256, 0.55)";
  c.fillText("You will be presented rectangles", canvas.width / 2, (canvas.height / 2) - 50);
  c.fillText("on the bottom and top", canvas.width / 2, (canvas.height / 2) - 10);
  c.fillText("that follow the same gradient.", canvas.width / 2, (canvas.height / 2) + 30);
  c.fillText("There will always be 1 less", canvas.width / 2, (canvas.height / 2) + 70);
  c.fillText("rectangle on the top.", canvas.width / 2, (canvas.height / 2) + 110);
  c.fillText("Simply click the rectangle on the", canvas.width / 2, (canvas.height / 2) + 150);
  c.fillText("bottom with the extra color.", canvas.width / 2, (canvas.height / 2) + 190);


  c.font = "35px Arial";
  c.fillStyle = "rgba(256, 256, 256, 0.8)";
  c.fillText("Click to begin.", canvas.width / 2, (canvas.height / 2) + 240);

}
