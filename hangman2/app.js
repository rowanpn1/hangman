const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
//const Word = require("./Word") - Could not get to work
const app = express();
const port = 4000;
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

// Set up view engine
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/blobs')
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Could not connect to MongoDB', error));

// Set up middleware
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var wordSchema = new mongoose.Schema({
    wordName: String
});
var Word = mongoose.model("Word", wordSchema);

// Routes
app.get('/how-to-play', (req, res) => {
  res.render('how-to-play');
});

app.get('/play', (req, res) => {
  res.render('play');
});

app.get('/high-scores', (req, res) => {
  res.render('high-scores');
});

app.get('/submit-word', (req, res) => {
  res.render('submit-word');
});

app.post('/submit-word', async (req, res) => {
  const submitted = await Word(req.body)

  submitted.save()
  .then(item => {
      res.send("Word saved to database");
  })
  .catch(err => {
      res.status(400).send("Unable to save to database");
  });
  console.log(submitted)
});


app.listen(port, () => {
    console.log("Server listening on port " + port);
});