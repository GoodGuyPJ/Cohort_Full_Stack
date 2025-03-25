// const app = require("./app");
// const { add, subtract } = require("./app");

// console.log("app alue is", add);

// const fs = require("fs");

//synchronous
// fs.writeFileSync("./test.txt", "Hey there!");
// console.log("File written!");

//asynchronous
// fs.writeFile("./test.txt", "Hey there!", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File written!");
//   }
// });

// const data = fs.readFileSync("./test.txt", "utf-8");
// console.log(data);

// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.appendFileSync("./test.txt", `${Date.now()} Hey There`);

// fs.copyFile("./test.txt", "./test2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File copied!");
//   }
// });
// fs.cpSync("./test.txt", "./test2.txt");

// fs.unlink("./test2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File deleted!");
//   }
// });

// console.log(fs.statSync("./test.txt"));

// How NodeJS Works? -> NodeJS is a runtime environment that executes JavaScript code outside of a browser. It is built on Chrome's V8 JavaScript engine. It is a single-threaded, non-blocking, asynchronous, and event-driven runtime environment. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

// Blocking vs Non-Blocking
// Blocking: In a blocking operation, all other code is blocked from executing until an I/O event that is being waited on occurs. This is how synchronous code works.

// Non-Blocking: In a non-blocking operation, multiple I/O calls can be performed without the execution of the program being halted. This is how asynchronous code works.

// Synchronous vs Asynchronous
// Synchronous: In a synchronous operation, the program waits for an I/O operation to complete before executing the next line of code.

// Asynchronous: In an asynchronous operation, the program does not wait for an I/O operation to complete before executing the next line of code. Instead, it continues to execute the rest of the program, and a callback function is used to handle the I/O operation when it is completed.

// Defalut thread pool size in NodeJS is 4.
// Event Loop: The event loop is a mechanism that allows Node.js to perform non-blocking I/O operations. It is responsible for handling asynchronous callbacks and scheduling them to be executed when the I/O operation is completed.

const http = require("http");

const myServer = http.createServer((req, res) => {
  console.log("new request");
  res.end("Hello from server");
  console.log(req.headers);
});

let Port = 3000;

myServer.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
