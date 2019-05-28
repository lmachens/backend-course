import axios from 'axios';

test('http://localhost:8080 should return "Hello World!" with HTTP-Status 200', () => {
  return axios.get('http://localhost:8080').then(result => {
    expect(result.status).toBe(200);
    expect(result.data).toBe('Hello World!');
  });
});

test('http://localhost:8080/about should return "About me" with HTTP-Code 200', () => {
  return axios.get('http://localhost:8080/about').then(result => {
    expect(result.status).toBe(200);
    expect(result.data).toBe('About me');
  });
});

test('Other routes like http://localhost:8080/login should return "Unknown route" with HTTP-Code 404', () => {
  const checkResult = result => {
    expect(result.status).toBe(404);
    expect(result.data).toBe('Unknown route');
  };
  return axios.all([
    axios
      .get('http://localhost:8080/login')
      .then(result => {
        checkResult(result);
      })
      .catch(error => {
        if (!error.response) throw error;
        checkResult(error.response);
      }),
    axios
      .get('http://localhost:8080/legal')
      .then(result => {
        checkResult(result);
      })
      .catch(error => {
        if (!error.response) throw error;
        checkResult(error.response);
      })
  ]);
});

test('http://localhost:8080/private should return "Forbidden" with the HTTP-Code 403', () => {
  const checkResult = result => {
    expect(result.status).toBe(403);
    expect(result.data).toBe('Forbidden');
  };
  return axios
    .get('http://localhost:8080/private')
    .then(result => {
      checkResult(result);
    })
    .catch(error => {
      if (!error.response) throw error;
      checkResult(error.response);
    });
});
