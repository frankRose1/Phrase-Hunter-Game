const startDiv = document.getElementById('overlay');
const board = document.getElementById('board');
const startButton = document.getElementById('btn__reset');
const keys = document.querySelectorAll('.key');
const game = new Game(phrasesArray);

startButton.addEventListener('click', () => {
    game.startGame();
    startDiv.style.display = 'none';
    board.style.display = 'block';
});

function playerMove() {
    game.handleInteraction(this);
}

keys.forEach(key => key.addEventListener("click", playerMove));