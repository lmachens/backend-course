describe('models/menu.js', () => {
  it('exports getMenu', () => {
    const menu = require(__dirname + '/../models/menu.js');
    expect(menu.getMenu()).toHaveLength(3);
  });
});
