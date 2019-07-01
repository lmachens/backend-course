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
  if (client.isConnected) {
    // client connected, quick return
    return client.db(dbName).collection(name);
  }
  throw new Error('Database is not connected');
};
