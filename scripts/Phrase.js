/**
 * Phrase class will handle the creation of phrases
 */
class Phrase {
    constructor(text){
        this.text = text;
        this.letters = this.createLetters();
    }

    /**
     * Adds letter placeholders to the display when the game starts. Each letter is represeted by an empty box(list item)
     * When a letter is guesed correctly the empty box is replaced with a letter
     */
    addPhraseToDisplay(){
        const phraseList = document.querySelector('#phrase ul');
        for (let letter of this.letters) {
            const li = document.createElement('li');
            
            if (letter.text.trim().length == 0) {
                li.classList.add('space');
            } else if (letter.text.trim().length == 1) {
                li.classList.add('letter', letter.text, 'hide');
                li.textContent = letter.text;
            }
            
            phraseList.appendChild(li);
        }
    }
    
    /**
     * Checks to see if letter selected by player matches a letter in the phrase
     * @param {string} letter - a letter chosne by the user that may or may not be in a phrase
     */
    checkLetter(letter){
        const phrase = this.text.toLowerCase();
        if (phrase.indexOf(letter) > -1) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Reveals the letter(s) on the board that matches the players selection. mark the letter objects a played
     * @param {string} letter - letter to be shown in the display
     */
    showMatchedLetter(letter) {
        const emptySpaces = document.querySelectorAll(`.${letter}`);
        emptySpaces.forEach(space => {
            space.classList.add('show');
            space.classList.add('hide');
        });
    }

    /**
     * Loop over the letter objects and mark them as played if the text matches
     * @param {string} letter - letter to be marked as played
     */
    markLetter(letter){
        this.letters.forEach(l => {
            if (l.text == letter) {
                l.played = true;
            }
        });
    }

    /**
     * Create letter objects to be stored in an array
     */
    createLetters(){
        const letters = [];
        let letter;
        for (let l of this.text) {
            if (l.trim().length == 0) {
                letter = new Letter(l, true);
            } else {
                letter = new Letter(l.toLowerCase());
            }
            letters.push(letter);
        }
        return letters;
    }

}