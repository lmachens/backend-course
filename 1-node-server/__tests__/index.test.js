import axios from 'axios';

test('Should return "Hello World!"', () => {
  return axios.get('http://localhost:8080').then(result => {
    expect(result.data).toBe('Hello World!');
  });
});
