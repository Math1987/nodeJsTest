const fs = require("fs");
const path = require("path");
exports.environment = JSON.parse(
  fs.readFileSync(path.join(__dirname, process.env.NODE_ENV + ".json"))
);
