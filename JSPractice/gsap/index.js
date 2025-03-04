// const sidebar = document.querySelector(".sidebar");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   sidebar.classList.toggle("hide");
// });

// gsap.to(".box", {
//   duration: 2,
//   y: 100,
//   // x: 100,
//   rotation: 360,
//   repeat: -1,
//   yoyo: true,
// });

// console.log(this);

// window.firstname = "goodguyPJ";
// console.log(firstname);

// function printThis() {
//   return this;
// }

// const res = printThis();
// console.log(res);

// const obj = {
//   firstName: "goodguyPJ",
//   lastName: "Park",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// function createPerson(firstName, lastName, pl) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     pl: pl,
//     fullName: function () {
//       console.log(`${this.firstName} ${this.lastName} ${this.pl}`);
//     },
//   };
// }

// const person1 = createPerson("goodguyPJ", "Park", "Frontend");
// const person2 = createPerson("goodguyPJ", "Park", "Frontend");
// console.log(person1);
// console.log(person2);

// function createPeople(firstName, lastName, pl) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.pl = pl;
//   this.fullName = function () {
//     console.log(`${this.firstName} ${this.lastName} ${this.pl}`);
//   };
// }
// const john = new createPeople("John", "Doe", "Frontend");

// let peroson = {
//   greet: function () {
//     console.log(`Hello, my name is ${this.firstName}`);
//   }
// }

// const huxn = Object.create(peroson);
// huxn.firstName = "Huxn";
// huxn.greet();

const obj1 = {};
console.log(obj1);
console.log(obj1.__proto__);
console.log(obj1.constructor.prototype);

const arr = new Array();
console.log(arr);
console.log(arr.__proto__);

function person3(firstName, lastName, pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl = pl;
  this.fullName = function () {
    console.log(`${this.firstName} ${this.lastName} ${this.pl}`);
  };
}

const huxnn = new person3("Huxnn", "Park", "Frontend");
console.log(huxnn);
console.log(huxnn.__proto__);
console.log(huxnn.constructor.prototype);
console.log(huxnn.__proto__.__proto__.__proto__);

Array.prototype.pop = function () {
  return "pop it up";
};

function myClass(publicField, privateField, protectedField) {
  this.publicField = publicField;

  const _privateField = privateField;

  this.getPrivateField = function () {
    return _privateField;
  };

  this.setPrivateField = function (value) {
    _privateField = value;
  };
}

// incapsulation
function counter() {
  let _counter = 0;
  this.increment = function () {
    _counter++;
  };
  this.decrement = function () {
    _counter--;
  };
  this.getCounter = function () {
    return _counter;
  };
}

const myCounter = new counter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.decrement();
console.log(myCounter.getCounter());

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log("Bark");
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.makeSound();
console.log(dog.name);

// complete test for js learning path
// let do this
