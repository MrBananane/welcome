function draw(context) {


  //Salle PLANIFIER
  context.fillStyle = 'rgba(255, 255, 255, 1)';
  context.font="18px Calibri";
  context.fillText("PLANIFIER",25,280);
  context.font="20px Calibri";
  context.fillText("12H00",25,300);
  context.fillStyle = 'rgba(255, 255, 255, 0.4)';
  context.beginPath();
  context.moveTo(1, 222);
  context.lineTo(75, 222);
  context.lineTo(117, 260);
  context.lineTo(117, 320);
  context.lineTo(85, 360);
  context.lineTo(1, 360);
  context.fill();

  //Salle COCRÉER
  context.fillStyle = 'rgba(255, 255, 255, 1)';
  context.font="18px Calibri";
  context.fillText("COCRÉER",140,115);
  context.font="20px Calibri";
  context.fillText("18H00",145,140);
  context.fillStyle = 'rgba(255, 255, 255, 0.4)';
  context.beginPath();
  context.moveTo(1, 222);
  context.lineTo(1, 150);
  context.lineTo(150, 0);
  context.lineTo(238, 0);
  context.lineTo(330, 90);
  context.lineTo(360, 130);
  context.lineTo(310, 130);
  context.lineTo(235, 210);
  context.lineTo(235, 210);
  context.lineTo(235, 260);
  context.lineTo(115, 260);
  context.lineTo(75, 222);

  context.fill();

  //Salle ÉCHANGER
  context.fillStyle = 'rgba(255, 255, 255, 1)';
  context.font="18px Calibri";
  context.fillText("ÉCHANGER",285,320);
  context.font="20px Calibri";
  context.fillText("14H00",300,340);
  context.fillStyle = 'rgba(255, 255, 255, 0.4)';
  context.beginPath();
  context.moveTo(273,365);
  context.lineTo(273,300);
  context.lineTo(303,258);
  context.lineTo(372,258);
  context.lineTo(372,360);
  context.lineTo(275,360);
  context.fill();

  //Salle CONVERGER
  context.fillStyle = 'rgba(255, 255, 255, 1)';
  context.font="18px Calibri";
  context.fillText("CONVERGER",15,557);
  context.font="20px Calibri";
  context.fillText("20h00",35,580);
  context.fillStyle = 'rgba(230, 40, 40, 0.4)';
  context.beginPath();
  context.moveTo(1, 489);
  context.lineTo(75, 489);
  context.lineTo(114, 521);
  context.lineTo(115, 591);
  context.lineTo(81, 630);
  context.lineTo(2, 630);
  context.fill();

  //Salle PRÉSENTER
  context.fillStyle = 'rgba(255, 255, 255, 1)';
  context.font="18px Calibri";
  context.fillText("PRÉSENTER",273,206);
  context.font="20px Calibri";
  context.fillText("8H00",300,230);
  context.fillStyle = 'rgba(255, 255, 255, 0.4)';
  context.beginPath();
  context.moveTo(307, 131);
  context.lineTo(354, 131);
  context.lineTo(373, 155);
  context.lineTo(373, 262);
  context.lineTo(302, 262);
  context.lineTo(276, 300);
  context.lineTo(230, 260);
  context.lineTo(230, 205);
  context.fill();



  //Salle COMBINER
  context.fillStyle = 'rgba(255, 255, 255, 1)';
  context.font="18px Calibri";
  context.fillText("COMBINER",265,645);
  context.font="20px Calibri";
  context.fillText("13H00",275,670);
  context.fillStyle = 'rgba(230, 40, 40, 0.4)';
  context.beginPath();
  context.moveTo(220,600);
  context.lineTo(375,600);
  context.lineTo(375,730);
  context.lineTo(220,730);
  context.fill();

}

$(document).ready(function(){
  var canvas =document.getElementById("canvas");
  var context =canvas.getContext("2d");

  function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, 100);
    context.font = '18pt Calibri';
    context.fillStyle = 'rgba(0, 0, 0, 1)';
    context.fillText(message, 0, 25);
  }

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: Math.floor((evt.clientX - rect.left)/scaleX),
      y: Math.floor((evt.clientY - rect.top)/scaleY)
    };
  }

  var height = canvas.height;
  var width = canvas.width;

  var scaleX = width / 500;
  var scaleY = height / 1000;
  context.scale(scaleX,scaleY);

// MOUSE X,Y COORDINATES SCRIPT

  // window.addEventListener('mousemove', function(evt) {
  //   var mousePos = getMousePos(canvas, evt);
  //   var message = mousePos.x + ', ' + mousePos.y;
  //   writeMessage(canvas, message);
  // }, false);

  draw(context);
});
$(window).resize(function(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, 100);
    context.font = '18pt Calibri';
    context.fillStyle = 'rgba(0, 0, 0, 1)';
    context.fillText(message, 0, 25);
  }

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: Math.floor((evt.clientX - rect.left)/scaleX),
      y: Math.floor((evt.clientY - rect.top)/scaleY)
    };
  }

  var height = canvas.height;
  var width = canvas.width;

  scaleX = width / 500;
  scaleY = height / 1000;
  context.scale(scaleX,scaleY);

  // window.addEventListener('mousemove', function(evt) {
  //   var mousePos = getMousePos(canvas, evt);
  //   var message = mousePos.x + ', ' + mousePos.y;
  //   writeMessage(canvas, message);
  // }, false);

  draw(context);
});
