// script.js
function rollDice() {
    const dice = document.getElementById('dice');
    const randomValue = Math.floor(Math.random() * 6) + 1;
    dice.textContent = randomValue;
}
