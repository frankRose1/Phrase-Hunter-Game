const startDiv = document.getElementById('overlay');
const startButton = document.getElementById('btn__reset');
const game = new Game(phrasesArray);

startButton.addEventListener('click', () => {
    game.startGame();
    startDiv.style.display = 'none';
});