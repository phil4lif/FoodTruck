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

//add routes
const apiRoutes = require("./routes/apiRoutes")(app)
//connect to mongoDB
mongoose.connect("mongodb://localhost/foodtruck", { useNewUrlParser: true });

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
});