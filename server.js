const express = require("express");
const mongoose = require("mongoose");

/**
 * Database Setup
 */
const connectDB = require("./config/db");
connectDB();

/**
 *  Express initialization
 */
const app = express();

/**
 * Port Initialization
 */
const port = 4000;

/**
 * Middleware Setup
 */
app.use(express.json());

/*
 * Route: '/'
 * Type: GET
 * Description: Server Route to root directory at port 4000
 */

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

/*
Start server at PORT 4000
*/

app.listen(process.env.PORT || port, (err) => {
  if (!err) {
    console.log(`Server started at port ${port}`);
  } else {
    console.log(err);
  }
});
