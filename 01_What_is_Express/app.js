// Express.js is a web framework for Node.js.
// It makes it easier to create servers, handle requests,
// send responses, and create routes.

const express = require("express");

// express() creates an Express application.
const app = express();

let port = 8080;

// Starts the server and listens on port 8080.
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
