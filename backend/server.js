const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

//connect to mongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/foodtruck", { useNewUrlParser: true });

//Import our db routes