import http from 'http';

http
  .createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200);
      res.end('Hello World!');
    } else if (req.url === '/about') {
      res.writeHead(401);
      res.end('About');
    } else {
      res.writeHead(200);
      res.end('Unknown route');
    }
  })
  .listen(8080, () => {
    console.log('Node.js server running on http://localhost:8080');
  });
