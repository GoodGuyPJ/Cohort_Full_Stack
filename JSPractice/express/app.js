const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("new learing");
});

app.listen(3000);
