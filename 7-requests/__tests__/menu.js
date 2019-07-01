const axios = require('axios');

describe('models/menu.js', () => {
  it('exports getMenu', () => {
    const menu = require(__dirname + '/../models/menu.js');
    expect(menu.getMenu()).toHaveLength(3);
  });
  it('post request on http://localhost:8080/menu', () => {
    return axios
      .post('http://localhost:8080/menu', {
        name: 'Cheeseburger',
        price: 12.4
      })
      .then(result => {
        expect(result.status).toEqual(200);
        expect(result.data.fields.name).toEqual('Cheeseburger');
      });
  });
});
