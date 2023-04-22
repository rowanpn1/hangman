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
      // send a plain text response
      res.setHeader('Content-Type', 'text/plain');
      res.end('This is the main menu!');
      break;
    case '/play':
      // send a JSON response
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Playing the game...' }));
      break;
    default:
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
  console.log("Server listening on port ${PORT}");
});