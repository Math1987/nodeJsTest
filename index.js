const express = require("express");
const http = require("http");
const https = require("https");
const path = require("path");
const fs = require("fs");
const { environment } = require("./environment/environment");
const { mongoose } = require("./mongo");

const app = express();
const server = http
  .createServer((req, res) => {
    res.writeHead(301, {
      Location: `https://${req.headers.host}${req.url}`,
    });
    res.end();
  })
  .listen(80);

const server2 = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, environment.ssl.key)),
    cert: fs.readFileSync(path.join(__dirname, environment.ssl.cert)),
  },
  app
);
server2.listen(443);

console.log("running nodeJsTest on port 80 and 443");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  console.log("getting base root");
  res.status(200).send("test ok");
});
