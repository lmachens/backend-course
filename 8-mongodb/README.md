# 8-mongodb

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

## MongoDB

- Mongo is a slang term for humongous (german: gigantisch).
- Data is saved in BSON format (similar to JSON)

### Installation

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

### Example

- Connect to database with `mongo`
- Create database with sample data

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

- Find students with `find`: `db.students.find({})` und `db.students.find({ city: 'Cologne' })`
- Explain the query with `db.students.find({ city: 'Cologne' }).explain()`
- Create an index: https://docs.mongodb.com/manual/indexes/index.html
  `db.students.createIndex({ city: 1 })`
- Install and use Robo3t https://robomongo.org/download
- Demonstrate, that in Robo3t the same commands are valid.

### Backend

`npm i --save mongodb`

https://www.npmjs.com/package/mongodb

- Import database and use collection in routes
- Add `.env`-vars with https://github.com/motdotla/dotenv
