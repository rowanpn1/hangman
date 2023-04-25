// require the http, url, and fs modules
const http = require('http');
const url = require('url');
const fs = require('fs');

//require database file
const db = require('./hangmanDB');

// require the game logic module
const Game = require('./game.js');

// create the server using the http module's createServer() method
const server = http.createServer((req, res) => {
    // parse the URL of the incoming request
    const parsedUrl = url.parse(req.url, true);
  
    // get the path from the parsed URL
    const path = parsedUrl.pathname;
  
    // define the route handlers using a switch statement
    switch (path) {
      case '/':
        res.setHeader('Content-Type', 'text/html');
        res.write('<!DOCTYPE html>');
        res.write('<html>');
        res.write('<head>');
        res.write('<meta charset="utf-8">');
        res.write('<title>Hangman Game</title>');
        res.write('<style>');
        res.write('body {');
        res.write('  font-family: Arial, sans-serif;');
        res.write('  background-color: #F0F0F0;');
        res.write('}');
        res.write('h1 {');
        res.write('  text-align: center;');
        res.write('  margin-top: 50px;');
        res.write('}');
        res.write('ul {');
        res.write('  list-style: none;');
        res.write('  margin: 50px auto;');
        res.write('  padding: 0;');
        res.write('  width: 300px;');
        res.write('}');
        res.write('li {');
        res.write('  margin-bottom: 20px;');
        res.write('}');
        res.write('a {');
        res.write('  display: block;');
        res.write('  padding: 10px;');
        res.write('  background-color: #0066CC;');
        res.write('  color: #FFF;');
        res.write('  text-align: center;');
        res.write('  text-decoration: none;');
        res.write('  border-radius: 5px;');
        res.write('}');
        res.write('a:hover {');
        res.write('  background-color: #0052A3;');
        res.write('}');
        res.write('</style>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Welcome to the Hangman Game!</h1>');
        res.write('<ul>');
        res.write('<li><a href="/play">Play</a></li>');
        res.write('<li><a href="/instructions">How to Play</a></li>');
        res.write('<li><a href="/submit">Submit New Word</a></li>');
        res.write('<li><a href="/highscores">High Scores</a></li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
        break;
      case '/play':
        // send an HTML response with the hangman game
        res.setHeader('Content-Type', 'text/html');
        res.write('<!DOCTYPE html>');
        res.write('<html>');
        res.write('<head>');
        res.write('<meta charset="utf-8">');
        res.write('<title>Hangman Game - Play</title>');
        res.write('<style>');
        // add CSS styles for the hangman game
        res.write('</style>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Hangman Game - Play</h1>');
        // add HTML content for the hangman game
        
        res.write('<a href="/">Go back to home page</a>');
        res.write('</body>');
        res.write('</html>');
        res.end();
        break;
      case '/instructions':
        // send an HTML response with styled instructions on how to play the game
        res.setHeader('Content-Type', 'text/html');
        res.write('<!DOCTYPE html>');
        res.write('<html>');
        res.write('<head>');
        res.write('<meta charset="utf-8">');
        res.write('<title>Hangman Game - How to Play</title>');
        res.write('<style>');
        res.write('body {');
        res.write('  font-family: Arial, sans-serif;');
        res.write('  background-color: #F0F0F0;');
        res.write('}');
        res.write('h1 {');
        res.write('  text-align: center;');
        res.write('  margin-top: 50px;');
        res.write('}');
        res.write('.tutorial {');
        res.write('  background-color: #FFF;');
        res.write('  border: 2px solid #000;');
        res.write('  border-radius: 5px;');
        res.write('  padding: 20px;');
        res.write('  margin: 50px auto;');
        res.write('  width: 80%;');
        res.write('}');
        res.write('h2 {');
        res.write('  text-align: center;');
        res.write('}');
        res.write('p {');
        res.write('  margin-bottom: 10px;');
        res.write('}');
        res.write('ol {');
        res.write('  margin: 0 0 20px 40px;');
        res.write('}');
        res.write('li {');
        res.write('  margin-bottom: 5px;');
        res.write('}');
        res.write('</style>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>How to Play the Hangman Game</h1>');
        res.write('<div class="tutorial">');
        res.write('<h2>Objective</h2>');
        res.write('<p>The objective of the game is to guess the hidden word correctly within a limited number of guesses.</p>');
        res.write('<h2>Instructions</h2>');
        res.write('<p>Follow these steps to play the game:</p>');
        res.write('<ol>');
        res.write('<li>The game will display a mini stick figure and the number 6 next to it. Underneath the stick figure, there will be blank spaces with underlines, representing each letter of a word.</li>');
        res.write('<li>Guess the letters of the word one at a time, by typing them in the input field provided.</li>');
        res.write('<li>For each correct letter guessed, you will earn 2 points.</li>');
        res.write('<li>If the guessed letter is incorrect, the number next to the mini stick figure will decrease by one.</li>');
        res.write('<li>If you run out of guesses and the number next to the mini stick figure reaches zero, you lose the game and gain no points.</li>');
        res.write('<li>When you correctly guess all the letters of the word, you win the game and earn points.</li>');
        res.write('<li>The game will end after each round, and you can play again by clicking the "Play Again" button.</li>');
        res.write('</ol>');
        res.write('</div>');
        res.write('<a href="/">Go back to home page</a>');
        res.write('</body>');
        res.write('</html>');
        res.end();
        break;
      case '/submit':
        // send an HTML response with a form to submit a new word for the game
        res.setHeader('Content-Type', 'text/html');
        res.write('<!DOCTYPE html>');
        res.write('<html>');
        res.write('<head>');
        res.write('<meta charset="utf-8">');
        res.write('<title>Hangman Game - Submit New Word</title>');
        res.write('<style>');
        res.write('body {');
        res.write('  font-family: Arial, sans-serif;');
        res.write('  background-color: #F0F0F0;');
        res.write('}');
        res.write('h1 {');
        res.write('  text-align: center;');
        res.write('  margin-top: 50px;');
        res.write('}');
        res.write('.form-container {');
        res.write('  background-color: #FFF;');
        res.write('  border: 2px solid #000;');
        res.write('  border-radius: 5px;');
        res.write('  padding: 20px;');
        res.write('  margin: 50px auto;');
        res.write('  width: 80%;');
        res.write('}');
        res.write('label {');
        res.write('  display: block;');
        res.write('  margin-bottom: 5px;');
        res.write('}');
        res.write('input[type="text"], textarea {');
        res.write('  width: 100%;');
        res.write('  padding: 10px;');
        res.write('  border-radius: 5px;');
        res.write('  border: 1px solid #000;');
        res.write('  margin-bottom: 20px;');
        res.write('}');
        res.write('input[type="submit"] {');
        res.write('  display: block;');
        res.write('  margin: 0 auto;');
        res.write('  padding: 10px 20px;');
        res.write('  background-color: #0066CC;');
        res.write('  color: #FFF;');
        res.write('  border-radius: 5px;');
        res.write('  border: none;');
        res.write('}');
        res.write('input[type="submit"]:hover {');
        res.write('  background-color: #0052A3;');
        res.write('}');
        res.write('</style>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Submit a New Word for the Hangman Game</h1>');
        res.write('<div class="form-container">');
        res.write('<form method="post" action="/submit">');
        res.write('<label for="word">Enter a new word:</label>');
        res.write('<input type="text" id="word" name="word">');
        res.write('<input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</div>');
        res.write('<a href="/">Go back to home page</a>');
        res.write('</body>');
        res.write('</html>');
        res.end();
        break;
  
      case '/highscores':
        // send a HTML response with the high scores
        const scores = [
          { username: 'Alice', score: 10 },
          { username: 'Bob', score: 8 },
          { username: 'Charlie', score: 6 },
          { username: 'Dave', score: 4 },
          { username: 'Eve', score: 2 }
        ];
        // sort the high scores in descending order by score
        scores.sort((a, b) => b.score - a.score);
  
        // generate an HTML table of the high scores
        let table = '<h1>High Scores</h1>';
        table += '<table>';
        table += '<thead>';
        table += '<tr><th>Username</th><th>Score</th></tr>';
        table += '</thead>';
        table += '<tbody>';
        for (let i = 0; i < scores.length; i++) {
          const score = scores[i];
          table += '<tr><td>${score.username}</td><td>${score.score}</td></tr>';
        }
        table += '</tbody>';
        table += '</table>';
  
        // send the HTML response
        res.setHeader('Content-Type', 'text/html');
        res.write('<!DOCTYPE html>');
        res.write('<html>');
        res.write('<head>');
        res.write('<meta charset="utf-8">');
        res.write('<title>High Scores</title>');
        res.write('<style>');
        res.write('body {');
        res.write('  font-family: Arial, sans-serif;');
        res.write('  background-color: #F0F0F0;');
        res.write('}');
        res.write('h1 {');
        res.write('  text-align: center;');
        res.write('  margin-top: 50px;');
        res.write('}');
        res.write('table {');
        res.write('  border-collapse: collapse;');
        res.write('  margin: 50px auto;');
        res.write('}');
        res.write('thead {');
        res.write('  background-color: #0066CC;');
        res.write('  color: #FFF;');
        res.write('}');
        res.write('th, td {');
        res.write('  padding: 10px;');
        res.write('  border: 1px solid #CCC;');
        res.write('  text-align: left;');
        res.write('}');
        res.write('tr:nth-child(even) {');
        res.write('  background-color: #F0F0F0;');
        res.write('}');
        res.write('</style>');
        res.write('</head>');
        res.write('<body>');
        res.write(table);
        res.write('<a href="/">Go back to home page</a>');
        res.write('</body>');
        res.write('</html>');
        res.end();
        break;
        // send a 404 response if the path is not recognized
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;
        res.end('404 Not Found');
    }
  });
  
  // start the server by setting the port number
  // run command node app.js in terminal to start server
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log('Server listening on port ${PORT}');
  });
