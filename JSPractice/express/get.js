const express = require("express");
const app = express();
const port = 3000;

// Define a simple GET route
app.get("/", (req, res) => {
  res.send("Hello, this is a GET request!");
});

// Define a route with a parameter
app.get("/greet/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
