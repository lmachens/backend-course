const axios = require('axios');

describe('app.js', () => {
  it('server listens on http://localhost:8080', () => {
    return axios.get('http://localhost:8080').then(result => {
      expect(result.data).toEqual(expect.stringContaining('neuefische Restaurant'));
    });
  });

  it('server returns status code 200 and content type "text/html"', () => {
    return axios.get('http://localhost:8080').then(result => {
      expect(result.status).toEqual(200);
      expect(result.headers['content-type']).toEqual('text/html');
    });
  });

  it('server listens on http://localhost:8080/menu', () => {
    return axios.get('http://localhost:8080/menu').then(result => {
      expect(result.status).toEqual(200);
      expect(result.data).toEqual(expect.stringContaining('Burger'));
    });
  });
});
