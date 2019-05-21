# 1-node-server

To start, install dependencies and start the project:

```
npm i
npm start
```

You can visit the webserver on http://localhost:8080.

Open a second terminal and run tests with:

```
npm test
```

You should receive this message:

```
  FAIL  __tests__/index.test.js
  ✕ Should return "Hello World!" (27ms)

  ● Should return "Hello World!"

    expect(received).toBe(expected) // Object.is equality

    Expected: "Hello World!"
    Received: "Hallo Welt!"

      3 | test('Should return "Hello World!"', () => {
      4 |   return axios.get('http://localhost:8080').then(result => {
    > 5 |     expect(result.data).toBe('Hello World!');
        |                         ^
      6 |   });
      7 | });
      8 |

      at toBe (__tests__/index.test.js:5:25)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
```

Please fix the issue in `src/index.js` and rerun the test.
The Jest test should pass now:

```
PASS  __tests__/index.test.js
  ✓ Should return "Hello World!" (19ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.697s, estimated 1s
Ran all test suites related to changed files.
```
