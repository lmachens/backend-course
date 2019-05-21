import http from 'http';

http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end('Hallo Welt!');
  })
  .listen(8080, () => {
    console.log('Node.js server running on http://localhost:8080');
  });
