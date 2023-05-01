const mongoose = require("mongoose")
const Word = require("./Word.js")

mongoose.connect("mongodb://127.0.0.1/blobs")

// Get the count of all words
function getWord(Word) {
Word.count().exec(function (err, count) {

    // Get a random entry
    var random = Math.floor(Math.random() * count)
    var sentence1 = "";
  
    // Again query all words but only fetch one offset by our random #
    Word.findOne().skip(random).exec(
      function (err, result) {
        // Tada! random word
        var sentence2 = result.name;
        return sentence2;
      })
      return sentence1;
  });
}

console.log(getWord(Word));
