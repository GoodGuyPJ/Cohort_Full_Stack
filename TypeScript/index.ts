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




function printUser2(): {name: string, age: number} {
  return {
    name: "Alex",
    age: 19
  }
}

const user2 = printUser2();
console.log(user2.name); // Output: Alex


//Object Type Annotations -> are used to specify the types of properties in an object. This helps TypeScript check the types of properties and provides better type safety.



//Type Aliases -> are a way to create a new name for an existing type. This can be useful for creating more descriptive names for complex types or for creating reusable types that can be used in multiple places in your code.
type User = {
  name: string;
  age: number;
  location: string;
};

function printUser1(pesron: User){
  console.log(`Name: ${pesron.name}, Age: ${pesron.age}, Location: ${pesron.location}`);
}

let myUser: User = {
  name: "John",
  age: 25,
  location: "USA"
}
printUser1(myUser); // Output: Name: John, Age: 25, Location: USA


//Optinal Properties -> are properties that may or may not be present in an object. This is useful when you want to allow for flexibility in the structure of an object, such as when some properties are optional and others are required.
type User1 = {
  name: string;
  age: number;
  location?: string; // Optional property
};

const user: User1 = {
  name: "John",
  age: 25,
  // location is optional and can be omitted
};
console.log(user.name); // Output: John
 

//Readonly Properties -> are properties that cannot be changed after they are set. This is useful when you want to create immutable objects or when you want to prevent accidental changes to certain properties.
type User2 = {
  readonly name: string; // Readonly property
  age: number;
};

const user2: User2 = {
  name: "John",
  age: 25,
};
user2.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property
console.log(user2.name); // Output: John


//Intersection Types -> are a way to combine multiple types into a single type. This allows you to create more complex types that can have properties from multiple types. Intersection types are created using the & operator.

type Person1 = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person1 & Address; // Intersection type

const John: PersonWithAddress = {
  name: "John",
  age: 25,
  street: "123 Main St",
  city: "New York", 
};
console.log(John.name); // Output: John
console.log(John.street); // Output: 123 Main St

//Union Types -> are a way to specify that a variable can be one of multiple types. This allows you to create more flexible and reusable code. Union types are created using the | operator.
type StringOrNumber = string | number; // Union type

function foo(param: string | number) {
  if (typeof param === "string") {
    console.log(`String: ${param}`);
  } else if (typeof param === "number") {
    console.log(`Number: ${param}`);
  }
}
foo("Hello"); // Output: String: Hello

interface MyInterface {
  myProp: string | number; // Union type in interface
}
const obj: MyInterface = {
  myProp: "Hello",
};
console.log(obj.myProp); // Output: Hello

type UserInfo = {
  firstName: string;
  lastName: string;
  age: number;
}

type AccountInfo = {
  email: string;
  password: string;
  isActive: boolean;
}

let user: UserInfo & AccountInfo = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  email: "john@gmial.com",
  password: "123456",
  isActive: true
  let password : string | number = 20

  type UserInfo = {
      first: string;
      last: string;
      age: number;
  }
  
  type AccountDetails = {
      email: string;
      password: string;
  }
  
  let user: UserInfo | AccountDetails = {
      first: 'John',
      email: 'email@gmail.com',
      password: 'passowrd'
  }
  
  const items: (number | string)[] = [1,5,5, 'hello']
  console.log(items);
  
  
  //Literals Types -> allow you to specify a value that can only be one specific literal value. This means that a variable with a literal type can only have one specific value and no other.
  
  let color: "red" | "blue" | "green";
  color = "red";
  color: "yellow"; // invalid
  
  let isTrue: true | false;
  isTrue = false;
  
  let passowrd: "secretPassword" = "secretPassword";
  passowrd = "something else";
  
  console.log(passowrd);
  
  
  //Tuples -> is a type represents an array with a fixed number of elements, where each element can have a different type. The order of the types in the tuple defination coresponds to the order of the elements in the array. Tuples are useful when you want to group together a fixed number of values of different types into a single entity.
  
  let myTuple: [string, number] = ["hello", 5];
  let [first, second] = myTuple;
  console.log(first); // hello
  console.log(second); // 5
  
  const products: (number | string)[] = [1, 2, 3, "hello", "world"];
  
  const games: [string, number, boolean] = ["game 1", 20, true];
  const [name, price, isAvailable] = games;
  console.log(name); // game 1
  console.log(price); // 20
  console.log(isAvailable); // true
  
  
  //Enums -> is a way to define a set of named constants. Enums are useful when you want to represent a collection of related values that can be used in your code. Enums can be numeric or string-based.
  enum WeatherConditions {
      Sunny = "Sunny",
      Rainy = "Rainy",
      Cloudy = "Cloudy",
      Snowy = "Snowy",

  }

  const todayWeather: WeatherConditions = WeatherConditions.Sunny;
  console.log(todayWeather); // Output: Sunny
  console.log(WeatherConditions.Rainy); // Output: Rainy
  


  // OOPS -> Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure code. TypeScript supports OOP concepts such as classes, inheritance, encapsulation, and polymorphism. OOP allows you to create reusable and modular code, making it easier to manage and maintain large codebases.
  // In TypeScript, you can define classes using the class keyword. A class is a blueprint for creating objects, and it can contain properties (data) and methods (functions) that operate on that data. Classes can also have constructors, which are special methods used to initialize objects when they are created.

  //Class Properties Annotations
class Person10{
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let person10 = new Person10("John", 25);
person10.greet(); // Output: Hello, my name is John and I am 25 years old.

//Access Modifiers -> are keywords that control the visibility and accessibility of class members (properties and methods). TypeScript provides three access modifiers: public, private, and protected.
//Public-> members marked as public can be accessed from anywhere, both inside and outside the class. This is the default access modifier if none is specified.
 class Person11{
  public name: string;
  public age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let person11 = new Person11("John", 25);
person11.greet(); // Output: Hello, my name is John and I am 25 years old.


class Human{
  public firstname: string;
  public lastname: string;

  constructor(firstname: string, lastname: string){
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
let human = new Human("John", "Doe");
console.log(human.firstname); // Output: John

//Private-> members marked as private can only be accessed from within the class itself. They are not accessible from outside the class or from derived classes. This is useful for encapsulating data and preventing external code from modifying it directly.
class Person12{
  private name: string;
  private age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let person12 = new Person12("John", 25);
console.log(person12.name); // Error: Property 'name' is private and only accessible within class 'Person12'.
person12.greet(); // Output: Hello, my name is John and I am 25 years old.

//Protected-> members marked as protected can be accessed from within the class and from derived classes (subclasses). They are not accessible from outside the class hierarchy. This is useful for creating base classes that can be extended by other classes while still protecting certain members.
class Person13{
  protected name: string;
  protected age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
class Student extends Person13{
  private studentId: number;

  constructor(name: string, age: number, studentId: number){
    super(name, age);
    this.studentId = studentId;
  }
  greet(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}.`);
  }
}
let student = new Student("John", 25, 12345);
console.log(student.name); // Error: Property 'name' is protected and only accessible within class 'Person13' and its subclasses.
student.greet(); // Output: Hello, my name is John and I am 25 years old. My student ID is 12345


//Getter and Setter -> are special methods that allow you to define custom behavior for accessing and modifying properties of a class. Getters are used to retrieve the value of a property, while setters are used to set the value of a property. This allows you to encapsulate the logic for getting and setting properties, providing better control over how they are accessed and modified.
class Person14{
  private _name: string;
  private _age: number;

  constructor(name: string, age: number){
    this._name = name;
    this._age = age;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get age(): number {
    return this._age;
  }
  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative.");
    }
    this._age = value;
  }
}

let person14 = new Person14("John", 25);
console.log(person14.name); // Output: John
person14.name = "Doe";
console.log(person14.name); // Output: Doe


//Inheritance -> is a fundamental concept in object-oriented programming that allows you to create new classes based on existing classes. The new class, called the subclass or derived class, inherits properties and methods from the existing class, called the superclass or base class. This allows you to create a hierarchy of classes and promote code reuse.
class Animal {
  constructor(public name: string) {}
  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}
class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} barks.`);
  }
}
class Cat extends Animal {
  makeSound() {
    console.log(`${this.name} meows.`);
  }
}
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
dog.makeSound(); // Output: Buddy barks.
cat.makeSound(); // Output: Whiskers meows.

//Polymorphism -> is a concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass. This enables you to write code that can work with different types of objects in a uniform way, promoting code reuse and flexibility.
class Animal1 {
  makeSound() {
    console.log("Animal makes a sound.");
  }
}
class Dog1 extends Animal1 {
  makeSound() {
    console.log("Dog barks.");
  }
}
class Cat1 extends Animal1 {
  makeSound() {
    console.log("Cat meows.");
  }
}
function makeAnimalSound(animal: Animal1) {
  animal.makeSound();
}
const dog1 = new Dog1();
const cat1 = new Cat1();
makeAnimalSound(dog1); // Output: Dog barks.
makeAnimalSound(cat1); // Output: Cat meows.
//Abstract Classes -> are classes that cannot be instantiated directly and are meant to be subclassed. They can contain abstract methods (methods without an implementation) that must be implemented by derived classes. Abstract classes are useful for defining a common interface for a group of related classes while allowing each subclass to provide its own implementation.
abstract class Shape {
  abstract area(): number; // Abstract method
  abstract perimeter(): number; // Abstract method
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }
  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
const rectangle = new Rectangle(5, 10);
const circle = new Circle(5);
console.log(`Rectangle Area: ${rectangle.area()}`); // Output: Rectangle Area: 50
console.log(`Circle Area: ${circle.area()}`); // Output: Circle Area: 78.53981633974483
console.log(`Rectangle Perimeter: ${rectangle.perimeter()}`); // Output: Rectangle Perimeter: 30
console.log(`Circle Perimeter: ${circle.perimeter()}`); // Output: Circle Perimeter: 31.41592653589793

// Interfaces -> are a way to define a contract for classes. They specify the structure of an object, including its properties and methods, without providing an implementation. Interfaces are useful for defining common behavior that can be shared among different classes, allowing you to create more flexible and reusable code.
interface Employee {
  firstName: string;
  lastName: string;
  age: number;
}

//usage
const exampleEmployee: Employee = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
}

//while interface are commonly used to define the structure of objects, they can also be used to define the structure of classes. This allows you to create a contract that classes must adhere to, ensuring that they implement the required properties and methods.

//interface for function
interface MathOperation{
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a+ b;
const subtract: MathOperation = (a, b) => a-b;

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2


// interface for classes
interface vehicle {
  start(): void;
  stop(): void;
} 

class Car implements vehicle {
  start() {
    console.log("Car started.");
  }
  stop() {
    console.log("Car stopped.");
  }
}

const myCar = new Car();
myCar.start(); // Output: Car started.
myCar.stop(); // Output: Car stopped.

interface Computer{
  brand: string;
  model: string;
  start(): void;
  stop(): void;
}

const computerExample: Computer = {
  brand: "Apple",
  model: "MacBook Pro",
  start() {
    console.log("Computer started.");
  },
  stop() {
    console.log("Computer stopped.");
  }
}
console.log(computerExample.brand); // Output: Apple
console.log(computerExample.model); // Output: MacBook Pro

//readonly interface
interface Movie {
  readonly name: string;
  rating: number;
  genra?: string;
   
}

const movie: Movie = {
  name: "Inception",
  rating: 8.8,
  genra: "Sci-Fi"

}

console.log(movie.name); // Output: Inception
console.log(movie.rating); // Output: 8.8


interface MoiveDetails {
  readonly name: string;
  rating: number;
  printMoiveInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenra extends MoiveDetails {
  genra: string;
}

const movie1: MovieGenra = {
  name: "star wars",
  rating: 8.5,
  printMovieInfo(
    name: string,
    price: number,
    ratings: number
  ): string | number {
    return `Movie Name: ${name}, Price: ${price}, Ratings: ${ratings}`;
  }
}

const movieInfo = movie1.printMovieInfo("Star Wars", 20, 8.5);
console.log(movieInfo); // Output: Movie Name: Star Wars, Price: 20, Ratings: 8.5

//Declaration Merging -> is a feature in TypeScript that allows you to define multiple declarations for the same entity, such as an interface or a module. This means that you can extend or augment existing declarations without modifying the original code. Declaration merging is useful for adding new properties or methods to existing interfaces or modules, allowing you to create more flexible and reusable code.

interface Car {
  brand: string;
  start(): void;
}
//declartion merging 
interface Car{
  model: string;
  stop(): void;
}

//usage of the extended interface
const myCar1: Car= {
  brand: "Toyota",
  model: "Camry",
  start() {
    console.log("Car started.");
  },
  stop() {
    console.log("Car stopped.");
  }
}
myCar1.start(); // Output: Car started.
myCar1.stop(); // Output: Car stopped.


//Generics -> allow you to create reusable components that can work with a variety of types. Generics make it possible to define a function, class, or interface that can operate on different types without losing type safety. This allows you to create more flexible and reusable code while still benefiting from TypeScript's type checking.

//Regular function
const printString = (x: string)=> console.log(x);
const printNumber = (x: number)=> console.log(x);

console.log(printString("Hello")); // Output: Hello
console.log(printNumber(10)); // Output: 10

//Generic function
function printInfo<T>(x: T): T {
  return x;
}
const stringInfo = printInfo<string>("Hello");
const numberInfo = printInfo<number>(10);
const booleanInfo = printInfo<boolean>(true);

function uniqueDataTypeFunc<Type>(item: Type, defaultValue: Type): [Type, Type] {
  return [item, defaultValue];
}

const stringData = uniqueDataTypeFunc<string>("Hello", "World");
const numberData = uniqueDataTypeFunc<number>(10, 20);  
const booleanData = uniqueDataTypeFunc<boolean>(true, false);

console.log(stringData); // Output: [ 'Hello', 'World' ]

interface Dog {
  name: string;
  bread: string;
}

const dog1 = uniqueDataTypeFunc<Dog>(
  { name: "Buddy", bread: "Golden Retriever" }
);

console.log(dog1); // Output: [ { name: 'Buddy', bread: 'Golden Retriever' }, { name: 'Max', bread: 'Labrador' } ]


function getRandomKey<T>(obj: {  [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj)
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return{ key: randKey, value: obj[randKey] };
}

const stringObject = {
  a: "Hello",
  b: "World",
  c: "TypeScript",
}

getRandomKey<string>(stringObject); // Output: { key: 'b', value: 'World' }
const numberObject = {
  a: 1,
  b: 2,
  c: 3,
}
getRandomKey<number>(numberObject); // Output: { key: 'a', value: 1 }


function filterArray<T>(array:T[], condition: (item: T) => boolean ): T[] {
  return array.filter((item)=> condition(item));
}

const numbersArray = [1, 2, 3, 4, 5];
const evenNumbers = filterArray<number>(numbersArray, (num) => num % 2 === 0);
const oddNumbers = filterArray<number>(numbersArray, (num) => num % 2 !== 0);
const stringsArray = ["apple", "banana", "cherry"];
const filteredStrings = filterArray<string>(stringsArray, (str) => str.startsWith("a"));


interface Gruit {
  name: string;
  color: string;
}
const fruits: Gruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Grapes", color: "Purple" },
];

const redFruits = filterArray<Gruit>(fruits, (fruit) => fruit.color === "Red");
const yellowFruits = filterArray<Gruit>(fruits, (fruit) => fruit.color === "Yellow");

console.log(redFruits); // Output: [ { name: 'Apple', color: 'Red' } ]
console.log(yellowFruits); // Output: [ { name: 'Banana', color: 'Yellow' } ]


function reversePair<T, U>(pair: [T, U]): [U, T] {
  return [pair[1], pair[0]];
}

const pair1 = [1, "Hello"];
const reversedPair1 = reversePair<number, string>(pair1);
const pair2 = ["TypeScript", true];
const reversedPair2 = reversePair<string, boolean>(pair2);
console.log(reversedPair1); // Output: [ 'Hello', 1 ]
console.log(reversedPair2); // Output: [ true, 'TypeScript' ]


class Box<T> {
  private content: T;

  constructor(initalContent: T){
    this.content = initalContent;
  }

  getContent(): T{
    return this.content;
  }
  setContent(newContent: T): void {
    this.content = newContent;
  }
}

const stringBox = new Box<string>("Hello");
const numberBox = new Box<number>(10);
const booleanBox = new Box<boolean>(true);
const objectBox = new Box<{ name: string; age: number }>({ name: "John", age: 25 });
const arrayBox = new Box<number[]>([1, 2, 3, 4, 5]);
const tupleBox = new Box<[string, number]>(["Hello", 10]);

console.log(stringBox.getContent()); // Output: Hello
console.log(numberBox.getContent()); // Output: 10
console.log(booleanBox.getContent()); // Output: true



//Type Narrowing-> is the process of refining a variable's  type within a conditional block of code. this allows you to write more precise and type-safe code. 
//Type Guards-> are expressions that perform runtime checks to determine the type of a variable. Type guards can be used to narrow down the type of a variable within a conditional block, allowing you to safely access properties or methods specific to that type.
//Define a union type
type MyType = string | number;
//Example function with type guards
function exampleFunction(value: MyType): void {
  //type guard using typeof
  if(typeof value === "string"){
    //within this block, typescript knows that value is a string
    console.log(`String value: ${value.toUpperCase}`);
  }
  else if(typeof value === "number"){
    //within this block, typescript knows that value is a number
    console.log(`Number value: ${value.toFixed(2)}`);
  }
  else{
    //this block will never be reached because value can only be a string or number
    console.log("Invalid type");
  }
}
exampleFunction("Hello"); // Output: String value: HELLO
exampleFunction(10); // Output: Number value: 10.00 

//instaceof Operator
class Dog{
  bark(): void{
    console
  }
}

class Cat{
  meow(): void{
    console.log("Meow");
  }
}

//example function with instanceof operator type guard
function animalSound(animal: Dong | Cat): void {
  if(animal instanceof Dog){
    // within this block, typescript knows that animal is a Dog
    animal.bark();
  } else if(animal instanceof Cat){
    // within this block, typescript knows that animal is a Cat
    animal.meow();
  } else {
    // this block will never be reached because animal can only be a Dog or Cat
    console.log("Invalid animal");
  }
}

const dog = new Dog();
const cat = new Cat();
animalSound(dog); // Output: Woof
animalSound(cat); // Output: Meow