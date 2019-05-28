# Modules

Consider modules to be the same as JavaScript libraries, a set of functions you want to include in your application.
You can create your own modules, and easily include them in your applications.
In addition, Node.js has a set of built-in modules which you can use without any further installation.

To include a module, use the `require()` function with the name of the module.

## Changes from previous lession

The `menuItems` are moved to `menu.js` and are included in `index.js`.

## Example

Run `node index.js` to print the menu card on the command line.

## Tasks

Your task is to create a new file `stock.js` which exports a function called `getStock`. This function should return an empty array `[]`. Import this file in `index.js` and call `console.log(JSON.stringify(stock.getStock()));` after `console.log('Stock:');`. You can test this task with `npm test 2-modules` (from top level).

## Resources

https://www.w3schools.com/nodejs/nodejs_modules.asp
https://www.w3schools.com/nodejs/ref_modules.asp
