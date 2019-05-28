const http = require('http');
const fs = require('fs');
const menu = require('./menu');
const stock = require('./stock');

const port = 8080;
const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      fs.readFile('index.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      });
      res.writeHead(200, { 'Content-Type': 'text/html' });

      break;

    case '/menu':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(`${JSON.stringify(menu.getMenu())}\n`);
      res.end();
      break;

    case '/stock':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(`${JSON.stringify(stock.getStock())}\n`);
      res.end();
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write(`Unknown route ${req.url}`);
      res.end();
      break;
  }
});

server.listen(port, () => {
  console.log('HTTP server listens on http://localhost:8080');
});
