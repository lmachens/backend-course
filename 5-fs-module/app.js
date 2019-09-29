const http = require('http');
const url = require('url');
const menu = require('./routes/menu');

const port = 8080; // the server listens on port 8080
const server = http.createServer(function(req, res) {
  const query = url.parse(req.url, true);

  if (query.pathname === '/menu') {
    return menu.handleRequest(req, res);
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });

  // write a response to the client
  res.write('<h1>neuefische Restaurant</h1>');
  res.write('<hr>');
  res.write('<a href="/menu">Menu</a>\n');

  // end the response
  res.end();
});

server.listen(port, function() {
  console.log(`HTTP server listens on http://localhost:${port}`);
});
