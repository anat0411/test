var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//calculate the volume and draw the canvas
function onCalc() {
  var elem = document.getElementById("radius");
  radius = elem.value;

  if (radius > 150 || radius < 0) {
    alert("Radius is too big or negative!");
  } else {
    ctx.beginPath();
    ctx.arc(150, 150, radius, 0, 2 * Math.PI);
    ctx.stroke();

    document.querySelector(".volume").innerHTML =
      (4 * Math.PI * Math.pow(radius, 3)) / 3;
  }
}

// clear the radius,volume and canvas
function onClear() {
  document.getElementById("radius").value = "";

  document.querySelector(".volume").innerHTML = "Calculates the Volume...";

  ctx.beginPath();
  ctx.clearRect(0, 0, 300, 300);
}

//bonus
window.onload = function() {
  for (let i = 0; i < 151; i++) {
    setInterval(function() {
      ctx.beginPath();
      ctx.arc(150, 150, i, 0, 2 * Math.PI);
      ctx.stroke();
    }, 100);
  }
};
