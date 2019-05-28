const stockList = [
  {
    name: 'Burger',
    price: 4
  },
  {
    name: 'Beer',
    price: 12
  },
  {
    name: 'Fries',
    price: 3
  }
];

exports.getStock = () => {
  return stockList;
};
