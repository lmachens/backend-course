const menu = require('../models/menu');

exports.handleRequest = function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  menu.getMenu().forEach(item => res.write(item));
  res.end();
};
