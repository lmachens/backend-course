# Modules

Consider modules to be the same as JavaScript libraries, a set of functions you want to include in your application.
You can create your own modules, and easily include them in your applications.
In addition, Node.js has a set of built-in modules which you can use without any further installation.

Use the `exports` keyword to make properties and methods available outside the module file.
To include a module, use the `require()` function with the name of the module.

## Lession

Create a new file `models/menu.js` that returns the `printMenu` function.

```
mkdir models
touch models/menu.js
```

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

exports.printMenu = function() {
  menuItems.forEach(menuItem => {
    console.log(`${menuItem.name}: $${menuItem.price}`);
  });
};
```

We can include `printMenu` in `app.js` now:

```js
const menu = require('./models/menu');

console.log('Neue Fische Restaurant');
console.log('----------------------');

menu.printMenu();
```

Running `node app.js` should print the same like before, but we were able to structure our code into multiple files.

```
Neue Fische Restaurant
----------------------
Burger: $8.5
Beer: $3.5
Fries: $2.8
```

> ### Why is the folder called `models`?
>
> Model represents the structure of data, the format and the constraints with which it is stored. It maintains the data of the application. Essentially, it is the database part of the application.

## Tests

Run `npm test 2-modules` from top level to verify that `models/menu.js` exports `printMenu`.

## Resources

https://www.w3schools.com/nodejs/nodejs_modules.asp
https://www.w3schools.com/nodejs/ref_modules.asp
