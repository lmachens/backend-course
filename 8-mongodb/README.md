# mongodb

Mongo is a slang term for humongous (german: gigantisch).
Data is saved in BSON format (similar to JSON).

Example: Registry

```json
[
  {
    "id": "1",
    "name": "Leon",
    "city": "Cologne",
    "interests": ["Motorcycle", "Gym", "Videogames"]
  },
  {
    "id": "2",
    "name": "Peter",
    "city": "Hamburg",
    "interests": ["Food", "Art"]
  },
  {
    "id": "3",
    "name": "Anja",
    "city": "Cologne",
    "interests": ["Music", "Gym", "Dancing"]
  }
]
```

A simple database query is like a try and error search. If we a looking for students who live in Cologne, we have to check all records.

An index is helpful to find data faster: `city` -> `{ Cologne: ['1', '3'] }`.

There are many database systems with different data storage and syntax like MySQL.

## Lession

Follow these instructions to install mongodb on your machine: https://docs.mongodb.com/manual/administration/install-community/

Connect to database with `mongo` in your terminal.
Create database with sample data:

`use restaurant`

```js
const students = [
  {
    id: '1',
    name: 'Leon',
    city: 'Cologne',
    interests: ['Motorcycle', 'Gym', 'Videogames']
  },
  {
    id: '2',
    name: 'Peter',
    city: 'Hamburg',
    interests: ['Food', 'Art']
  },
  {
    id: '3',
    name: 'Anja',
    city: 'Cologne',
    interests: ['Music', 'Gym', 'Dancing']
  }
];
db.students.insertMany(students);
```

https://docs.mongodb.com/manual/reference/method/js-collection/

Find students with `find`: `db.students.find({})` und `db.students.find({ city: 'Cologne' })`.
Explain the query with `db.students.find({ city: 'Cologne' }).explain()`.
Create an index: https://docs.mongodb.com/manual/indexes/index.html
`db.students.createIndex({ city: 1 })`
Install and use Robo3t https://robomongo.org/download. Demonstrate, that in Robo3t the same commands are valid.

We need to install `mongodb` module with `npm install mongodb`.

Create a new file `utils/mongo.js`:

```js
const mongodb = require('mongodb');

const mongodbUri = 'mongodb://localhost:27017';
const dbName = 'restaurant';
let client = null;

exports.connect = () => {
  if (client && !client.isConnected) {
    // client discard
    client = null;
  }

  if (client === null) {
    // client init
    client = new mongodb.MongoClient(mongodbUri, { useNewUrlParser: true });
  }

  return new Promise((resolve, reject) => {
    client.connect(err => {
      if (err) {
        client = null;
        console.error('[mongo] client err', err);
        return reject(err);
      }

      // connected
      resolve();
    });
  });
};

exports.collection = name => {
  if (client && client.isConnected) {
    // client connected, quick return
    return client.db(dbName).collection(name);
  }
  throw new Error('Database is not connected');
};
```

We will connect to the database on app start. Modify `app.js`:

```js
const http = require('http');
const url = require('url');
const fs = require('fs');
const menu = require('./routes/menu');
const connect = require('./utils/mongo').connect;

const port = 8080; // the server listens on port 8080
const server = http.createServer(function(req, res) {
  const query = url.parse(req.url, true);

  if (query.pathname === '/menu') {
    return menu.handleRequest(req, res);
  }

  fs.readFile('./views/app.html', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

connect().then(() => {
  console.log('Database connected');
  server.listen(port, function() {
    console.log(`HTTP server listens on http://localhost:${port}`);
  });
});
```

We replace `models/menu.js` now and use a collection called `menu`:

```js
const collection = require('../utils/mongo').collection;

exports.getMenu = function() {
  const menuCollection = collection('menu');
  return menuCollection
    .find()
    .toArray()
    .then(menuItems => menuItems.map(menuItem => `${menuItem.name}: $${menuItem.price}\n`));
};
```

Modify `routes/menu.js` to allow async menu requests:

```js
const fs = require('fs');
const menu = require('../models/menu');

exports.handleRequest = function(req, res) {
  fs.readFile('./views/menu.html', 'utf8', function(err, data) {
    res.writeHead(200, {
      'Accept-Encoding': 'UTF-8',
      'Content-Type': 'text/html; charset=utf-8'
    });
    menu.getMenu().then(menuItems => {
      const html = data.replace('{{ menu }}', menuItems.join('<br />'));
      res.write(html);
      res.end();
    });
  });
};
```

Run the server and open http://localhost:8080/menu. There are no menu items in the database.

Connect to the database with `mongo`, select database `use restaurant` and insert samples:

```js
db.getCollection('menu').insert([
  {
    name: 'Burger',
    price: 9.5
  },
  {
    name: 'Beer',
    price: 5.0
  },
  {
    name: 'Fries',
    price: 2.3
  }
]);
```

Refresh http://localhost:8080/menu now.

We will connect the form to the database now. Add `addMenuItem` to `models/menu.js`:

```js
const collection = require('../utils/mongo').collection;

exports.getMenu = function() {
  const menuCollection = collection('menu');
  return menuCollection
    .find()
    .toArray()
    .then(menuItems => menuItems.map(menuItem => `${menuItem.name}: $${menuItem.price}\n`));
};

exports.addMenuItem = function(menuItem) {
  const menuCollection = collection('menu');
  return menuCollection.insertOne(menuItem);
};
```

Call `addMenuItem` in `routes/menu.js`:

```js
const fs = require('fs');
const formidable = require('formidable');
const menu = require('../models/menu');

exports.handleRequest = function(req, res) {
  if (req.method.toUpperCase() === 'POST') {
    // parse a file upload
    const form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, { 'content-type': 'text/html' });
      const { name, price } = fields;
      menu
        .addMenuItem({
          name,
          price
        })
        .then(() => {
          res.end(`<a href="/menu">Added ${name}. Click to reload</a>`);
        });
    });
    return;
  }

  fs.readFile('./views/menu.html', 'utf8', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    menu.getMenu().then(menuItems => {
      const html = data.replace('{{ menu }}', menuItems.join('<br />'));
      res.write(html);
      res.end();
    });
  });
};
```

To allow configurable mongodb uris, use process.env or `.env`-vars with https://github.com/motdotla/dotenv.

## Tests

`npm test 8-mongodb`

## Resources

https://docs.mongodb.com/manual/introduction/
https://www.npmjs.com/package/mongodb
