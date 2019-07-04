const axios = require('axios');

describe('models/menu.js', () => {
  it('post request on http://localhost:8080/menu', () => {
    return axios
      .post('http://localhost:8080/menu', {
        name: 'Cheeseburger',
        price: 12.4
      })
      .then(result => {
        expect(result.status).toEqual(200);
      });
  });
});
