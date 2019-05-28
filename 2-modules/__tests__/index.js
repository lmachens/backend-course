test('index.js console log "Neue Fische Restaurant" and empty array after "Stock:"', () => {
  let outputData = '';
  const storeLog = inputs => (outputData += inputs);

  console['log'] = jest.fn(storeLog);
  require('../index.js');
  expect(outputData).toEqual(expect.stringContaining('Neue Fische Restaurant'));
  expect(outputData).toEqual(expect.stringContaining('Stock:[]'));
});

test('stock.js exports function getStock and returns an array', () => {
  const stock = require('../stock.js');
  expect(Array.isArray(stock.getStock())).toBe(true);
});

test('index.js logs empty array after "Stock:"', () => {
  const stock = require('../stock.js');
  expect(Array.isArray(stock.getStock())).toBe(true);
});
