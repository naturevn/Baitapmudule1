 var canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");
 var ballRadius = 10;
 var x = canvas.width / 2;
 var y = canvas.height - 30;
 var dx = 2;
 var dy = -2;
 var paddleHeight = 10;
 var paddleWidth = 75;
 var paddleX = (canvas.width - paddleWidth) / 2;
 var rightPressed = false;
 var leftPressed = false;

 var lives = 1;


 document.addEventListener("keydown", keyDownHandler, false);
 document.addEventListener("keyup", keyUpHandler, false);

 function keyDownHandler(e) {
     if (e.keyCode == 39) {
         rightPressed = true;
     } else if (e.keyCode == 37) {
         leftPressed = true;
     }
 }

 function keyUpHandler(e) {
     if (e.keyCode == 39) {
         rightPressed = false;
     } else if (e.keyCode == 37) {
         leftPressed = false;
     }
 }
 // hàm vẽ màu quả bóng
 function drawBall() {
     ctx.beginPath();
     ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
     ctx.fillStyle = "rgb(253, 36, 36)"; // màu quả bóng
     ctx.fill();
     ctx.closePath();
 }
 // hàm vẽ thanh trượt ngang phía dưới
 function drawPaddle() {
     ctx.beginPath();
     ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
     ctx.fillStyle = "rgb(253, 36, 36)"; // màu thanh trượt
     ctx.fill();
     ctx.closePath();
 }
 // hàm vẽ khởi tạo các hàm trên
 function draw() {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     drawBall();
     drawPaddle();

     if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
         dx = -dx;
     }
     if (y + dy < ballRadius) {
         dy = -dy;
     } else if (y + dy > canvas.height - ballRadius) {
         if (x > paddleX && x < paddleX + paddleWidth) {
             dy = -dy;
         } else {
             lives--;
             if (!lives) {
                 //  alert("Bạn Đã Để Bóng Chạm Đất !!");
                 document.location.reload();
             } else {
                 x = canvas.width / 2;
                 y = canvas.height - 30;
                 dx = 3;
                 dy = -3;
                 paddleX = (canvas.width - paddleWidth) / 2;
             }
         }
     }

     if (rightPressed && paddleX < canvas.width - paddleWidth) {
         paddleX += 7;
     } else if (leftPressed && paddleX > 0) {
         paddleX -= 7;
     }

     x += dx;
     y += dy;
     requestAnimationFrame(draw);
 }


 function star() {
     draw();
 }