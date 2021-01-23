const express = require("express");
const app = express();
const PORT = 4000;

/*
Route: '/'
Type: GET
Description: Server Route to root directory at port 4000
*/

app.get("/", (req, res) => {
  res.json({
    test: "working",
  });
});

/*
Start server at PORT 4000
*/

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`server running at Port ${PORT}`);
  }
});
