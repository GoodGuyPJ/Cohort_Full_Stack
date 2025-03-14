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

//
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// POST route to handle form data
app.post("/form", (req, res) => {
  const formData = req.body;
  res.json({ receivedData: formData });
});

// POST route to handle JSON data
app.post("/json", (req, res) => {
  const jsonData = req.body;
  res.json({ receivedData: jsonData });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
