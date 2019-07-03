# requests

HTTP supports multiple request methods: GET, POST, PUT, HEAD, DELETE, PATCH, OPTIONS

In the previous lessions we used GET to request a resource from a server. GET is the most common HTTP method.

Another common method is POST, which is used to send data to a server to create or update a resource.

PUT, HEAD, DELETE, PATCH and OPTIONS are used in more advanced scenarios.

## Lession

We already installed `formidable` module in the previous lession, which helps us parsing form data and file uploads.

Update `routes/menu.js`:

```js
const fs = require('fs');
const formidable = require('formidable');
const menu = require('../models/menu');

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

  fs.readFile('./views/menu.html', 'utf8', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const menuItems = menu.getMenu().join('<br />');
    const html = data.replace('{{ menu }}', menuItems);
    res.write(html);
    res.end();
  });
};
```

And add a form to `views/menu.html`:

```html
<html>
  <body>
    <h1>Menu</h1>
    <div>
      {{ menu }}
    </div>
    <h2>New item</h2>
    <form action="/menu" enctype="multipart/form-data" method="post">
      Name:<br />
      <input type="text" name="name" />
      <br />
      Price:<br />
      <input type="number" min="0" step="0.01" name="price" />
      <br />
      File:<br />
      <input type="file" name="upload" multiple="multiple" />
      <br /><br />
      <input type="submit" value="Create" />
    </form>
  </body>
</html>
```

Run the server `node app.js` and open http://localhost:8080/menu.
You will see a simple form to create new menu items.
Submit the form and inspect the results.

Another common solution to test request is [Postman](https://www.getpostman.com/).

## Tests

`npm test 7-requests`

## Resources

https://www.w3schools.com/tags/ref_httpmethods.asp
https://www.npmjs.com/package/formidable
https://www.getpostman.com/
https://www.w3schools.in/category/restful-web-services/
