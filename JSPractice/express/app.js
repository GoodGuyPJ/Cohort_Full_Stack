// // import a from "./index";
// // const a = require("./index.js");

// // a.avrage(2, 3);
// // a.sum(2, 3);

// // console.log(a.avrage(2, 3));
// // console.log(a.sum(2, 3));

// const express = require("express");
// const app = express();
// const path = require("path");
// const port = 3000;
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
// const router = require("./userRoutes");
// app.use("/api/v1", router);
// // app.use();

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/index.html"));
// });

// app.post("/api/v1/register", (req, res) => {
//   const userName = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;

//   res.json({
//     success: true,
//     message: "User registered successfully",
//     name: userName,
//     email: email,
//     password: password,
//   });
// });

// REST API is a way for applications to communicate with each other over the internet using HTTP methods like GET, POST, PUT, DELETE, etc. It stands for Representational State Transfer and is commonly used to build web services.

// RESTful API is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. That data can be used to GET, PUT, POST, and DELETE data types, which refers to the reading, updating, creating, and deleting of operations concerning resources.

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

//server.js
// Import the express module

const express = require("express");

// Create an instance of the express application
const app = express();

// Define a route for the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello, this is the root/main route!");
});

// Define another route for "/api" with JSON response
app.get("/api", (req, res) => {
  res.json({ message: "This is the API route." });
});

// Define a route with URL parameters
app.get("/greet/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
