const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const server = express();

let port = process.env.PORT || 8080;

// db password: zWbxFpM0rvcZhumB
//connect to database
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://mohamed:zWbxFpM0rvcZhumB@cluster0.vyosfyg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected successfullyyyyyyyyyyyy ");
    server.listen(port, () => {
      console.log("the server is listening...", port);
    });
  })
  .catch((error) => {
    console.log("database problem:  " + error);
  });

//not found middleware
server.use((request, response) => {
  response.status(404).json({ message: "Not Found" });
});

//error middleware
server.use((error, request, response, next) => {
  response
    .status(error.status || 500)
    .json({ error: error.toStrng() || "Error" });
});
