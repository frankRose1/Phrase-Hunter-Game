/**
 * These functions will be methods on the Game Class
 */

const game = {};

game.getRandomPhrase = (phrases) => {
    const randomNum = Math.floor(Math.random() * phrases.length);
    const phrase = phrases[randomNum];
    return phrase;
};

game.handleInteraction = (letter, phrase) => {
    phrase = phrase.toLowerCase();
    letter = letter.toLowerCase();
    if (phrase.indexOf(letter) > -1) {
        return true
    } else {
        return false;
    }
};

game.removeLife = (num) => {
    return num - 1;
};

game.gameOver = (result) => {
    if (result == 'win') {
        return 'You win!'
    } else if ( result == 'loss') {
        return 'You lose!'
    }
};

//export to be tested
module.exports = game;