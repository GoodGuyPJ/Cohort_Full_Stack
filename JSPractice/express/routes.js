const express = require("express");
const app = express();
require("dotenv").config();

const port1 = process.env.PORT || 3000;

// get route
app.get("/", (req, res) => {
  res.send("Hello from GET route!");
});

// post route
app.post("/add", (req, res) => {
  res.send("Hello from POST route!");
});

// PUT route - updation
app.put("/put/:id", (req, res) => {
  res.send("Hello from PUT route!");
});

//DELETE route
app.delete("/delete/:id", (req, res) => {
  res.send("Hello from DELETE route!");
});

app.listen(port1, () => {
  console.log(`Server is running on http://localhost:${port1}`);
});
