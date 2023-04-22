const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'hangman';
const collectionName = 'words';

const getWordFromDb = (callback) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.log('Error connecting to MongoDB:', err);
      return callback(err);
    }
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    collection.aggregate([ { $sample: { size: 1 } } ]).toArray((err, docs) => {
      if (err) {
        console.log('Error getting word from MongoDB:', err);
        return callback(err);
      }
      callback(null, docs[0].word);
      client.close();
    });
  });
};

const checkGuess = (guess, word, guessedLetters) => {
  if (guessedLetters.includes(guess)) {
    return { message: 'You already guessed that letter. Try again.' };
  }
  guessedLetters.push(guess);
  if (word.includes(guess)) {
    let letters = word.split('');
    let numCorrect = 0;
    letters.forEach((letter) => {
      if (guessedLetters.includes(letter)) {
        numCorrect++;
      }
    });
    if (numCorrect === letters.length) {
      return { message: 'Congratulations, you won!', won: true };
    } else {
      return { message: 'Good guess!', won: false };
    }
  } else {
    return { message: 'Sorry, that letter is not in the word.', won: false };
  }
};

module.exports = {
  getWordFromDb,
  checkGuess
};
