var init = function() {
  var randomRange = function(min, max) {
    return Math.random() * (max - min) + min;
  };

  //do all the things here
  var canvas = document.getElementById("drawme");
  var context = canvas.getContext('2d');

  context.lineWidth = 10;
  context.strokeStyle = "yellow";
  context.fillStyle = "blue";

  var particleArray = []; // <-- nothing to start with

  var drawFrame = function() {
    var particle = {
      x: 225,
      xSpeed: randomRange(-15, 15),
      y: 225,
      ySpeed: randomRange(-15, 15),
      yAccel: randomRange(0.1, 0.9),
      w: randomRange(5, 25),
      h: randomRange(3, 20)
    };

    particleArray.push(particle);

    context.clearRect(0, 0, 500, 500);

    for(var i = 0; i < particleArray.length; i++) {
      var p = particleArray[i];

      //context.fillRect(p.x, p.y, p.w, p.h);
      context.beginPath();
      context.arc(p.x, p.y, p.w, 0, 2 * Math.PI);
      context.stroke();

      p.x += p.xSpeed;
      p.ySpeed += p.yAccel;
      p.y += p.ySpeed;
    }
  };

  clearId = setInterval(drawFrame, 30);
  setTimeout(function(){clearInterval(clearId);}, 3000);
};


window.onload = init;
