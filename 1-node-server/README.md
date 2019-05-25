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
PASS  __tests__/index.test.js
  ✓ Should return "Hello World!" (19ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.697s, estimated 1s
Ran all test suites.
```

## Resources

### Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

https://nodejs.org/en/
https://www.w3schools.com/nodejs/nodejs_get_started.asp
https://nodejs.org/en/about/

We use Node.js to run scalable and extensible webservers.

### NPM

npm (originally short for Node Package Manager) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js.

https://www.npmjs.com/

`npm` allows us to manage package dependencies listed in `package.json`.

### HTTP Status Messages

When a browser requests a service from a web server, an error might occur.
This is a list of HTTP status messages that might be returned:

https://www.w3schools.com/tags/ref_httpmessages.asp

We will use the most common status messages like `200 OK` or `404 Not Found`.

### Nodemon

Monitor for any changes in your node.js application and automatically restart the server - perfect for development.

http://nodemon.io/
https://github.com/remy/nodemon

We are using Nodemon in the `start` script (`npm start`).

### Babel

Babel is a JavaScript compiler.
Use next generation JavaScript, today.

https://babeljs.io/docs/en/babel-node  
https://babeljs.io/docs/en/babel-preset-env

This project uses Babel to transpile ecmascript modules (`import` to `require`). See `.babelrc` and `package.json` (`start` script).

### Jest

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

https://jestjs.io/

The Jest tests are in the `__tests__` folder.

### Axios

Promise based HTTP client for the browser and Node.js.

https://github.com/axios/axios

We use Axios to create HTTP requests in our Jest tests to access our webserver.
