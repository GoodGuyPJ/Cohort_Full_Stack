// import a from "./index";
// const a = require("./index.js");

// a.avrage(2, 3);
// a.sum(2, 3);

// console.log(a.avrage(2, 3));
// console.log(a.sum(2, 3));

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
