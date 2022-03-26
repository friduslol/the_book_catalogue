const express = require("express");
const mongoose = require("mongoose");

const port = 3001;

//server setup
const app = express();

app.use(express.json());

//mongoose connection
const mongoDB = "mongodb+srv://dbTest:dbTestPass@cluster0.nuenf.mongodb.net/the_book_catalogue?retryWrites=true&w=majority"
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//error handeling
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//start Server
app.listen(port, (err) => {
    if (err) {
      console.error("The server could not start.");
      console.log(err);
    }
    console.log(`Listening on port ${port}`);
  });