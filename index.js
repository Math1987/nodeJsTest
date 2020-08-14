const express = require("express");
const app = express();
const server = app.listen(80);

console.log("running nodeJsTest on port 4000");

app.get("/", (req, res) => {
  console.log("getting base root");
  res.status(200).send("test ok");
});
