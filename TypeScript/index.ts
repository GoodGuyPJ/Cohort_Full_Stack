type Person = {
  name: string;
};

const person: Person = {
  name: "John Doe",
}

console.log(person.name); // Output: John Doe


//1: String Interpolation
// let myVar: type = value;

let myName: string = "Jone";
myName = "Doe";
console.log(myName); // Output: Doe

//2: String Interpolation
let myName2: string = "John";
let myName3: string = "Doe";
let myName4: string = `My name is ${myName2} ${myName3}`;
console.log(myName4); // Output: My name is John Doe

//3: Number Interpolation
let favNumber: number = 10;

//4: Boolean Interpolation
let isTrue: boolean = true;

let isFalse: boolean = false;
console.log(isTrue); // Output: true

// Type Inference -> is a feature in TypeScript that allows the compiler to automatically infer the type of a variable based on its initial value. This means that you don't have to explicitly declare the type of a variable if the compiler can determine it from the value assigned to it.

let tech = "JavaScript"; // TypeScript infers the type as string
let tech2 = 10; // TypeScript infers the type as number
let tech3 = true; // TypeScript infers the type as boolean
let tech4 = null; // TypeScript infers the type as null
console.log(typeof tech); // Output: string


// Any Type-> has a special type called "any" that allows you to assign any value to a variable without TypeScript checking the type. This is useful when you don't know the type of a variable at compile time or when you're working with dynamic data.
let myVar: any = "Hello"; // myVar is of type any
myVar = 10;
myVar();
myVar = true;
myVar.toUpperCase();
console.log(myVar)


//Function Parameter Annotations
// Function parameter annotations are used to specify the types of parameters that a function can accept. This helps TypeScript check the types of arguments passed to the function and provides better type safety.

function addOne(a: number, b: number): number {
  return a + b;
} 


//Arrow function
const double = (x: number, y: number) => x*y;
const res = double(2,3);
console.log(res); // Output: 6

//Default Params Value
function greet(person: string, greeting: string = "Hello"): string {
  return `${greeting}, ${person}!`;
} 


//Return Annotaitons(Regular)
function double1(num: number): number{
  return num * 2;
}

//Return Annotaitons(Arrow)
const double2 = (num: number): number => num * 2;
const result = double2(5);

// Void in TypeScript -> is a type that represents the absence of a value. It is often used as the return type for functions that do not return a value. In other words, if a function does not return anything, you can use void as its return type.
function logMessage(message: string): void {
  console.log(message);
}
logMessage("Hello, World!"); // Output: Hello, World!


//Never -> is used to indicate that a function will never return a value. This can happen if the function always throws an error or if it enters an infinite loop. The never type is useful for functions that are not meant to return a value, such as error handling functions or functions that terminate the program.
// A fucntion that never returns a value
function throwError(message: string): never {
  throw new Error(message);
}

// A function that enters an infinite loop
function infiniteLoop(): never {
  while (true) {
    console.log("This will run forever!");
  }
}

// A function that never returns a value
function doNothing(): never {
  // This function does nothing and never returns a value
}
doNothing(); // This will not produce any output


// Arays Types -> Arays are a type of object that can store mutiple values of the same type. 
// 2 types array -> 1. Homogeneous Array 2. Heterogeneous Array

const numbers: number[] = [1, 2, 3, 4, 5]; // Homogeneous array of numbers
const names: string[] = ["John", "Jane", "Doe"]; // Homogeneous array of strings

const mixed: (string | number)[] = ["John", 1, "Doe", 2]; // Heterogeneous array of strings and numbers
const mixed2: Array<string | number> = ["John", 1, "Doe", 2]; // Heterogeneous array of strings and numbers

const mixed3: Array<any> = ["John", 1, "Doe", 2]; // Heterogeneous array of strings and numbers


//Multi-Dimensional Arrays -> are arrays that contain other arrays as their elements. They can be used to represent matrices, grids, or any other data structure that requires multiple dimensions.
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]; // A 2D array (matrix) of numbers
console.log(matrix[0][0]); // Output: 1


//Objects -> in typescript is a structured data tpe that represents a collection of key-value pairs. Each key is a string, and the value can be of any type, including other objects, arrays, or primitive types. Objects are used to group related data and functions together, making it easier to manage and organize code.

// type varName(annotations/types) = {property: value}
const person1: { name: string; age: number; isStudent: boolean } = {
  name: "John",
  age: 25,
  isStudent: true
}; // Object with properties name, age, and isStudent
console.log(person1.name); // Output: John


function printUser(): {name: string; age: number; location: string} {
  return {
    name: "Alex",
    age: 19,
    location: "USA"
  }
}

const user = printUser();
console.log(user.name); // Output: Alex

