const express = require("express");
const app = express();
const port = 3000;

// Define a simple GET route
app.get("/", (req, res) => {
  res.send("Hello, this is a GET request!");
});

app.get("/", (req, res) => {
  res.send("Hello, this is a plain text response!");
});
app.get("/api/data", (req, res) => {
  const data = { message: "This is a JSON response." };
  res.json(data);
});
app.get("/html", (req, res) => {
  const htmlContent = "<h1>This is an HTML response</h1>";
  res.send(htmlContent);
});
app.get("/redirect", (req, res) => {
  res.redirect("/new-location");
});
app.get("/not-found", (req, res) => {
  res.status(404).send("Page not found");
});
const path = require("path");

app.get("/file", (req, res) => {
  const filePath = path.join(__dirname, "files", "example.txt");
  res.sendFile(filePath);
});
app.get("/custom-header", (req, res) => {
  res.set("X-Custom-Header", "Custom Header Value");
  res.send("Response with a custom header");
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
