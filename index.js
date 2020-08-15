const express = require("express");
const http = require("http");
const https = require("https");
const path = require("path");
const fs = require("fs");

console.log(process.env.NODE_ENV);

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
    key: fs.readFileSync(path.join(__dirname, "/ssl/key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "/ssl/cert.pem")),
  },
  app
);
server2.listen(443);

console.log("running nodeJsTest on port 80 and 443");

app.get("/", (req, res) => {
  console.log("getting base root");
  res.status(200).send("test ok");
});
