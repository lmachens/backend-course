describe('models/menu.js', () => {
  it('exports getMenu', () => {
    const menu = require('../models/menu.js');
    expect(menu.getMenu()).toHaveLength(3);
  });
});
