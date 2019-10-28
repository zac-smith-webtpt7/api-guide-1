const express = require("express");

const server = express(); // create a server

// route/route handlers

// handles GET requests on localhost:8000
server.get("/", (req, res) => {
  res.send("Hello Node 23");
});

// listen for requests on particular port on localhost
const port = 8000;
server.listen(port, () => {
  console.log("\n=== API on port 8000 ===\n");
});
