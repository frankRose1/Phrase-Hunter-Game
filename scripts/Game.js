/**
 * Game class will have methods for starting/ending the game, handling DOM events, getting random phrases
 *  checking for a win, and removing a life counter
 */

class Game {
    constructor(){
        this.phrases = ["I'm a phrase"]; //an array of phrases, maybe move this in to antoher file
        this.ready = false;
        this.win = false;
        this.missed = 0; //tracks then number of missed guesses by a player, 5 misses will lose the game
    }

    /**
     * Randomly retrieve one of the phraes in the phrases array
     * @return {string} phrase - a random phrase from the array
     */
    getRandomPhrase(){

    }

    /**
     * Checks to see if the button clicked by a player matches a letter in the phrase
     *  If not call the removeLife() method
     *  If it matches, call showMatchedLetter() on the phrase and then call checkForWin()
     */
    handleInteraction(){

    }

    /**
     * Increments "miss",  takes a heart from the board and if the player is at 5 misses, ends the game
     */
    removeLife(){

    }

    /**
     * Checks to see if the player has selected all of the letters
     */
    checkForWin(){

    }

    /**
     * Display a message on the results of the game(win or lose)
     */
    gameOver(){

    }

    /**
     * Calls getRandomPhrase and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay()
     */
    startGame(){

    }

}