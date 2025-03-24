// //variables
// var name = "John";
// let age = 25;
// const isStudent = false;

// //data type
// let number = 3.14;
// const lastName = "Doe";
// let lastlogindata = null;
// const person = {
//   first: "John",
//   last: "Doe",
//   age: 25,
//   lastlogin: null,
// };

// //conditionals
// if (age > 18) {
//   console.log("You are an adult");
// } else {
//   console.log("You are a minor");
// }

// // ternary operator
// const Limtage = 90;
// const isAdult = Limtage > 18 ? "Adult" : "Minor";
// console.log(isAdult);

// //switch
// const day = 2;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// //Logical operators
// const gender = "male";
// const Name = "John";

// if (gender == "male" && Name == "John") {
//   console.log("Hello John");
// }

// // loops
// // for loop
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// // while loop
// let i1 = 0;
// while (i1 < 5) {
//   console.log(i1);
//   i1++;
// }

// // do while loop
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 1);

// //Functions
// function greet() {
//   console.log("Hello");
// }

// API calling in Js
const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const weather = document.getElementById("weather");

async function getData(cityName) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=8da7532d66ee40cb999164418252403&q=${cityName}&aqi=yes`
  );
  return await response.json();
}

button.addEventListener("click", async () => {
  const value = input.value;

  const result = await getData(value);
  cityName.innerText = result.location.name;
  temperature.innerText = result.current.temp_c;
  weather.innerText = result.current.condition.text;
  console.log(result);
});

//Creating Clock in Javascript | Set Interval and Timeouts
const Clockbutton = document.getElementById("stop-timmer");

function showTime() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}: ${currentTime.getMinutes()}: ${currentTime.getSeconds()}`;
  document.getElementById("time").innerText = time;
}

let interval = setInterval(showTime, 1000);

button.addEventListener("click", () => {
  clearInterval(interval);
});
