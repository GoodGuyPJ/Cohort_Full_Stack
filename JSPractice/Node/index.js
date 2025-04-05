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

// const http = require("http");

// const myServer = http.createServer((req, res) => {
//   console.log("new request");
//   res.end("Hello from server");
//   console.log(req.headers);
// });

// let Port = 3000;

// myServer.listen(8000, () => {
//   console.log("Server is listening on port 8000");
// });

// //learn node
// console.log(__filename);

import * as fs from "fs/prmises";

try {
  await fs.mkdir("c:\\nodejs\\courses", { recursive: true });
  console.log("Directory created successfully!");
} catch (error) {
  console.log("Error", error);
}

//Read the content
try {
  const files = await fs.readdir("c:\\nodejs");
  for (const file of files) {
    console.log(file);
  }
} catch (error) {
  console.log("Error", error);
}

//Remove a directory
try {
  const file = await fs.rmdir("c:\\nodejs\\courses");
  console.log("Directory removed successfully!");
} catch (error) {
  console.log("Error", error);
}

//create and write file
try {
  await fs.writeFile("c:\\nodejs\\courses\\test.txt", "Hello World!");
  console.log("File created and written successfully!");
} catch (error) {
  console.log("Error", error);
}

//Read the file
try {
  const data = await fs.readFile("c:\\nodejs\\courses\\test.txt", "utf-8");
  console.log(data);
} catch (error) {
  console.log("Error", error);
}

//Get file Information
try {
  const info = await fs.stat("c:\\nodejs\\courses\\test.txt");
  // console.log(info);
  console.log(info.isFile()); // true
  console.log(info.isDirectory()); // false
} catch (error) {
  console.log("Error", error);
}

//OS
import os from "os";
console.log(os.arch()); // x64
console.log(os.platform()); // win32
console.log(os.cpus()); // CPU information
console.log(os.networkInterfaces()); // Network interfaces information
console.log(os.homedir()); // Home directory
console.log(os.hostname()); // Hostname
console.log(os.release()); // OS release
console.log(os.totalmem()); // Total memory
console.log(os.freemem()); // Free memory
console.log(os.uptime()); // Uptime
console.log(os.tmpdir()); // Temporary directory
console.log(os.type()); // OS type
console.log(os.version()); // OS version

// URL Module
import { URL } from "url";
const myURL = new URL("https://www.example.com/path?name=John&age=30#hash");

console.log(myURL.href); // https://www.example.com/path?name=John&age=30#hash
console.log(myURL.origin); // https://www.example.com
console.log(myURL.protocol); // https:
console.log(myURL.host); // www.example.com
console.log(myURL.hostname); // www.example.com
console.log(myURL.port); // empty string
console.log(myURL.pathname); // /path
console.log(myURL.search); // ?name=John&age=30
console.log(myURL.searchParams); // URLSearchParams { 'name' => 'John', 'age' => '30' }
console.log(myURL.hash); // #hash
console.log(myURL.username); // empty string

// HTTP Module
import http from "http";
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "apliplication/json");

  res.end("Hello World\n");

  res.write("heelo world\n");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

//Routing
// import http form "http";

const server1 = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the home page\n");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the about page\n");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the contact page\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found\n");
  }
});

server1.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

import fs from "fs";

const server2 = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile("./public/home.html", (err, data) => {
      if (err) {
        res.writeHead(500, "Internal Server Error", {
          "Content-Type": "text/plain",
        });
        res.end("Internal Server Error");
      } else {
        res.end(data);
      }
    });
  }
});

//NPM Complete

import EventEmitter from "events";

const customEmitter = new EventEmitter();

//on : listen/register for an event
//once: listen/register for an event only once
//emit: emit/call an event
//removeListener: remove an event listener
//removeAllListeners: remove all event listeners
//setMaxListeners: set the maximum number of listeners for an event
//getMaxListeners: get the maximum number of listeners for an event

customEmitter.on("response", (name, id) => {
  console.log(`Data received: ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log("Data received");
});

customEmitter.once("response", () => {
  console.log("Data received only once");
});

customEmitter.emit("response", "John", 34);
customEmitter.emit("response", "Doe", 45);

//Streams handle
//Readable: Readable streams are used to read data from a source. They emit events when data is available to be read. Examples include fs.createReadStream() and http.IncomingMessage.
//Writable: Writable streams are used to write data to a destination. They emit events when data is written. Examples include fs.createWriteStream() and http.ServerResponse.
//Duplex: Duplex streams are both readable and writable. They can read and write data. Examples include net.Socket and zlib.createGzip().
//Transform: Transform streams are a type of duplex stream that can modify or transform the data as it is read or written. Examples include zlib.createGzip() and crypto.createCipher().

//PassThrough: PassThrough streams are a type of transform stream that does not modify the data. They simply pass the data through. Examples include stream.PassThrough().
//Pipeline: Pipeline streams are a type of transform stream that can be used to pipe data from one stream to another. Examples include stream.pipeline().
//Readable stream example
import { Readable } from "stream";
const readableStream = Readable.from(["Hello", " ", "World", "!"]);
readableStream.on("data", (chunk) => {
  console.log(chunk.toString());
});
