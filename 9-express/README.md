# 2-simple-routes

To start, install dependencies and start the project:

```
npm i
npm start
```

You can visit the webserver on http://localhost:8080.
There is another route on http://localhost:8080/about.

Open a second terminal and run tests with:

```
npm test
```

You should get this message:

```
Tests:       2 failed, 2 passed, 4 total
```

That means, two of four tests are failing.
Please fix the response of the `/about` route and add a `/private` route with `403 Forbidden`.
