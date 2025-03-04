// const fruit = [
//   "apple",
//   "banana",
//   "cherry",
//   "date",
//   "elderberry",
//   "fig",
// ];
// fruit.push("grape");

// const  pl = ["javascript", "on", "ruby", "php", "java", "c"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(pl.includes("javascript"));
// console.log(pl.join("-"));

// console.log(typeof fruit);
// const arr = [];
// console.log(typeof arr);

// const greeting = function (user) {
//   console.log(`Hello, ${user}`);
// }

// const person = {
//   name: "John",
//   age: 25,
//   greet: function () {
//     console.log(`Hello, ${person.name}`);
//   }
// }
// person.greet();

// //json
// const person2 = {
//   "name": "John",
//   "age": 25,
//   "email": "js@gmail.com",
//   "isSubscribed": true,
//   "hobbies": ["reading", "coding", "gaming"],
//   "address": {
//     "street": "123 main st",
//     "city": "New York"
//   }
// }

// const jsonString = JSON.stringify(person2)
// const parsedObject = JSON.parse(jsonString);

// console.log(jsonString);
// console.log(parsedObject);

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hours = date.getHours();

// console.log(`Date: ${year}, Date: ${month}, Date: ${day}, Date: ${hours}`);

// const date2 = new Date();

// console.log(date2.toDateString());
// console.log(date2.toISOString())

// setInterval(() => {
//   console.log(`This function runs every 2 seconds`);
// }, 2000);

// const intervalId = setInterval(function () {
//   console.log(`this function is being executed at the interval`)
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);

// setTimeout( () => {
//   console.log("hello");
//   setTimeout( () => {
//     console.log("world");
//     setTimeout(() =>{
//       console.log("namaste");
//       setTimeout(() => {
//         console.log("salam");
//       }, 2000)
//     }, 2000)
//   }, 2000)
// }, 2000)

// const strNums = ["one", "two", "three", "four", "five"];
// const moreStrNums = ["six", "seven", "eight", "nine", "ten"];

// const concat = [...strNums, ...moreStrNums];
// console.log(concat);

// let peoples = ['huxn', 'john', 'doe', 'jane', 'smith'];
// console.log('kumar', ...peoples);

// let person = {
//   name: 'john',
//   age: 25,
//   email: 'john.gmail.com'
// }

// const clone = {...person, works: "Programmer", location: 'locations'};
// console.log(clone);

//  function sum(a, b, ...hobbies) {
//    console.log(a, b, hobbies);
//  }
//  sum('a', 'b', 'c', 'd', 'e', 'f', 'g');

//  const foo = ["one", "two", "three", "four", "five"];

//  const [three] = foo;
//  console.log(three);

//  function f() {
//     return [1, 2, 3];
//  }

//  let a, b
//  [a, b] = f()

//  function person(firstName, lastName, ...hobbies) {
//    console.log(firstName, lastName, hobbies);
//  }
//  person('john', 'doe', 'reading', 'coding', 'gaming');

// //  complete learing

// typeof person;

// const data =  {
//   user: {
//     id: 123,
//     name: "john",
//     age: 25,
//     email: "john.doe@example.com",
//     address: {
//       street: "123 main st",
//       city: "New York"
//     }
//   }
// }

// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(let index in list){
//   console.log(`${index}: ${list[index]}`);
// }

// const colors = ["red", "green", "blue", "yellow", "orange"];
// colors.forEach((color) => console.log(color));

// const words = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

// const capWords = words.forEach((word, index, arr) =>{
//   arr[index] = word.toUpperCase() + word.substring(1);
// });

// console.log(words)

// const songs = [
//   {name: "song1", duration: 3.45},
//   {name: "song2", duration: 4.45},
//   {name: "song3", duration: 5.45},
//   {name: "song4", duration: 6.45},
// ];

// console.log(songs.filter((song) => song.duration > 5));

// const computer = [
//   {name: "apple", price: 1000},
//   {name: "dell", price: 800},
//   {name: "hp", price: 700},
//   {name: "asus", price: 600},
// ]
// console.log(computer.filter((com) => com.price > 700));

// const peoples = [
//   {name: "john", age: 25},
//   {name: "doe", age: 30},
//   {name: "jane", age: 35},
//   {name: "smith", age: 40},
// ];

// const res = peoples.find(person => person.name === "doe");
// console.log(res);

//every() method
// const peoples = ["john", "doei", "jane", "smit"];

// const res1 = peoples.every((people) => people.length === 4);
// console.log(res1);

// //some() method
// const res2 = peoples.some((people) => people.length > 3);
// console.log(res2);

// //Refactor -> use every and some helpers
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Chess", category: "Books" },
//   { name: "Bike", category: "Vehicle" },
//   { name: "Car", category: "Vehicle" },
// ];

// let allProductsBooks = true;
// let someProductsBooks = false;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category !== "Books") {
//     allProductsBooks = false;
//   } else {
//     someProductsBooks = true;
//   }
// }

// //do all products have a category of books?
// // let allProductsBooks = products.every((product) => product.category === "Books");

// console.log(allProductsBooks);
// console.log(someProductsBooks);

// //do some products have a category of books?
// // let someProductsBooks = products.some((product) => product.category === "Books");

// // reduce() method
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const sum = numbers.reduce((acc, num) => acc+num, 0);
// const sum = numbers.reduce((acc, num) => {
//   console.log(acc, num);
//   return acc + num;
// }, 0);
// console.log(sum);

// const peoples1 = [
//   {
//     name: "john",
//     age: 25,
//   },
//   {
//     name: "doe",
//     age: 30,
//   },
//   {
//     name: "jane",
//     age: 35,
//   },
//   {
//     name: "smith",
//     age: 40,
//   },
// ];

// const res = peoples1.reduce(
//   (acc, people) => (people.age > acc ? people.age : acc),
//   0
// );
// console.log(res);

// const fruit = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

// const wordFrequency = fruit.reduce((frequencyMap, word) => {
//   frequencyMap[word] = (frequencyMap[word] || 0) + 1;
//   return frequencyMap;
// });
// console.log(wordFrequency);

// const numbers1 = [1, 2, 3, 4];

// const calculateProduct = (numbers) => {
//   return numbers.reduce((acc, num) => acc * num, 1);
// };

// const product = calculateProduct(numbers1);
// console.log(product);

// //Map() method
// const map = new Map();

// const keyOne = "string";
// const keyTwo = {};
// const keyThree = function () {};

// map.set(keyOne, "value associated with string");
// map.set(keyTwo, "value associated with object");
// map.set(keyThree, "value associated with function");
// console.log(map);

// console.log(map.keys());
// console.log(map.values());
// console.log(map.delete(keyThree));

// // set
// const initialValue = [1, 2, 3, 4, 3, 8, 9];
// const mySet = new Set(initialValue);
// console.log(mySet);

// const set = new Set();
// set.add("apple");
// set.add("banana");

// console.log(set.has("apple"));
// set.delete("apple");
// console.log(set.has("apple"));
// mySet.clear();
// console.log(mySet);

// for(let item of mySet) {
//   console.log(item);
// }

// const mySymbol = Symbol();
// console.log(typeof mySymbol);

// // comparing Symbols
// const symbol1 = Symbol("symbol");
// const symbol2 = Symbol("symbol");

// const obj = {};
// obj[symbol1] = "value 1";
// obj[symbol2] = "value 2";

// console.log(obj[symbol1]);
// console.log(obj[symbol2]);

// const huxn = {};
// huxn.age = 19;
// huxn["gender"] = "male";
// huxn["gender"] = "female";
// huxn[symbol1] = "alex";
// huxn[symbol2] = "john";
// console.log(huxn);

//Dom manipulation
// const tagname = document.getElementsByTagName("h4");
// console.log(tagname);

// const tagname1 = (document.getElementsByClassName("green").innerHTML = "Hello");
// console.log(tagname1);

// const idname = document.getElementById("blue");
// console.log(idname);

// const query = document.querySelector(".yellow");
// console.log(query);

// const queryAll = document.querySelectorAll(".yellow");
// console.log(queryAll);

// //innerText, textContent, innerHTML
// const text = document.getElementById("text");
// console.log(text.innerText);

// const h1 = document.querySelector("h1");
// h1.innerText = "Hello World";
// h1.innerHTML = "<em>Hello World</em>";

// const first = document.querySelector(".box");
// console.log(first.textContent);

// const h2 = document.querySelector("h2");
// console.log(h2.classList);

// h2.classList.add("green");
// console.log(h2.classList);

// h2.classList.remove("green");
// console.log(h2.classList);

// h2.classList.toggle("green");

// const a = document.querySelector("a");
// console.log(a.getAttribute("href"));
// a.setAttribute("href", "https://www.google.com");
// console.log(a.getAttribute("href"));

// const input = document.querySelector("input");
// console.log(input.value);
// input.value = "";
// console.log(input.value);

// const h1 = document.createElement("h1");
// const body = document.body;
// h1.textContent = "Hello";
// h1.classList.add("greetings");
// body.appendChild(h1);
// console.log(h1);

// const firstP = document.querySelector("p");
// const i = document.createElement("i");
// i.innerText = "This is italic text";
// i.style.color = "red";
// firstP.insertAdjacentElement("beforebegin", i);
// firstP.insertAdjacentElement("beforeend", i);
// firstP.insertAdjacentElement("afterbegin", i);
// firstP.insertAdjacentElement("afterend", i);

// let section = document.querySelector("section");
// const i = document.createElement("i");
// i.innerText = "This is italic text";
// i.style.color = "red";

// section.append(i);

// section.prepend(i);

// const newList = document.querySelector(".new-list");
// newList.remove();

// const badway = document.querySelector(".second-btn");
// badway.onclick = function () {
//   console.log("bad way");
// };

// const goodway = document.querySelector(".best");
// goodway.addEventListener("click", () => {
//   console.log("good way");
// });

// const form = document.querySelector("form");
// const input = document.querySelector("input");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("form submitted");
//   console.log(event);
//   console.log(input.value);
// });

//events mouse and keyboard events

// const emoji = document.querySelector(".emoji");
// const emojis = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊"];

// emoji.addEventListener("mouseover", () => {
//   emoji.innerHTML = emojis[Math.floor((Math.random() * emojis.length) | 0)];
// });

// const btns = document.querySelectorAll(".btn");
// const body = document.body;

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     number = btn.value;
//     changeBackground(number);
//   });
// });

// function changeBackground(number) {
//   // body.style.backgroundColor = `rgb(${Math.random() * 255}, ${
//   //   Math.random() * 255
//   // }, ${Math.random() * 255})`;

//   body.className = "";

//   // switch (number) {
//   //   case "purple":
//   //     body.classList.add("purple");
//   //     break;
//   //   case "blue":
//   //     body.classList.add("blue");
//   //     break;
//   //   case "green":
//   //     body.classList.add("green");
//   //     break;
//   //   case "yellow":
//   //     body.classList.add("yellow");
//   //     break;
//   //   case "orange":
//   //     body.classList.add("orange");
//   //     break;
//   //   case "red":
//   //     body.classList.add("red");
//   //     break;
//   //   case "pink":
//   //     body.classList.add("pink");
//   //     break;
//   // }
// }
