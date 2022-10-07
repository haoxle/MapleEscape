/*Game project

// Project Setup //
// Generate Map
// Add Maplestory Character with movement
// Add collision detection
// Swap boundaries with images
// Create enemy
// Add win condition
// Mobile and computer conversion

*/

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const charHeight = 50;
const charWidth = 50;
const imgWidth = 20;
const imgHeight = 20;
let img1w = 80;
let img1h = 70;
let girl = new Image();
girl.src = "./Images/boy.png";
let img1 = new Image();
img1.src = "./Images/mushy.png";
let imgSpear = new Image();
imgSpear.src = "./Images/spear.png";

let charY = 80;
let charX = 0;
let rightPress = false;
let leftPress = false;
let upPress = false;
let downPress = false;
let go = 0.5;

//draws the character
const drawAChar = () => {
  context.beginPath();
  context.drawImage(girl, charX, charY, charWidth, charHeight);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
};

//draws Map 1
const drawMap = () => {
  context.beginPath();
  context.drawImage(img1, 0, 0, img1w, img1h);
  context.drawImage(img1, 0, 140, img1w, img1h);
  context.drawImage(img1, 0, 210, img1w, img1h);
  context.drawImage(img1, 70, 0, img1w, img1h);
  context.drawImage(img1, 70, 210, img1w, img1h);
  context.drawImage(img1, 70, 210, img1w, img1h);
  context.drawImage(img1, 140, 0, img1w, img1h);
  context.drawImage(img1, 140, 70, img1w, img1h);
  context.drawImage(img1, 140, 210, img1w, img1h);
  context.drawImage(img1, 210, 70, img1w, img1h);
  context.drawImage(img1, 210, 210, img1w, img1h);
  context.drawImage(img1, 280, 70, img1w, img1h);
  context.drawImage(img1, 280, 210, img1w, img1h);
  context.drawImage(img1, 350, 210, img1w, img1h);
  context.drawImage(img1, 420, 210, img1w, img1h);
  context.drawImage(img1, 420, 280, img1w, img1h);
  context.drawImage(img1, 420, 0, 140, 140);
  context.drawImage(imgSpear, 500, 300, 50, 50);
  context.closePath();
};

//collision detection for img

const keyClick = (e) => {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPress = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPress = true;
  } else if (e.key == "Down" || e.key == "ArrowDown") {
    downPress = true;
  } else if (e.key == "Up" || e.key == "ArrowUp") {
    upPress = true;
  }
};

const KeyRelease = (e) => {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPress = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPress = false;
  } else if (e.key == "Down" || e.key == "ArrowDown") {
    downPress = false;
  } else if (e.key == "Up" || e.key == "ArrowUp") {
    upPress = false;
  }
};

document.addEventListener("keydown", keyClick, false);
document.addEventListener("keyup", KeyRelease, false);

const move = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawMap();
  drawAChar();
  if (rightPress) {
    charX += go;
    if (charX + charWidth > canvas.width) {
      charX = canvas.width - charWidth; //so it does not go out of page
    }
  } else if (leftPress) {
    charX -= go;
    if (charX < 0) {
      charX = 0;
    }
  } else if (upPress) {
    charY -= go;
    if (charY < 0) {
      charY = 0;
    }
  } else if (downPress) {
    charY += go;
    if (charY + charHeight > canvas.height) {
      charY = canvas.height - charWidth; //so it does not go out of page
    }
  }
  if (
    (charX + charWidth >= 0 &&
      charX <= 210 &&
      charY + charHeight >= 0 &&
      charY <= 60) +
    (charX + charWidth >= 180 &&
      charX <= 320 &&
      charY + charHeight >= 80 &&
      charY <= 125) +
    (charX + charWidth >= 0 &&
      charX <= 60 &&
      charY + charHeight >= 150 &&
      charY <= 210) +
    (charX + charWidth >= 0 &&
      charX <= 480 &&
      charY + charHeight >= 230 &&
      charY <= 280) +
    (charX + charWidth >= 420 &&
      charX <= 465 &&
      charY + charHeight >= 280 &&
      charY <= 350) +
    (charX + charWidth >= 470 &&
      charX <= 560 &&
      charY + charHeight >= 0 &&
      charY <= 125)
  ) {
    return (go = go * -1);
  } else {
    return (go = 0.7);
  }
};

setInterval(move);
