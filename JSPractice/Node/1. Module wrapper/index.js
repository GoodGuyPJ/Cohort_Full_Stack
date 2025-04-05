// (function (exports, require, module, __filename, __dirname) {
//   // Your code here
//   console.log("Hello, World!");
//   console.log(__filename);
//   console.log(__dirname);
// });

import greet from "./Module.js";
const { p1, p2 } = require("./Module");
const greet = require("./Module");

console.log(greet.greet(p1)); // Hello, john!
console.log(greet.greet(p2)); // Hello, doe!
console.log("Hello, World!");
console.log(__filename); // /path/to/your/file.js
console.log(__dirname); // /path/to/your
console.log(greet("Alice")); // Hello, Alice!
