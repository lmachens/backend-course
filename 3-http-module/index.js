const http = require('http');
const menu = require('./menu');
const stock = require('./stock');

const port = 8080; // the server listens on port 8080
const server = http.createServer((req, res) => {
  // write a response to the client
  res.write('Neue Fische Restaurant\n');
  res.write('----------------------\n');

  // log the menu
  res.write('Menu:\n');
  res.write(`${JSON.stringify(menu.getMenu())}\n`);

  // log the stock
  res.write('Stock:\n');
  res.write(`${JSON.stringify(stock.getStock())}\n`);

  // end the response
  res.end();
});

server.listen(port, () => {
  console.log('HTTP server listens on http://localhost:8080');
});
