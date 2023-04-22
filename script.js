const mongoose = require("mongoose");
const Word = require("./word");

mongoose.connect("mongodb://localhost/words");

const word = new Word({name: "count"});
word.save().then() = console.log("Word saved");