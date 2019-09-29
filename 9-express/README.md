# Express

Express is a web framework for node. See https://www.npmjs.com/package/express#features for features.

## Lesson

Install module `npm install express`.

Update `app.js`:

```js
const express = require('express');
const fs = require('fs');
const menu = require('./routes/menu');
const connect = require('./utils/mongo').connect;

const port = 8080; // the server listens on port 8080
const app = express();

app.get('/', (req, res) => {
  fs.readFile('./views/app.html', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

app.get('/menu', (req, res) => menu.handleGet(req, res));
app.post('/menu', (req, res) => menu.handlePost(req, res));

connect().then(() => {
  console.log('Database connected');
  app.listen(port, function() {
    console.log(`Express server listens on http://localhost:${port}`);
  });
});
```

Update `routes/menu.js` and seperate GET and POST requests:

```js
const fs = require('fs');
const formidable = require('formidable');
const menu = require('../models/menu');

exports.handleGet = function(req, res) {
  fs.readFile('./views/menu.html', 'utf8', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    menu.getMenu().then(menuItems => {
      const html = data.replace('{{ menu }}', menuItems.join('<br />'));
      res.write(html);
      res.end();
    });
  });
};

exports.handlePost = function(req, res) {
  // parse a file upload
  const form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
    res.writeHead(200, { 'content-type': 'text/html' });
    const { name, price } = fields;
    menu
      .addMenuItem({
        name,
        price
      })
      .then(() => {
        res.end(`<a href="/menu">Added ${name}. Click to reload</a>`);
      });
  });
  return;
};
```

Run the express server `node app.js`.

## Tests

`npm test 9-express`

## Resources

https://www.npmjs.com/package/express
https://expressjs.com/en/starter/hello-world.html
https://expressjs.com
