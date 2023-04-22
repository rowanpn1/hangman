const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

client.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }

  const db = client.db('HangmanDB');

  // create the 'users' collection
  db.createCollection('users', (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('users collection created successfully');
    }
  });

  // create the 'scores' collection
  db.createCollection('scores', (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('scores collection created successfully');
    }
  });

  // create the 'words' collection
  db.createCollection('words', (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('words collection created successfully');
    }
  });

  // close the database connection when done
  client.close();
});
