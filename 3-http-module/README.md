# http-module

Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
We use this module usually to run a webserver.

You can import the module with `const http = require('http');`

## Lession

Replace the existing code of `app.js` with this:

```js
const http = require('http');

const port = 8080; // the server listens on port 8080
const server = http.createServer(function(req, res) {
  // write a response to the client
  res.write('Neue Fische Restaurant\n');
  res.write('----------------------\n');

  // end the response
  res.end();
});

server.listen(port, function() {
  console.log(`HTTP server listens on http://localhost:${port}`);
});
```

Run `node app.js` to start the server on http://localhost:8080. Open this url and receive this output:

```
Neue Fische Restaurant
----------------------
```

Your webserver is running 🎉

We modify `models/menu.js` to allow import the menu without logging it to the console:

```js
const menuItems = [
  {
    name: 'Burger',
    price: 8.5
  },
  {
    name: 'Beer',
    price: 3.5
  },
  {
    name: 'Fries',
    price: 2.8
  }
];

exports.getMenu = function() {
  return menuItems.map(menuItem => `${menuItem.name}: $${menuItem.price}\n`);
};
```

Import `getMenu` in `app.js`:

```js
const http = require('http');
const menu = require('./models/menu');

const port = 8080; // the server listens on port 8080
const server = http.createServer(function(req, res) {
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
```

Stop your server and start it again to apply the code changes. Now open http://localhost:8080 again:

```
Neue Fische Restaurant
----------------------
Burger: $8.5
Beer: $3.5
Fries: $2.8
```

Now we want to add the correct HTTP header status code and content type in `app.js`.

```js
const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // write a response to the client
  res.write('Neue Fische Restaurant\n');
  res.write('----------------------\n');

  // get menu (array of strings) and write every item
  menu.getMenu().forEach(item => res.write(item));

  // end the response
  res.end();
});
```

You can verify the HTTP headers in Chrome developer tools.

## Tests

You have to run the webserver `node index.js` before you run the tests with `npm test 3-http-module`. Your task is to add a HTTP header with status code `200` and Content-Type `text/plain`. Take a look at the resources to get more details.

## Resources

https://www.w3schools.com/nodejs/nodejs_http.asp
https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers
https://www.w3schools.com/tags/ref_httpmessages.asp  
https://developers.google.com/web/tools/chrome-devtools/
