const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes")
const app = express();
const PORT = process.env.PORT || 3001;



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

app.use(routes);
// require("dotenv").load();

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googleBooks";

mongoose.connect(MONGODB_URI);
// Send every other request to the React app



app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
