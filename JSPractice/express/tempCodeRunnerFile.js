// const a = {
//   avrage: (a, b) => {
//     return (a + b) / 2;
//   },
//   sum: (a, b) => {
//     return a + b;
//   },
// };
// module.exports = a;

//file based, build in, third-party
const fs = require("fs");
// console.log(fs);

fs.readFile("./sample.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
