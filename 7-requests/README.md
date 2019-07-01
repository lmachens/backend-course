# requests

HTTP supports multiple request methods: GET, POST, PUT, HEAD, DELETE, PATCH, OPTIONS

In the previous lessions we used GET to request a resource from a server. GET is the most common HTTP method.

Another common method is POST, which is used to send data to a server to create or update a resource.

PUT, HEAD, DELETE, PATCH and OPTIONS are used in more advanced scenarios.

## Lession

We already installed `formidable` module in the previous lession, which helps us parsing form data and file uploads.

Create a new file `models/upload.js`:

```js
const formidable = require('formidable');

exports.handleRequest = function(req, res) {
  if (req.method.toUpperCase() === 'POST') {
    // parse a file upload
    const form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ fields, files }));
    });
  }
};
```

Handle request for `/upload` route:

```js
const http = require('http');
const url = require('url');
const fs = require('fs');
const menu = require('./routes/menu');
const upload = require('./routes/upload');

const port = 8080; // the server listens on port 8080
const server = http.createServer(function(req, res) {
  const query = url.parse(req.url, true);

  if (query.pathname === '/menu') {
    return menu.handleRequest(req, res);
  }
  if (query.pathname === '/upload') {
    return upload.handleRequest(req, res);
  }

  fs.readFile('./views/app.html', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

server.listen(port, function() {
  console.log(`HTTP server listens on http://localhost:${port}`);
});
```

Run the server `node app.js` and open http://localhost:8080/upload.  
The page will not load because we only handle POST requests. We add a view `views/upload.html`

```html
<form action="/upload" enctype="multipart/form-data" method="post">
  <input type="text" name="title" /><br />
  <input type="file" name="upload" multiple="multiple" /><br />
  <input type="submit" value="Upload" />
</form>
```

and load it in `models/upload.js`

```js
const formidable = require('formidable');
const fs = require('fs');

exports.handleRequest = function(req, res) {
  if (req.method.toUpperCase() === 'POST') {
    // parse a file upload
    const form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ fields, files }));
    });
    return;
  }
  fs.readFile('./views/upload.html', 'utf8', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
};
```

Restart the server and load the page again. You will see a simple form.
Submit the form and inspect the results.

Another common solution to test request is [Postman](https://www.getpostman.com/).

## Tests

`npm test 7-requests`

## Resources

https://www.w3schools.com/tags/ref_httpmethods.asp
https://www.npmjs.com/package/formidable
https://www.getpostman.com/
https://www.w3schools.in/category/restful-web-services/
