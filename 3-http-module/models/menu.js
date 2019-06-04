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

exports.printMenu = function() {
  menuItems.forEach(menuItem => {
    console.log(`${menuItem.name}: $${menuItem.price}`);
  });
};
