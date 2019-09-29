const fs = require('fs');

describe('views', () => {
  it('app.html exists', () => {
    fs.readFile(__dirname + '/../views/app.html', 'utf8', function(err, data) {
      expect(data).toEqual(expect.stringContaining('neuefische Restaurant'));
    });
  });
  it('menu.html exists', () => {
    fs.readFile(__dirname + '/../views/menu.html', 'utf8', function(err, data) {
      expect(data).toEqual(expect.stringContaining('Menu'));
    });
  });
});
