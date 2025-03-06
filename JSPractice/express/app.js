// import a from "./index";
// const a = require("./index.js");

// a.avrage(2, 3);
// a.sum(2, 3);

// console.log(a.avrage(2, 3));
// console.log(a.sum(2, 3));

const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
const router = require("./userRoutes");
app.use("/api/v1", router);
// app.use();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
