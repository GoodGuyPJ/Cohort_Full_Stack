// learn javascript
console.log("Practice JavaScript");

// var , let, const -> used for declaring variables

// javascript is a versatile and widely-used programming language. It is an essential part of web development and is used in a variety of applications, from building websites to creating interactive user interfaces. Learning JavaScript can open up a world of possibilities for your coding skills and career opportunities. Here are some reasons why you should learn JavaScript:
// 1. JavaScript is the language of the web: JavaScript is the most widely-used programming language for web development. It is used to create interactive and dynamic websites, and is an essential skill for front-end developers.

// 1. create a counter in javascript (counts down form 30 ot 0)
let counter = 1;
// let countdown = setInterval(() => {
//   console.clear();
//   console.log(counter);
//   counter--;
//   if (counter < 0) {
//     clearInterval(countdown);
//   }
// }, 1000);

//2 calculate the time it takes between a setTimeout and the inner function actually running

let startTime = new Date().getTime();
setTimeout(() => {
  let endTime = new Date().getTime();
  console.log(`The setTimeout took ${endTime - startTime} milliseconds to run`);
});

//3. create a terminal clock (hh:mm:ss) that updates every second
let clock = setInterval(() => {
  let date = new Date();
  console.clear();
  console.log(date.toLocaleTimeString());
}, 1000);

const { response } = require("express");
const zod = require("zod");
function validation(obj) {
  const schmea = zod.object({
    emal: zod.string().email(),
    password: zod.string().min(8),
  });
  const response = schmea.safeParse(obj);
  console.log(response);
}

validation({
  email: "new@gmail",
  password: "pass",
});
