const mongoose = require("mongoose");
const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://Marcelo9807:98071011Mar@users.ev6b96s.mongodb.net/ToDoList?retryWrites=true&w=majority&appName=users"
    )
    .then(() => {
      console.log("MongoDb atlas conectado!");
    })
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
