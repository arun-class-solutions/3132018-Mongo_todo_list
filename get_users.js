const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/todo_db";

MongoClient.connect(url, (err, db) => {

  db.collection("users").find({}).toArray((err, users) => {
    console.log(users);
    db.close();
  });

});
