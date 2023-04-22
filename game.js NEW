// import the words collection from MongoDB
const db = require("./HangmanDB").words;

// function to generate a random word from the words collection
async function generateRandomWord() {
  const count = await db.countDocuments(); // get the total count of documents in the collection
  const randomIndex = Math.floor(Math.random() * count); // generate a random index based on the count
  const word = await db.findOne().skip(randomIndex); // get the word at that index
  return word.word.toLowerCase(); // return the word in lowercase
}

// function to create the game object
function createGame(word) {
  const game = {
    word: word,
    guesses: [],
    remainingGuesses: 6,
    status: "playing",
  };

  // function to get the puzzle display
  game.getPuzzle = function () {
    let puzzle = "";

    // loop through each letter in the word
    this.word.split("").forEach((letter) => {
      // if the letter has been guessed, add it to the puzzle display
      // otherwise, add a "*" to represent the letter
      if (this.guesses.includes(letter)) {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });

    return puzzle;
  };

  // function to make a guess
  game.makeGuess = function (guess) {
    guess = guess.toLowerCase(); // convert guess to lowercase

    // check if the guess has already been made
    if (this.guesses.includes(guess)) {
      console.log("You already guessed that letter.");
      return;
    }

    // add the guess to the guesses array
    this.guesses.push(guess);

    // check if the guess is incorrect
    if (!this.word.includes(guess)) {
      console.log("Incorrect guess.");
      this.remainingGuesses--;
    }

    // check if the game is over
    if (this.remainingGuesses === 0) {
      this.status = "failed";
      console.log(`Game over. The word was ${this.word}.`);
    } else if (this.getPuzzle() === this.word) {
      this.status = "succeeded";
      console.log(`Congratulations! You guessed the word: ${this.word}.`);
    } else {
      console.log(`Guesses: ${this.guesses.join(", ")}`);
      console.log(`Remaining guesses: ${this.remainingGuesses}`);
      console.log(`Puzzle: ${this.getPuzzle()}`);
    }
  };

  return game;
}

// export the generateRandomWord and createGame functions
module.exports = {
  generateRandomWord,
  createGame,
};
