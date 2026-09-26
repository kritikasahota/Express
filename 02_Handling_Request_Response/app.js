const express = require("express");
const app = express();

let port = 8080;

// Starts the server and listens for incoming requests.
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

// app.use() handles incoming requests.
// req = request object
// res = response object
app.use((req, res) => {
  console.log("request received");

  // Sends a response back to the client.
  res.send("this is a basic response.");
});
