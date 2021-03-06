/**
 * Game class will have methods for starting/ending the game, handling DOM events, getting random phrases
 *  checking for a win, and removing a life counter
 */

class Game {
    constructor(phrases){
        this.phrases = phrases;
        this.phrase = null;
        this.ready = false;
        this.win = false;
        this.missed = 0;
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
     *  @param {node} letterNode - node that was clicked by the user
     */
    handleInteraction(letterNode){
        if (letterNode.disabled == true) {return;}

        const letter = letterNode.textContent.toLowerCase();
        const that = this;

        if (this.ready) {
            const letterIsPresent = this.phrase.checkLetter(letter);
            if (letterIsPresent) {
                this.phrase.showMatchedLetter(letter);
                this.phrase.markLetter(letter);
                this.disableKey(letterNode, 'right');
            } else {
                this.removeLife();
                this.disableKey(letterNode, 'wrong');
            }

            this.checkForWin(function(win, loss){
                if (win) {
                    that.gameOver('Game over! You win!', "win");
                }
                if (loss) {
                    that.gameOver('Game over! You ran out of lives!', "lose");
                }
            });
        }
        
    }

    /**
     * Disable a key after a player clicks it
     * @param {node} node in the DOM to be marked as chosen
     * @param {string} answer - whether the key pressed what right or wrong
     */
    disableKey(node, answer){
        const keyClass = answer == 'right' ? 'chosen' : 'wrong';
        node.classList.add(keyClass);
        node.disabled = true;
    }

    /**
     * Increments "miss",  takes a heart from the board and if the player is at 5 misses, ends the game
     */
    removeLife(){
        const hearts = document.querySelectorAll('.tries');
        hearts[this.missed].classList.add('remove');
        this.missed++;
    }

    /**
     * Checks to see if the player has selected all of the letters in the phrase
     * @param {function} callback - callback either a win or loss
     */
    checkForWin(callback){
        let unplayedLetters = 0; 

        if (this.missed == 5) {
            callback(null, true);
        }

        this.phrase.letters.forEach(letter => {
            //if a letter is not played and is not a space
            if (!letter.played && !letter.space) {
                unplayedLetters++;
            }
        });

        //should be 0 if all are played
        if (unplayedLetters == 0) {
            callback(true, null);
        }
    }

    /**
     * Display a message on the results of the game(win or lose)
     */
    gameOver(message, result){
        const finishScreen = document.getElementById('overlay');
        const phraseTxt = result == 'win' ? this.phrase.text : '';
        document.getElementById('game-over-message').textContent = message;
        document.getElementById('winning-phrase').textContent = phraseTxt;
        document.getElementById('board').style.display = 'none';
        finishScreen.classList.add(result, "slideInDown");
        finishScreen.style.display = 'flex';
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