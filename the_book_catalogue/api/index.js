const express = require("express");
const mongoose = require("mongoose");

const port = 3001;

//mongoose connection
const mongoDB = "mongodb+srv://dbTest:dbTestPass@cluster0.nuenf.mongodb.net/the_book_catalogue?retryWrites=true&w=majority"
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//routes
const bookRoutes = require("./routes/bookRoutes");


//server setup
const app = express();

app.use(express.json());


//error handeling
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//routes setup
app.use("api/v1/book", bookRoutes);

//start Server
app.listen(port, (err) => {
    if (err) {
      console.error("The server could not start.");
      console.log(err);
    }
    console.log(`Listening on port ${port}`);
  });