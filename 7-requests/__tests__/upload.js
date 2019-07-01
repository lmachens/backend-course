const axios = require('axios');
const fs = require('fs');

describe('upload', () => {
  it('upload.html exists', () => {
    fs.readFile(__dirname + '/../views/upload.html', 'utf8', function(err, data) {
      expect(data).toEqual(expect.stringContaining('post'));
    });
  });

  it('server listens on http://localhost:8080/upload', () => {
    return axios.get('http://localhost:8080/upload').then(result => {
      expect(result.status).toEqual(200);
    });
  });

  it('post request on http://localhost:8080/upload', () => {
    return axios
      .post('http://localhost:8080/upload', {
        title: 'Test'
      })
      .then(result => {
        expect(result.status).toEqual(200);
        expect(result.data.fields.title).toEqual('Test');
      });
  });
});
