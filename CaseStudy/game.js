var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var score;

var ballRadius; // bán kính của bóng
var ballX; // bóng trục X
var ballY; // bóng trục X
var ballSpeedX; // Tốc độ bóng trục X
var ballSpeedY; // Tốc độ bóng trục X

var platformWidth;
var platformHeight;
var platformX;
var platformY;
var platformSpeedX;

var readyToBounce;
var reset;
var rightIsPressed;
var leftIsPressed;

var multiplierX;
var multiplierY;
let img1 = document.getElementById('img');
// khởi tạo vẽ thanh trượt và màu bóng
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawPlatform();
    drawBall();
}
// vẽ thanh trượt
function drawPlatform() {
    context.beginPath();
    context.rect(platformX, platformY, platformWidth, platformHeight);
    context.fillStyle = "#5f8dcd";
    context.fill();
    context.closePath();
}
// vẽ màu bóng
function drawBall() {
    context.beginPath();
    context.arc(ballX, ballY, ballRadius, 0, Math.PI * 2, false);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
}

function updatePlatform() {
    if (rightIsPressed && platformX + platformWidth < canvas.width) {
        platformX += platformSpeedX;
    }
    if (leftIsPressed && platformX > 0) {
        platformX -= platformSpeedX;
    }
}
// tăng tốc độ
function tangLever() {
    ballSpeedY++;
}

function updateBall() {
    if (ballY + ballRadius > canvas.height) { // trục y bóng  + bán kính > chiều cao của canvas
        gameOver();
    } else {
        if (ballX + ballRadius > canvas.width || ballX - ballRadius < 0) {
            multiplierX = -multiplierX;
        }
        if (ballY + ballRadius > canvas.height - platformHeight && ballX + ballRadius > platformX && ballX - ballRadius < platformX + platformWidth && readyToBounce) {
            if (reset) {
                if (ballX == platformX + platformWidth / 2) {
                    if (!Math.random() > 0.5) {
                        multiplierX = -multiplierX;
                    } // đảo bóng nếu chạm nữa thanh trượt
                }
                ballSpeedX = 2; // tốc độ X = 2
                reset = false;
            }
            if (score > 10) {
                ballSpeedY++; // tăng tốc độ
            }
            readyToBounce = false;
            score++;
            multiplierY = -multiplierY;
        } else if (ballY - ballRadius < 0) {
            multiplierY = -multiplierY;
            readyToBounce = true;
        }

        ballX += ballSpeedX * multiplierX;
        ballY += ballSpeedY * multiplierY;
    }
}
// thông báo đã chết
function gameOver() {
    context.drawImage(img1, 0, 0);
    context.font = "50px Georgia";
    context.fillText("Score : " + score, 255, 250);
}
// game mới
function newGame() {
    score = 0;
    ballRadius = 20;
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = 0;
    ballSpeedY = 2; // tốc độ của bóng
    platformWidth = 150; // chiều dài thanh trượt
    platformHeight = 20; // chiều cao thanh trượt
    platformX = canvas.width / 2 - platformWidth / 2;
    platformY = canvas.height - platformHeight;
    platformSpeedX = 5; // độ nhanh của thanh trượt
    reset = true;
    readyToBounce = true;
    rightIsPressed = false;
    leftIsPressed = false;
    multiplierX = 1;
    multiplierY = 1;
}
// cập nhật điểm
function updateScore() {
    context.font = "16px Arial";
    context.fillStyle = "#0095DD";
    context.fillText("Score: " + score, canvas.width - 80, 25);
}
// lấy phương thức khởi tạo cập nhật bóng và điểm
function update() {
    draw();
    updateBall();
    updatePlatform();
    updateScore();
}
// điều khiển bàn phím
function keyReleasedEvent(e) {
    if (e.keyCode == 39) {
        leftIsPressed = true;
    } else if (e.keyCode == 37) {
        rightIsPressed = true;
    }
}
// điều khiển bàn phímy
function keyPressedEvent(e) {
    if (e.keyCode == 39) {
        leftIsPressed = false;
    } else if (e.keyCode == 37) {
        rightIsPressed = false;
    }
}
// điều khiển ctrl
function keyCtrlEvent(e) {
    if (e.keyCode == 17) {
        tangLever.call();
    }
}
// điều khiển bàn phím
document.addEventListener("keydown", keyPressedEvent, false);
document.addEventListener("keyup", keyReleasedEvent, false);
document.addEventListener("keyup", keyCtrlEvent, false);

setInterval(update, 10);