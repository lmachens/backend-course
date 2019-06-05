describe('models/menu.js', () => {
  it('exports printMenu', () => {
    let outputData = '';
    const storeLog = inputs => (outputData += inputs);

    console['log'] = jest.fn(storeLog);
    const menu = require(__dirname + '/../models/menu.js');
    menu.printMenu();
    expect(outputData).toEqual(expect.stringContaining('Burger'));
  });
});
