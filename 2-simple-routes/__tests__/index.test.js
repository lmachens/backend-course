import axios from 'axios';

test('http://localhost:8080 should return "Home" with HTTP-Status 200', () => {
  return axios.get('http://localhost:8080').then(result => {
    expect(result.status).toBe(200);
    expect(result.data).toBe('Home');
  });
});

test('http://localhost:8080/about should return "About" with HTTP-Code 200', () => {
  return axios.get('http://localhost:8080/about').then(result => {
    expect(result.status).toBe(200);
    expect(result.data).toBe('About');
  });
});

test('Other routes like http://localhost:8080/login should return the requested url with HTTP-Code 404', () => {
  return axios.all([
    axios
      .get('http://localhost:8080/login')
      .then(result => {
        expect(result.status).toBe(404);
      })
      .catch(error => {
        expect(error.response.status).toBe(404);
        expect(error.response.data).toBe('/login');
      }),
    axios
      .get('http://localhost:8080/legal')
      .then(result => {
        expect(result.status).toBe(404);
      })
      .catch(error => {
        expect(error.response.status).toBe(404);
        expect(error.response.data).toBe('/legal');
      })
  ]);
});
