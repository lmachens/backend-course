test('hello.js console log Hello World', () => {
  let outputData = '';
  const storeLog = inputs => (outputData += inputs);

  console['log'] = jest.fn(storeLog);
  require('../hello.js');
  expect(outputData).toBe('Hello World');
});

test('task.js console log Hello Task', () => {
  let outputData = '';
  const storeLog = inputs => (outputData += inputs);

  console['log'] = jest.fn(storeLog);
  require('../task.js');
  expect(outputData).toBe('Hello Task');
});
