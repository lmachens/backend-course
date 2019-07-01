const http = require('http');
const url = require('url');
const fs = require('fs');
const menu = require('./routes/menu');
const connect = require('./utils/mongo').connect;

const port = 8080; // the server listens on port 8080
const server = http.createServer(function(req, res) {
  const query = url.parse(req.url, true);

  if (query.pathname === '/menu') {
    return menu.handleRequest(req, res);
  }

  fs.readFile('./views/app.html', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

connect().then(() => {
  console.log('Database connected');
  server.listen(port, function() {
    console.log(`HTTP server listens on http://localhost:${port}`);
  });
});
