import http from 'http';

http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World!');
  })
  .listen(8080, () => {
    console.log('Node.js server running on http://localhost:8080');
  });
