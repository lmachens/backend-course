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
