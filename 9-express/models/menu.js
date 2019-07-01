const collection = require('../utils/mongo').collection;

exports.getMenu = function() {
  const menuCollection = collection('menu');
  return menuCollection
    .find()
    .toArray()
    .then(menuItems => menuItems.map(menuItem => `${menuItem.name}: $${menuItem.price}\n`));
};

exports.addMenuItem = function(menuItem) {
  const menuCollection = collection('menu');
  return menuCollection.insertOne(menuItem);
};
