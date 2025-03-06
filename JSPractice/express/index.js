const a1 = {
  avrage: (a, b) => {
    return (a + b) / 2;
  },
  sum: (a, b) => {
    return a + b;
  },
};
module.exports = a1;

// file based, build in, third-party
const fs = require("fs");
console.log(fs);

fs.readFile("./sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

const dataApp = fs.readFileSync("./app.js", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

console.log("i am first");
console.log(dataApp);

const { readFile, readFileSync } = require("fs");

const a = "This is a string";
console.log(a);

fs.writeFile("./sample.txt", a, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File created");
});

const path = require("path");

path.extname("/node/index.js");
console.log(path.extname("/node/index.js"));

const os = require("os");

console.log(os.userInfo());
console.log(os.freemem());

const pokemon = require("pokemon");
console.log(pokemon.random());
console.log(pokemon.all());

// ek server kasai bana tai hai
const http = require("http");
PORT = 3000;
const server = http.createServer((req, res, next) => {
  // res.params("Content-Type", "text/html");
  res.write("<h1>hello</h1>");
});

server.listen(PORT, "localhost", () => {
  console.log("Server is running");
});
