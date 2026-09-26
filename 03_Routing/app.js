const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

// Routing defines how the server responds to different URLs and HTTP methods.

app.get("/", (req, res) => {
  res.send("you contacted root path");
});

app.get("/apple", (req, res) => {
  res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
  res.send("you contacted orange path");
});

// Handles POST request to the root path.
app.post("/", (req, res) => {
  res.send("you sent a POST request to root");
});

// Catch-all route for paths that don't exist. Keep it after the other routes.
app.get("*", (req, res) => {
  res.send("this path doesn't exist");
});
