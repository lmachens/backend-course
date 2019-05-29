const express = require('express');
const getCollection = require('../lib/mongodb/collection').getCollection;

const router = express.Router();

router.get('/', async (req, res) => {
  const collection = await getCollection('menuItems');
  const menuItems = await collection.findMany({});
  res.send(menuItems);
});

module.exports = router;
