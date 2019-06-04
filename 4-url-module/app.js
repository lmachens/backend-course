const http = require('http');
const menu = require('./models/menu');

const port = 8080; // the server listens on port 8080
const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // write a response to the client
  res.write('Neue Fische Restaurant\n');
  res.write('----------------------\n');

  // get menu (array of strings) and write every item
  menu.getMenu().forEach(item => res.write(item));

  // end the response
  res.end();
});

server.listen(port, function() {
  console.log(`HTTP server listens on http://localhost:${port}`);
});
