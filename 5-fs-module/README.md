# fs-module

To include the File System module, use the require() method `const fs = require('fs');`.  
You can read, create, update, delete and rename files.

## Lesson

We want to use `fs` to serve html files from our http server. First we create a new folder called `views` with two files:

`app.html`:

```html
<html>
  <body>
    <h1>neuefische Restaurant</h1>
    <a href="/menu">Menu</a>
  </body>
</html>
```

and `menu.html`:

```html
<html>
  <body>
    <h1>Menu</h1>
    <div>
      {{ menu }}
    </div>
  </body>
</html>
```

We speak about the `{{ menu }}` later. Let us read `app.html` in `app.js` first:

```js
const http = require('http');
const url = require('url');
const fs = require('fs');
const menu = require('./routes/menu');

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
```

Start the server and verify that the content of `app.html` is served.

Now we update `routes/menu.js` to read `menu.html`:

```js
const fs = require('fs');
const menu = require('../models/menu');

exports.handleRequest = function(req, res) {
  fs.readFile('./views/menu.html', 'utf8', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const menuItems = menu.getMenu().join('<br />');
    const html = data.replace('{{ menu }}', menuItems);
    res.write(html);
    res.end();
  });
};
```

`{{ menu }}` is replaced by the `menuItems`.

## Tests

`npm test 5-fs-module`

## Resources

https://www.w3schools.com/nodejs/nodejs_filesystem.asp
