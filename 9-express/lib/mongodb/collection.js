const getDb = require('./db').getDb;

exports.getCollection = (collectionName, dbName = 'restaurant') => {
  return getDb(dbName).then(db => db.collection(collectionName));
};
