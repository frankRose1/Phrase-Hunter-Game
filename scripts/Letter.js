/**
 * An individual letter in the phrase
 * If its an empty space between words it will have "space" marked as true
 */

class Letter {
    constructor(text, space = false){
        this.text = text;
        this.played = false;
        this.space = space;
    }
}