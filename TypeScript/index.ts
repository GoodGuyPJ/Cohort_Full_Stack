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

//