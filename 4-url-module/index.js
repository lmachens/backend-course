const http = require('http');
const menu = require('./menu');
const stock = require('./stock');

const port = 8080;
const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`
      <h1>Neue Fische Restaurant</h1>
      <a href="/menu">Menu</a>
      <a href="/stock">Stock</a>
      `);
      break;

    case '/menu':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(`${JSON.stringify(menu.getMenu())}\n`);
      break;

    case '/stock':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(`${JSON.stringify(stock.getStock())}\n`);
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write(`Unknown route ${req.url}`);
      break;
  }

  res.end();
});

server.listen(port, () => {
  console.log('HTTP server listens on http://localhost:8080');
});
