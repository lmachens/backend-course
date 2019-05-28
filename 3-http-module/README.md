# http-module

Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
We use this module usually to run a webserver.

You can import the module with `const http = require('http');`

## Changes from previous lession

The `index.js` creates a http server instead of using console log. The `stock.js` of the previous task is extended by a `stockList`.

## Example

Run `node index.js` to start the server on http://localhost:8080. Open this url and receive a similar output like in the previous lession.

## Tasks

You have to run the webserver `node index.js` before you run the tests `npm test 3-http-module`. Your task is to add a HTTP header with status code `200` and Content-Type `text/plain`. Take a look at the resources to get more details.

## Resources

https://www.w3schools.com/nodejs/nodejs_http.asp
https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers

https://www.w3schools.com/tags/ref_httpmessages.asp
