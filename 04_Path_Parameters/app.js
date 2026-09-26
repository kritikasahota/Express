const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

// Path parameters are dynamic values in the URL.
// Example: /Kritika/20

app.get("/:username/:id", (req, res) => {
  console.log(req.params);
  res.send(`welcome to the page of @${username}`);
});

// app.get("/:username/:id", (req, res) => {
//   // req.params contains the path parameters.
//   let { username, id } = req.params;

//   console.log(req.params);

//   let code = `<h1>Welcome to the page of @${username}!</h1>`;

//   res.send(code);
// });
