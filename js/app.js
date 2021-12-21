/* Canvas clock */

setInterval(() => {
   var canvas = document.getElementById('canvas');
   var ctx = canvas.getContext('2d');
   ctx.strokeRect(0, 0, canvas.width, canvas.height);

   /* координаты центра и радиуса часов */
   var radiusClock = canvas.width / 2 - 10;
   var xCenterClock = canvas.width / 2;
   var yCenterClock = canvas.height / 2;

   /* Очистка экрана. */
   ctx.fillStyle = "gray";
   ctx.fillRect(0, 0, canvas.width, canvas.height);

   /* контур часов */
   ctx.strokeStyle = "#000";
   ctx.lineWidth = 2;
   ctx.beginPath();
   ctx.arc(xCenterClock, yCenterClock, radiusClock, 0, 2 * Math.PI, true);
   ctx.moveTo(xCenterClock, yCenterClock);
   ctx.fillStyle = 'yellow';
   ctx.fill();
   ctx.stroke();
   ctx.closePath();

   /* круги часов */
   var radiusNum = radiusClock - 50;
   var radiusPoint;
   for (var tm = 0; tm < 60; tm++) {
      ctx.beginPath();
      if (tm % 5 == 0) {
         radiusPoint = 30;
      } else {
         radiusPoint = 0;
      }
      var xPointM = xCenterClock + radiusNum * Math.cos(-6 * tm * (Math.PI / 180) + Math.PI / 2);
      var yPointM = yCenterClock - radiusNum * Math.sin(-6 * tm * (Math.PI / 180) + Math.PI / 2);
      ctx.arc(xPointM, yPointM, radiusPoint, 0, 2 * Math.PI, true);
      ctx.fillStyle = 'green';
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
   }

   /* цифры циферблата часов */
   for (var th = 0; th <= 12; th++) {
      ctx.beginPath();
      ctx.font = 'bold 25px sans-serif';
      var xText = xCenterClock + radiusNum * Math.cos(-30 * th * (Math.PI / 180) + Math.PI / 2);
      var yText = yCenterClock - radiusNum * Math.sin(-30 * th * (Math.PI / 180) + Math.PI / 2);
      if (th <= 9) {
         ctx.fillText(th, xText - 6, yText + 10);
      } else {
         ctx.fillText(th, xText - 15, yText + 10);
      }
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
   }

   /* стрелки */
   var lengthSeconds = radiusNum - 10;
   var lengthMinutes = radiusNum - 15;
   var lengthHour = lengthMinutes / 1.5;
   var currentTime = new Date();
   var t_sec = 6 * currentTime.getSeconds();
   var t_min = 6 * (currentTime.getMinutes() + (1 / 60) * currentTime.getSeconds());
   var t_hour = 30 * (currentTime.getHours() + (1 / 60) * currentTime.getMinutes());

   /* секунды */
   ctx.beginPath();
   ctx.strokeStyle = "#FF0000";
   ctx.moveTo(xCenterClock, yCenterClock);
   ctx.lineTo(xCenterClock + lengthSeconds * Math.cos(Math.PI / 2 - t_sec * (Math.PI / 180)),
      yCenterClock - lengthSeconds * Math.sin(Math.PI / 2 - t_sec * (Math.PI / 180)));
   ctx.stroke();
   ctx.closePath();

   /* минуты */
   ctx.beginPath();
   ctx.strokeStyle = "#000000";
   ctx.lineWidth = 3;
   ctx.moveTo(xCenterClock, yCenterClock);
   ctx.lineTo(xCenterClock + lengthMinutes * Math.cos(Math.PI / 2 - t_min * (Math.PI / 180)),
      yCenterClock - lengthMinutes * Math.sin(Math.PI / 2 - t_min * (Math.PI / 180)));
   ctx.stroke();
   ctx.closePath();

   /* часы */
   ctx.beginPath();
   ctx.lineWidth = 5;
   ctx.moveTo(xCenterClock, yCenterClock);
   ctx.lineTo(xCenterClock + lengthHour * Math.cos(Math.PI / 2 - t_hour * (Math.PI / 180)),
      yCenterClock - lengthHour * Math.sin(Math.PI / 2 - t_hour * (Math.PI / 180)));
   ctx.stroke();
   ctx.closePath();

   /* центр часов */
   ctx.beginPath();
   ctx.strokeStyle = "#000";
   ctx.fillStyle = "#fff";
   ctx.lineWidth = 3;
   ctx.arc(xCenterClock, yCenterClock, 5, 0, 2 * Math.PI, true);
   ctx.stroke();
   ctx.fill();
   ctx.closePath();

   /* цифровые часы */
   ctx.beginPath();
   var time = currentTime.toLocaleTimeString();
   ctx.font = 'bold 40px sans-serif';
   ctx.fillStyle = 'black';
   ctx.fill();
   ctx.fillText(time, xCenterClock - 80, yCenterClock - 80);
   ctx.closePath();
});



