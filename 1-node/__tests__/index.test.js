test('index.js console log "Neue Fische Restaurant"', () => {
  let outputData = '';
  const storeLog = inputs => (outputData += inputs);

  console['log'] = jest.fn(storeLog);
  require('../index.js');
  expect(outputData).toEqual(expect.stringContaining('Neue Fische Restaurant'));
});

test('stock.js console log "Empty Stock"', () => {
  let outputData = '';
  const storeLog = inputs => (outputData += inputs);

  console['log'] = jest.fn(storeLog);
  require('../stock.js');
  expect(outputData).toBe('Empty Stock');
});
