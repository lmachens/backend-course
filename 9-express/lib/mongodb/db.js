const MongoClient = require('mongodb').MongoClient;

let client = null;

exports.getDb = dbName => {
  if (client && !client.isConnected) {
    // client discard
    client = null;
  }

  if (client === null) {
    // client init
    client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true });
  } else if (client.isConnected) {
    // client connected, quick return
    return client.db(dbName);
  }

  return new Promise((resolve, reject) => {
    client.connect(err => {
      if (err) {
        client = null;
        console.error('[mongo] client err', err);
        return reject(err);
      }

      // connected
      resolve(client.db(dbName));
    });
  });
};
