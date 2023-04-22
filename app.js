// require the http and url modules
const http = require('http');
const url = require('url');

// create the server using the http module's createServer() method
const server = http.createServer((req, res) => {
  // parse the URL of the incoming request
  const parsedUrl = url.parse(req.url, true);

  // get the path from the parsed URL
  const path = parsedUrl.pathname;

  // define the route handlers using a switch statement
  switch(path) {
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
      res.write('<p>The objective of the Hangman game is to guess the secret word before you run out of attempts. Each incorrect guess will result in a new body part being added to the hangman, and once the hangman is complete, the game is over. Good luck!</p>');
      res.write('<h2>Instructions</h2>');
      res.write('<p>Follow these steps to play the game:</p>');
      res.write('<ol>');
      res.write('<li>Click the "Play" button on the main menu to start a new game.</li>');
      res.write('<li>Guess letters one at a time by clicking on the letter buttons or typing on your keyboard. You can only guess a letter once, so choose carefully!</li>');
      res.write('<li>If your guess is correct, the letter will be revealed in the secret word. If your guess is incorrect, a new body part will be added to the hangman.</li>');
      res.write('<li>Continue guessing until you either guess the entire word or the hangman is complete.</li>');
      res.write('<li>After the game is over, you will see your score and have the option to play again or return to the main menu.</li>');
      res.write('</ol>');
      res.write('</div>');
      res.write('</body>');
      res.write('</html>');
      res.end();
      break;      
    case '/submit':
      // send an HTML response with a form to submit a new word
      res.setHeader('Content-Type', 'text/html');
      res.write('<h1>Submit a New Word</h1>');
      res.write('<form action="/submit" method="POST">');
      res.write('<label for="word">Enter a new word:</label>');
      res.write('<input type="text" id="word" name="word">');
      res.write('<button type="submit">Submit</button>');
      res.write('</form>');
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
        table += `<tr><td>${score.username}</td><td>${score.score}</td></tr>`;
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
  console.log(`Server listening on port ${PORT}`);
});
