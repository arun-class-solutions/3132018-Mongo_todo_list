const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/todo_db";

MongoClient.connect(url, (err, db) => {

  // "db" is the instance of Mongo DB
  db.collection("users").insert({
    firstName: "Arun",
    lastName: "Sood"
  }, (err, savedUser) => {
    console.log(savedUser);
    db.close();
  });

});
