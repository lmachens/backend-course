const axios = require('axios');

describe('app.js', () => {
  it('server listens on http://localhost:8080', () => {
    return axios.get('http://localhost:8080').then(result => {
      expect(result.data).toEqual(expect.stringContaining('Neue Fische Restaurant'));
    });
  });

  it('server returns status code 200 and content type "text/plain"', () => {
    return axios.get('http://localhost:8080').then(result => {
      expect(result.status).toEqual(200);
      expect(result.headers['content-type']).toEqual('text/plain');
    });
  });
});
