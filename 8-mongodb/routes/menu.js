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
