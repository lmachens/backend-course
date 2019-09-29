# Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## Features

- server-side and networking applications
- [Open Source](https://github.com/nodejs)
- cross-platform environment (e.g. Windows, Linux and Mac OS)
- generate dynamic websites and content
- read and write files on your server
- collect form data
- read and write data in your database

## Requirements

Install latest Node.js LTS version from https://nodejs.org. You can verify the installed version with the command `node --version` in your terminal.

## Lesson

Create a file named `app.js` in the same folder of this README.md and add the following code:

```js
const menuItems = [
  {
    name: 'Burger',
    price: 8.5
  },
  {
    name: 'Beer',
    price: 3.5
  },
  {
    name: 'Fries',
    price: 2.8
  }
];

function printMenu() {
  menuItems.forEach(menuItem => {
    console.log(`${menuItem.name}: $${menuItem.price}`);
  });
}

console.log('neuefische Restaurant');
console.log('----------------------');

printMenu();
```

Change to this folder in your terminal and run the command `node app.js`:

```
cd 1-node
node app.js
```

The terminal returns this:

```
neuefische Restaurant
----------------------
Burger: $8.5
Beer: $3.5
Fries: $2.8
```

## Tests

Verify that your code follows the instructions by running `npm test 1-node` from top level folder. It will test if `app.js` is executable and logs `neuefische Restaurant`.

```
npm test 1-node
```

On success, you will see this result:

```
> jest "1-node"

 PASS  1-node/__tests__/app.js
  app.js
    √ console log "neuefische Restaurant" (22ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.157s, estimated 2s
Ran all test suites matching /1-node/i.
```

Another way to test your code is to use the VSCode debugger. Add a breakpoint inside `app.js` by clicking on the line number. Debug the code in the VSCode debug menu or with the shortcut `F5`.

## Resources

https://nodejs.org/en/  
https://www.w3schools.com/nodejs/nodejs_intro.asp  
https://nodejs.org/en/about/
https://code.visualstudio.com/docs/nodejs/nodejs-debugging
