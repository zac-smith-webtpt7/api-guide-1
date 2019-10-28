const express = require("express");

const server = express(); // create a server

// route handlers

// listen for requests on particular port on localhost
const port = 8000;
server.listen(port, () => {
  console.log("\n=== API on port 8000 ===\n");
});
