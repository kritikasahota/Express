const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

// Query strings are values added after ? in the URL.
// Example: /search?name=Kritika&age=20

app.get("/search", (req, res) => {
  // req.query contains the query string values.
  let { name, age } = req.query;

  console.log(req.query);

  res.send(`Name: ${name}, Age: ${age}`);
});
