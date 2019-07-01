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
