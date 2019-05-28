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

exports.getMenu = () => {
  return menuItems.map(menuItem => `${menuItem.name}: $${menuItem.price}`);
};