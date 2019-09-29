# url-module

The URL module splits up a web address into readable parts.  
You can import the module with `const url = require('url');`

We will use `url.parse()` method, which will return an URL object.

## Lesson

Add `url` import to `app.js` and parse the requested url `req.url`. We will log the result to the console:

```js
const http = require('http');
const url = require('url');

const port = 8080; // the server listens on port 8080
const server = http.createServer(function(req, res) {
  const query = url.parse(req.url, true);
  console.log(req.url, query);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  /* ... */
});
```

Open http://localhost:8080 now and take a look at the Node.js console:

```
HTTP server listens on http://localhost:8080
/ Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: {},
  pathname: '/',
  path: '/',
  href: '/' }
/favicon.ico Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: {},
  pathname: '/favicon.ico',
  path: '/favicon.ico',
  href: '/favicon.ico' }
```

For some reason we find `URL` two times. One for `/` and another for `/favicon.ico`. Chrome and most other browsers usually tries to load the favicon too.

Try to open http://localhost:8080/menu and you will find two logs for `/menu` and `/favicon.ico`.

Now open http://localhost:8080/menu?lang=en. You will find `query: { lang: 'en' }` in the logs. This helps us to identify the requested resource.

We remove the `console.log` now and check if the requested `pathname` is `/menu`. In this case, we call `menu.handleRequest` from a new file `routes/menu` which we will create afterwards. The `/` page will return html with a link to `/menu` now.

```js
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
```

Now create `routes/menu.js`:

```js
const menu = require('../models/menu');

exports.handleRequest = function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  menu.getMenu().forEach(item => res.write(item));
  res.end();
};
```

Open http://localhost:8080 and click on the link. It should open http://localhost:8080/menu.

## Tests

Run your server and start testing with `npm test 4-url-module`.

## Resources

https://nodejs.org/api/url.html
https://www.w3schools.com/nodejs/nodejs_url.asp
https://en.wikipedia.org/wiki/Favicon
