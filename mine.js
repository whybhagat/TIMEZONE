const gameArea = document.getElementById('gameArea');
const basket = document.getElementById('basket');
const apple = document.getElementById('apple');
let basketPosition = 150;
let applePositionX = Math.random() * 370;
let applePositionY = 0;
let score = 0;

function moveBasket(event) {
    if (event.key === 'ArrowLeft' && basketPosition > 0) {
        basketPosition -= 20;
    } else if (event.key === 'ArrowRight' && basketPosition < 300) {
        basketPosition += 20;
    }
    basket.style.left = basketPosition + 'px';
}

function dropApple() {
    applePositionY += 5;
    apple.style.top = applePositionY + 'px';
    apple.style.left = applePositionX + 'px';

    if (applePositionY > 550 && applePositionX >= basketPosition && applePositionX <= basketPosition + 100) {
        score++;
        resetApple();
    } else if (applePositionY > 600) {
        resetApple();
    }

    requestAnimationFrame(dropApple);
}

function resetApple() {
    applePositionY = 0;
    applePositionX = Math.random() * 370;
}

document.addEventListener('keydown', moveBasket);
requestAnimationFrame(dropApple);