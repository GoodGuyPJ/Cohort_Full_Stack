function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// module.exports = {
//   addfn: add,
//   subtractfn: subtract,
// }

// module.exports = {
//   add,
//   subtract,
// };

exports.add = (a, b) => a + b;
