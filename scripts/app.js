const startDiv = document.getElementById('overlay');
const board = document.getElementById('board');
const startButton = document.getElementById('btn__reset');
const keys = document.querySelectorAll('.key');
let game;

startButton.addEventListener('click', () => {
    resetDisplay();
    game = new Game(phrasesArray)
    game.startGame();
});

/**
 * Clear out the phrase list, remove classes from the keys, show the hearts and board, hide the start screen
 */
function resetDisplay() {
    document.querySelector('#phrase ul').innerHTML = '';
    keys.forEach(key => {
        key.classList.remove('wrong', 'chosen');
        key.disabled = false;
    });
    document.querySelectorAll('.tries').forEach(heart => {
        heart.classList.remove('remove');
    });
    startDiv.classList.remove("win", "lose");
    startDiv.style.display = 'none';
    board.style.display = 'block';
} 

function playerMove() {
    game.handleInteraction(this);
}

keys.forEach(key => key.addEventListener("click", playerMove));