test('app.js console log "Neue Fische Restaurant"', () => {
  let outputData = '';
  const storeLog = inputs => (outputData += inputs);

  console['log'] = jest.fn(storeLog);
  require('../app.js');
  expect(outputData).toEqual(expect.stringContaining('Neue Fische Restaurant'));
});

test('models/menu.js console log "Menu"', () => {
  let outputData = '';
  const storeLog = inputs => (outputData += inputs);

  console['log'] = jest.fn(storeLog);
  require('../models/menu.js');
  expect(outputData).toBe('Menu');
});
