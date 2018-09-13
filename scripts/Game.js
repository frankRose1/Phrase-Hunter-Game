/**
 * Game class will have methods for starting/ending the game, handling DOM events, getting random phrases
 *  checking for a win, and removing a life counter
 */

class Game {
    constructor(phrases){
        this.phrases = phrases;
        this.phrase = null;
        this.ready = false;
        this.player = new Player("John");
        this.win = false;
        this.missed = 0; //tracks the number of missed guesses by a player, 5 misses will lose the game
    }

    /**
     * Randomly retrieve one of the phraes in the phrases array
     * @return {string} phrase - a random phrase from the array
     */
    getRandomPhrase(){
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[randomNum];
        return new Phrase(randomPhrase);
    }

    /**
     * Checks to see if the button clicked by a player matches a letter in the phrase
     *  @param {string} letter - textContent of one of the keys pressed by a user
     *  If not call the removeLife() method
     *  If it matches, call showMatchedLetter() on the phrase and then call checkForWin()
     */
    handleInteraction(letter){
        letter = letter.toLowerCase(); //for good measure
        
        if (this.ready) {
            const letterIsPresent = this.phrase.checkLetter(letter);
            if (letterIsPresent) {
                this.phrase.showMatchedLetter(letter);
                this.phrase.markLetter(letter);
            } else {
                this.removeLife();
            }

            const gameOver = this.checkForWin();
            if (gameOver) {
                this.gameOver('Game over! You win!');
            }
        }
        
    }

    /**
     * Increments "miss",  takes a heart from the board and if the player is at 5 misses, ends the game
     */
    removeLife(){
        console.log('remove a life');
    }

    /**
     * Checks to see if the player has selected all of the letters in the phrase
     * @returns {boolean} win - true if game is over
     */
    checkForWin(){
        let unplayedLetters = 0; 
        let win = false;

        this.phrase.letters.forEach(letter => {
            //if a letter is not played and is not a space
            if (!letter.played && !letter.space) {
                unplayedLetters++;
            }
        });
        //should be 0 if all are played
        if (unplayedLetters == 0) {
            win = true;
        }

        return win;
    }

    /**
     * Display a message on the results of the game(win or lose)
     */
    gameOver(message){
        document.getElementById('game-over-message').textContent = message;
        document.getElementById('board').style.display = 'none';
        document.getElementById('overlay').style.display = 'block';
    }

    /**
     * Calls getRandomPhrase and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay()
     */
    startGame(){
        this.ready = true;
        this.phrase = this.getRandomPhrase();
        this.phrase.addPhraseToDisplay();
    }

}