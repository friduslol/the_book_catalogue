const express = require("express");

const port = 3001;

//server setup
const app = express();

app.use(express.json());

//start Server
app.listen(port, (err) => {
    if (err) {
      console.error("The server could not start.");
      console.log(err);
    }
    console.log(`Listening on port ${port}`);
  });