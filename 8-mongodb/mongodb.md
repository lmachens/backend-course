---
title: MongoDB
path: /mongodb
week: 6
order: 1
category: misc
tags: [backend, node]
concepts: [MongoDB, Express, GET, POST, JSON, PUT, PATCH, UID, env]
estimated_time: 1
---

## Lernziel

Studierende lernen:

- Wie funktionieren Datenbanken? 
- Was ist MongoDB und wie funktioniert es? 
- Anbindung der Datenbank in ein Backend.

## Vorgehen

1. Datenbanken

- Beispiel: Studentenverzeichnis
- Drei Studenten auswählen und als JSON definieren: 
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
- Datenbank Abfrage erklären:
- Try and error Suche nach `name` und `interests`. 
- Register/Index helfen Daten schneller zu finden: `city` -> `{ Cologne: ['1', '3'] }`
- Andeuten, dass es unterschiedliche Datenbanksysteme gibt, die sich in der Datenhaltung und Sytax unterscheiden. (MySQL)

2. MongoDB

- Abgeleitet vom engl. humongous, „gigantisch“.
- Daten werden in JSON ähnlichem bzw. BSON Format gespeichert.
- Installation mittels `brew`: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
- Verbinden und Ausführen von Datenbankabfragen mittels `mongo`.
- Erste Datenbank erstellen und mit Daten befüllen (Snippet vorgegeben): `use fische`, `db.students.insert({ ... })` (Anlegen der Studenten) https://docs.mongodb.com/manual/reference/method/js-collection/

```js
const students = [
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
];
db.students.insertMany(students);
```
- Die Students mittels `find` ausgebeben: `db.students.find({})` und `db.students.find({ city: 'Cologne' })`
- Abfrage genauer beschreiben mittels `db.students.find({ city: 'Cologne' }).explain()`
- Erstellung eines Index: https://docs.mongodb.com/manual/indexes/index.html
`db.students.createIndex({ city: 1 })` 
- Robo3t installieren und vorstellen. visuelle Anzeige der Daten. https://robomongo.org/download
- In Robo3t zeigen, dass genau die gleichen Befehle eingegeben werden können.

3. Backend

- Client - Server - DB Schaubild
![](client-server-db.jpg)
- Projektboilerplate mit Express als Ausgangslage nehmen.
- `mongodb` hinzufügen und eine Datenbankverbindung aufbauen: https://www.npmjs.com/package/mongodb (in eigener Datei)
- Datenbank importieren und in den Routen die Collection verwenden.
- `.env`-Variablen vorstellen und einfügen mittels https://github.com/motdotla/dotenv
