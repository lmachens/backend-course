# npm

NPM is a package manager for Node.js packages, or modules if you like.

## Lesson

Use the npm init command to create a package.json file for your application:

```
npm init
```

This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults.

We now install a dependency we need in the next lesson:

```
npm install formidable
```

npm installs `formidable` in node_modules folder and adds the dependency to the package.json. In addition, a file package-lock.json is created to specify the exact installed versions of the dependencies.

## Tests

`npm test 6-npm`

## Resources

https://www.npmjs.com/
https://www.npmjs.com/package/formidable
https://www.w3schools.com/nodejs/nodejs_npm.asp
