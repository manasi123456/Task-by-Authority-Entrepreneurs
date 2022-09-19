const express = require("express");
var bodyParser = require("body-parser");

const route = require("./route/route");
const app = express();

app.use(bodyParser.json());

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is connected");
});
