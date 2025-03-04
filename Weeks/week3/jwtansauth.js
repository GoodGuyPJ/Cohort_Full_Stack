const jwt = require("jsonwebtoken");

const value = {
  name: "John Doe",
  accountNumber: 1234567890
};

// jwt.sign() method is used to generate a token
const token = jwt.sign(value, "secret"); // secret is the secret key used to generate the token
// console.log(token);

// jwt.verify() method is used to verify the token
const newToken = jwt.verify("  ", "secret");

console.log(newToken);

try {
  let a;
  console.log(a.length);
} catch(e){
  console.log(e);
  console.log("Error");
}

