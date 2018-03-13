const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const url = "mongodb://localhost:27017/todo_db";

const userId = new ObjectId("5aa83aeace29d867a985d1b4");

// Connect to Mongo DB instance
MongoClient.connect(url, (err, db) => {

  // Insert into "todos" collection
  db.collection("todos").insert({
    todoItem: "Clean the house",
    done: false,
    userId: userId
  }, (err, newTodo) => {
    console.log(newTodo);
    // Close database connection
    db.close();
  });

});
