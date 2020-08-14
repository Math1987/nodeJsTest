const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
server.listen(80);

console.log("running nodeJsTest on port 80");

app.get("/", (req, res) => {
  console.log("getting base root");
  res.status(200).send("test ok");
});
