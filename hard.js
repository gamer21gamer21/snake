const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 20;
const snakeColorPlayer1 = "green";
const snakeColorPlayer2 = "#fff";
const foodColor = "red";


let snakePlayer1 = [{ x: 10, y: 10 }];
let dxPlayer1 = 1;
let dyPlayer1 = 0;

let food = { x: 15, y: 15 };

function drawSnake(snake, snakeColor) {
  snake.forEach(segment => {
    ctx.fillStyle = snakeColor;
    ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
  });
}

function drawFood() {
  ctx.fillStyle = foodColor;
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function update() {
  
  const headPlayer1 = { x: snakePlayer1[0].x + dxPlayer1, y: snakePlayer1[0].y + dyPlayer1 };
  snakePlayer1.unshift(headPlayer1);

  if (headPlayer1.x === food.x && headPlayer1.y === food.y) {
    food.x = Math.floor(Math.random() * (canvas.width / gridSize));
    food.y = Math.floor(Math.random() * (canvas.height / gridSize));
  } else {
    snakePlayer1.pop();
  }


  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawFood();
  drawSnake(snakePlayer1, snakeColorPlayer1);
  drawSnake(snakePlayer2, snakeColorPlayer2);
}

const gameLoop = setInterval(update,600);

document.addEventListener("keydown", (event) => {
  
  switch (event.key) {
    case "ArrowUp":
      if (dyPlayer1 !== 1) {
        dxPlayer1 = 0;
        dyPlayer1 = -1;
      }
      break;
    case "ArrowDown":
      if (dyPlayer1 !== -1) {
        dxPlayer1 = 0;
        dyPlayer1 = 1;
      }
      break;
    case "ArrowRight":
      if (dxPlayer1 !== -1) {
        dxPlayer1 = 1;
        dyPlayer1 = 0;
      }
      break;
    case "ArrowLeft":
      if (dxPlayer1 !== 1) {
        dxPlayer1 = -1;
        dyPlayer1 = 0;
      }
      break;
  }
  });