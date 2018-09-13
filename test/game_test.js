const {expect} = require('chai');
const game = require('../game_logic/game');

describe('game.getRandomPhrase', () => {
    phrases = [
        'one phrase',
        'two phrase',
        'another phrase',
        'the final phrase'
    ];

    it('should grab a random string from an array of phrases', () => {
        expect(game.getRandomPhrase(phrases)).to.be.a('string');
    });

    it('should grab a random string from an array of phrases whos length is greater than 0', () => {
        expect(game.getRandomPhrase(phrases)).to.not.be.empty;
    });

});

describe('game.handleInteraction', () => {
    
    it('should return true if a button pressed by a player matches a letter in the phrase', () => {
        expect(game.handleInteraction('a', 'one phrase')).to.be.ok;
    });

    it('should return false if a button pressed by a player is not present in the phrase', () => {
        expect(game.handleInteraction('x', 'one phrase')).to.be.false;
    });

    it('should be case insensitive', () => {
        expect(game.handleInteraction('p', 'one Phrase')).to.be.ok;
    });

});

describe('game.removeLife', () => {
    const player = {
        lives: 5
    };

    it('should subtract one of the player\'s lives', () => {
        expect(game.removeLife(player.lives)).to.equal(4);
    });
});

describe('game.gameOver', () => {

    it('should correctly report a win if a player wins', () => {
        expect(game.gameOver('win').indexOf('win')).to.be.ok;
    });

    it('should correctly report a loss if a player runs ouf lives', () => {
        expect(game.gameOver('loss').indexOf('lose')).to.be.ok;
    });

});