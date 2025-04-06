const express = require("express");
const app = express();
const port = 3000;

// HTTP Methods
// GET - Retrieve data
// POST - Create data
// PUT - Update data
// DELETE - Delete data
// PATCH - Partially update data
app.get("/ab?cd", (req, res) => {
  res.send("If the user hit (acd) or (abcd) then this route will be hit");
});

//Regex
app.get(/x?cd/, (req, res) => {
  res.send("If the path includes the letter x then this route will be hit");
});

//req, res, next
app.get(
  "/next",
  (req, res, next) => {
    console.log("Middleware function executed");
    next(); // Call the next middleware or route handler
  },
  (req, res) => {
    res.send("Hello from the next route!");
  }
);

// Define a route with a parameter
app.get("/greet/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
