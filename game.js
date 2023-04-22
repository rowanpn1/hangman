const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'hangman';

function getRandomWord(callback) {
  MongoClient.connect(url, (err, client) => {
    if (err) {
      console.error(err);
      return;
    }
    const db = client.db(dbName);
    const words = db.collection('words');
    words.countDocuments((err, count) => {
      if (err) {
        console.error(err);
        client.close();
        return;
      }
      const index = Math.floor(Math.random() * count);
      words.findOne({}, { skip: index }, (err, result) => {
        if (err) {
          console.error(err);
          client.close();
          return;
        }
        callback(result.word);
        client.close();
      });
    });
  });
}

module.exports = function Game(word) {
  this.word = word.toUpperCase();
  this.guesses = new Set();
  this.guessesLeft = 6;
  this.gameOver = false;

  this.maskedWord = this.word.split('').map((char) => {
    if (char.match(/[A-Z]/)) {
      return '_';
    }
    return char;
  }).join('');

  this.guessLetter = function(letter) {
    if (this.gameOver) {
      return;
    }

    letter = letter.toUpperCase();
    if (!letter.match(/[A-Z]/)) {
      return;
    }

    if (this.guesses.has(letter)) {
      return;
    }

    this.guesses.add(letter);

    let found = false;
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter) {
        this.maskedWord = this.maskedWord.substr(0, i) + letter + this.maskedWord.substr(i + 1);
        found = true;
      }
    }

    if (!found) {
      this.guessesLeft--;
    }

    if (this.guessesLeft === 0 || this.maskedWord === this.word) {
      this.gameOver = true;
    }
  };
};
