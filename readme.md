# Phrase Hunter Game with Object Oriented JavaScript
This is a browser-based, word guessing game. Using JavaScript and OOP a random hidden phrase is selected, which a player tries to guess, by clicking letters on an onscreen keyboard.

## App Features
* The player clicks an onscreen keyboard to guess letters in the phrase.
* A clicked letter is disabled on the onscreen keyboard and a player can't select that letter again.
* If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).
* If the selected letter is not in the phrase, one of the player's hearts is removed from the screen.
* The player keeps choosing letters until they reveal all the letters in the phrase, or they make 5 incorrect guesses.
* Player can click "Start Game" button to create a ```javascript new Game()``` isntance and play another round

## About the Classes
* ```Game``` class has methods for starting/ending the game, handling DOM events, creates a new instance of the ```Phrase``` class,
    checking for a win, and keeps track of missed guesses
* ```Phrase``` class will render the phrase on screen first as empty spaces, then reveal the letters as the player guesses correctly. It also holds and array of letter objects that represent the letters and spaces in the phrase
* ```Letter``` class represent individual characters in the random phrase. When all letters in a phrase have ```played = true``` then the player wins
