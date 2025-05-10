var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = {
    name: "John Doe",
};
console.log(person.name); // Output: John Doe
//1: String Interpolation
// let myVar: type = value;
var myName = "Jone";
myName = "Doe";
console.log(myName); // Output: Doe
//2: String Interpolation
var myName2 = "John";
var myName3 = "Doe";
var myName4 = "My name is ".concat(myName2, " ").concat(myName3);
console.log(myName4); // Output: My name is John Doe
//3: Number Interpolation
var favNumber = 10;
//4: Boolean Interpolation
var isTrue = true;
var isFalse = false;
console.log(isTrue); // Output: true
// Type Inference -> is a feature in TypeScript that allows the compiler to automatically infer the type of a variable based on its initial value. This means that you don't have to explicitly declare the type of a variable if the compiler can determine it from the value assigned to it.
var tech = "JavaScript"; // TypeScript infers the type as string
var tech2 = 10; // TypeScript infers the type as number
var tech3 = true; // TypeScript infers the type as boolean
var tech4 = null; // TypeScript infers the type as null
console.log(typeof tech); // Output: string
// Any Type-> has a special type called "any" that allows you to assign any value to a variable without TypeScript checking the type. This is useful when you don't know the type of a variable at compile time or when you're working with dynamic data.
var myVar = "Hello"; // myVar is of type any
myVar = 10;
myVar();
myVar = true;
myVar.toUpperCase();
console.log(myVar);
//Function Parameter Annotations
// Function parameter annotations are used to specify the types of parameters that a function can accept. This helps TypeScript check the types of arguments passed to the function and provides better type safety.
function addOne(a, b) {
    return a + b;
}
//Arrow function
var double = function (x, y) { return x * y; };
var res = double(2, 3);
console.log(res); // Output: 6
//Default Params Value
function greet(person, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(person, "!");
}
//Return Annotaitons(Regular)
function double1(num) {
    return num * 2;
}
//Return Annotaitons(Arrow)
var double2 = function (num) { return num * 2; };
var result = double2(5);
// Void in TypeScript -> is a type that represents the absence of a value. It is often used as the return type for functions that do not return a value. In other words, if a function does not return anything, you can use void as its return type.
function logMessage(message) {
    console.log(message);
}
logMessage("Hello, World!"); // Output: Hello, World!
//Never -> is used to indicate that a function will never return a value. This can happen if the function always throws an error or if it enters an infinite loop. The never type is useful for functions that are not meant to return a value, such as error handling functions or functions that terminate the program.
// A fucntion that never returns a value
function throwError(message) {
    throw new Error(message);
}
// A function that enters an infinite loop
function infiniteLoop() {
    while (true) {
        console.log("This will run forever!");
    }
}
// A function that never returns a value
function doNothing() {
    // This function does nothing and never returns a value
}
doNothing(); // This will not produce any output
// Arays Types -> Arays are a type of object that can store mutiple values of the same type. 
// 2 types array -> 1. Homogeneous Array 2. Heterogeneous Array
var numbers = [1, 2, 3, 4, 5]; // Homogeneous array of numbers
var names = ["John", "Jane", "Doe"]; // Homogeneous array of strings
var mixed = ["John", 1, "Doe", 2]; // Heterogeneous array of strings and numbers
var mixed2 = ["John", 1, "Doe", 2]; // Heterogeneous array of strings and numbers
var mixed3 = ["John", 1, "Doe", 2]; // Heterogeneous array of strings and numbers
//Multi-Dimensional Arrays -> are arrays that contain other arrays as their elements. They can be used to represent matrices, grids, or any other data structure that requires multiple dimensions.
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; // A 2D array (matrix) of numbers
console.log(matrix[0][0]); // Output: 1
//Objects -> in typescript is a structured data tpe that represents a collection of key-value pairs. Each key is a string, and the value can be of any type, including other objects, arrays, or primitive types. Objects are used to group related data and functions together, making it easier to manage and organize code.
// type varName(annotations/types) = {property: value}
var person1 = {
    name: "John",
    age: 25,
    isStudent: true
}; // Object with properties name, age, and isStudent
console.log(person1.name); // Output: John
function printUser() {
    return {
        name: "Alex",
        age: 19,
        location: "USA"
    };
}
var user = printUser();
console.log(user.name); // Output: Alex
function printUser2() {
    return {
        name: "Alex",
        age: 19
    };
}
var user2 = printUser2();
console.log(user2.name); // Output: Alex
function printUser1(pesron) {
    console.log("Name: ".concat(pesron.name, ", Age: ").concat(pesron.age, ", Location: ").concat(pesron.location));
}
var myUser = {
    name: "John",
    age: 25,
    location: "USA"
};
printUser1(myUser); // Output: Name: John, Age: 25, Location: USA
var user = {
    name: "John",
    age: 25,
    // location is optional and can be omitted
};
console.log(user.name); // Output: John
var user2 = {
    name: "John",
    age: 25,
};
user2.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property
console.log(user2.name); // Output: John
var John = {
    name: "John",
    age: 25,
    street: "123 Main St",
    city: "New York",
};
console.log(John.name); // Output: John
console.log(John.street); // Output: 123 Main St
function foo(param) {
    if (typeof param === "string") {
        console.log("String: ".concat(param));
    }
    else if (typeof param === "number") {
        console.log("Number: ".concat(param));
    }
}
foo("Hello"); // Output: String: Hello
var obj = {
    myProp: "Hello",
};
console.log(obj.myProp); // Output: Hello
var user = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    email: "john@gmial.com",
    password: "123456",
    isActive: true,
    let: let,
    password: string | number, 20: type,
    UserInfo: UserInfo,
    type: type,
    AccountDetails: AccountDetails,
    let: let,
    user: UserInfo | AccountDetails
}, _a = void 0,  = _a.first,  = _a["John"],  = _a.email,  = _a["email@gmail.com"],  = _a.password,  = _a["passowrd"];
var items = [1, 5, 5, 'hello'];
console.log(items);
//Literals Types -> allow you to specify a value that can only be one specific literal value. This means that a variable with a literal type can only have one specific value and no other.
var color;
color = "red";
color: "yellow"; // invalid
var isTrue;
isTrue = false;
var passowrd = "secretPassword";
passowrd = "something else";
console.log(passowrd);
//Tuples -> is a type represents an array with a fixed number of elements, where each element can have a different type. The order of the types in the tuple defination coresponds to the order of the elements in the array. Tuples are useful when you want to group together a fixed number of values of different types into a single entity.
var myTuple = ["hello", 5];
var first = myTuple[0], second = myTuple[1];
console.log(first); // hello
console.log(second); // 5
var products = [1, 2, 3, "hello", "world"];
var games = ["game 1", 20, true];
var name = games[0], price = games[1], isAvailable = games[2];
console.log(name); // game 1
console.log(price); // 20
console.log(isAvailable); // true
//Enums -> is a way to define a set of named constants. Enums are useful when you want to represent a collection of related values that can be used in your code. Enums can be numeric or string-based.
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions["Sunny"] = "Sunny";
    WeatherConditions["Rainy"] = "Rainy";
    WeatherConditions["Cloudy"] = "Cloudy";
    WeatherConditions["Snowy"] = "Snowy";
})(WeatherConditions || (WeatherConditions = {}));
var todayWeather = WeatherConditions.Sunny;
console.log(todayWeather); // Output: Sunny
console.log(WeatherConditions.Rainy); // Output: Rainy
// OOPS -> Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure code. TypeScript supports OOP concepts such as classes, inheritance, encapsulation, and polymorphism. OOP allows you to create reusable and modular code, making it easier to manage and maintain large codebases.
// In TypeScript, you can define classes using the class keyword. A class is a blueprint for creating objects, and it can contain properties (data) and methods (functions) that operate on that data. Classes can also have constructors, which are special methods used to initialize objects when they are created.
//Class Properties Annotations
var Person10 = /** @class */ (function () {
    function Person10(name, age) {
        this.name = name;
        this.age = age;
    }
    Person10.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person10;
}());
var person10 = new Person10("John", 25);
person10.greet(); // Output: Hello, my name is John and I am 25 years old.
//Access Modifiers -> are keywords that control the visibility and accessibility of class members (properties and methods). TypeScript provides three access modifiers: public, private, and protected.
//Public-> members marked as public can be accessed from anywhere, both inside and outside the class. This is the default access modifier if none is specified.
var Person11 = /** @class */ (function () {
    function Person11(name, age) {
        this.name = name;
        this.age = age;
    }
    Person11.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person11;
}());
var person11 = new Person11("John", 25);
person11.greet(); // Output: Hello, my name is John and I am 25 years old.
var Human = /** @class */ (function () {
    function Human(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return Human;
}());
var human = new Human("John", "Doe");
console.log(human.firstname); // Output: John
//Private-> members marked as private can only be accessed from within the class itself. They are not accessible from outside the class or from derived classes. This is useful for encapsulating data and preventing external code from modifying it directly.
var Person12 = /** @class */ (function () {
    function Person12(name, age) {
        this.name = name;
        this.age = age;
    }
    Person12.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person12;
}());
var person12 = new Person12("John", 25);
console.log(person12.name); // Error: Property 'name' is private and only accessible within class 'Person12'.
person12.greet(); // Output: Hello, my name is John and I am 25 years old.
//Protected-> members marked as protected can be accessed from within the class and from derived classes (subclasses). They are not accessible from outside the class hierarchy. This is useful for creating base classes that can be extended by other classes while still protecting certain members.
var Person13 = /** @class */ (function () {
    function Person13(name, age) {
        this.name = name;
        this.age = age;
    }
    Person13.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person13;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old. My student ID is ").concat(this.studentId, "."));
    };
    return Student;
}(Person13));
var student = new Student("John", 25, 12345);
console.log(student.name); // Error: Property 'name' is protected and only accessible within class 'Person13' and its subclasses.
student.greet(); // Output: Hello, my name is John and I am 25 years old. My student ID is 12345
//Getter and Setter -> are special methods that allow you to define custom behavior for accessing and modifying properties of a class. Getters are used to retrieve the value of a property, while setters are used to set the value of a property. This allows you to encapsulate the logic for getting and setting properties, providing better control over how they are accessed and modified.
var Person14 = /** @class */ (function () {
    function Person14(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person14.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person14.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Age cannot be negative.");
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person14;
}());
var person14 = new Person14("John", 25);
console.log(person14.name); // Output: John
person14.name = "Doe";
console.log(person14.name); // Output: Doe
//Inheritance -> is a fundamental concept in object-oriented programming that allows you to create new classes based on existing classes. The new class, called the subclass or derived class, inherits properties and methods from the existing class, called the superclass or base class. This allows you to create a hierarchy of classes and promote code reuse.
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " makes a sound."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " barks."));
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("".concat(this.name, " meows."));
    };
    return Cat;
}(Animal));
var dog = new Dog("Buddy");
var cat = new Cat("Whiskers");
dog.makeSound(); // Output: Buddy barks.
cat.makeSound(); // Output: Whiskers meows.
//Polymorphism -> is a concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass. This enables you to write code that can work with different types of objects in a uniform way, promoting code reuse and flexibility.
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1.prototype.makeSound = function () {
        console.log("Animal makes a sound.");
    };
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog1.prototype.makeSound = function () {
        console.log("Dog barks.");
    };
    return Dog1;
}(Animal1));
var Cat1 = /** @class */ (function (_super) {
    __extends(Cat1, _super);
    function Cat1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat1.prototype.makeSound = function () {
        console.log("Cat meows.");
    };
    return Cat1;
}(Animal1));
function makeAnimalSound(animal) {
    animal.makeSound();
}
var dog1 = new Dog1();
var cat1 = new Cat1();
makeAnimalSound(dog1); // Output: Dog barks.
makeAnimalSound(cat1); // Output: Cat meows.
//Abstract Classes -> are classes that cannot be instantiated directly and are meant to be subclassed. They can contain abstract methods (methods without an implementation) that must be implemented by derived classes. Abstract classes are useful for defining a common interface for a group of related classes while allowing each subclass to provide its own implementation.
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}(Shape));
var rectangle = new Rectangle(5, 10);
var circle = new Circle(5);
console.log("Rectangle Area: ".concat(rectangle.area())); // Output: Rectangle Area: 50
console.log("Circle Area: ".concat(circle.area())); // Output: Circle Area: 78.53981633974483
console.log("Rectangle Perimeter: ".concat(rectangle.perimeter())); // Output: Rectangle Perimeter: 30
console.log("Circle Perimeter: ".concat(circle.perimeter())); // Output: Circle Perimeter: 31.41592653589793
//usage
var exampleEmployee = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("Car started.");
    };
    Car.prototype.stop = function () {
        console.log("Car stopped.");
    };
    return Car;
}());
var myCar = new Car();
myCar.start(); // Output: Car started.
myCar.stop(); // Output: Car stopped.
var computerExample = {
    brand: "Apple",
    model: "MacBook Pro",
    start: function () {
        console.log("Computer started.");
    },
    stop: function () {
        console.log("Computer stopped.");
    }
};
console.log(computerExample.brand); // Output: Apple
console.log(computerExample.model); // Output: MacBook Pro
var movie = {
    name: "Inception",
    rating: 8.8,
    genra: "Sci-Fi"
};
console.log(movie.name); // Output: Inception
console.log(movie.rating); // Output: 8.8
var movie1 = {
    name: "star wars",
    rating: 8.5,
    printMovieInfo: function (name, price, ratings) {
        return "Movie Name: ".concat(name, ", Price: ").concat(price, ", Ratings: ").concat(ratings);
    }
};
var movieInfo = movie1.printMovieInfo("Star Wars", 20, 8.5);
console.log(movieInfo); // Output: Movie Name: Star Wars, Price: 20, Ratings: 8.5
//usage of the extended interface
var myCar1 = {
    brand: "Toyota",
    model: "Camry",
    start: function () {
        console.log("Car started.");
    },
    stop: function () {
        console.log("Car stopped.");
    }
};
myCar1.start(); // Output: Car started.
myCar1.stop(); // Output: Car stopped.
//Generics -> allow you to create reusable components that can work with a variety of types. Generics make it possible to define a function, class, or interface that can operate on different types without losing type safety. This allows you to create more flexible and reusable code while still benefiting from TypeScript's type checking.
//Regular function
var printString = function (x) { return console.log(x); };
var printNumber = function (x) { return console.log(x); };
console.log(printString("Hello")); // Output: Hello
console.log(printNumber(10)); // Output: 10
//Generic function
function printInfo(x) {
    return x;
}
var stringInfo = printInfo("Hello");
var numberInfo = printInfo(10);
var booleanInfo = printInfo(true);
function uniqueDataTypeFunc(item, defaultValue) {
    return [item, defaultValue];
}
var stringData = uniqueDataTypeFunc("Hello", "World");
var numberData = uniqueDataTypeFunc(10, 20);
var booleanData = uniqueDataTypeFunc(true, false);
console.log(stringData); // Output: [ 'Hello', 'World' ]
var dog1 = uniqueDataTypeFunc({ name: "Buddy", bread: "Golden Retriever" });
console.log(dog1); // Output: [ { name: 'Buddy', bread: 'Golden Retriever' }, { name: 'Max', bread: 'Labrador' } ]
function getRandomKey(obj) {
    var keys = Object.keys(obj);
    var randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}
var stringObject = {
    a: "Hello",
    b: "World",
    c: "TypeScript",
};
getRandomKey(stringObject); // Output: { key: 'b', value: 'World' }
var numberObject = {
    a: 1,
    b: 2,
    c: 3,
};
getRandomKey(numberObject); // Output: { key: 'a', value: 1 }
function filterArray(array, condition) {
    return array.filter(function (item) { return condition(item); });
}
var numbersArray = [1, 2, 3, 4, 5];
var evenNumbers = filterArray(numbersArray, function (num) { return num % 2 === 0; });
var oddNumbers = filterArray(numbersArray, function (num) { return num % 2 !== 0; });
var stringsArray = ["apple", "banana", "cherry"];
var filteredStrings = filterArray(stringsArray, function (str) { return str.startsWith("a"); });
var fruits = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Grapes", color: "Purple" },
];
var redFruits = filterArray(fruits, function (fruit) { return fruit.color === "Red"; });
var yellowFruits = filterArray(fruits, function (fruit) { return fruit.color === "Yellow"; });
console.log(redFruits); // Output: [ { name: 'Apple', color: 'Red' } ]
console.log(yellowFruits); // Output: [ { name: 'Banana', color: 'Yellow' } ]
function reversePair(pair) {
    return [pair[1], pair[0]];
}
var pair1 = [1, "Hello"];
var reversedPair1 = reversePair(pair1);
var pair2 = ["TypeScript", true];
var reversedPair2 = reversePair(pair2);
console.log(reversedPair1); // Output: [ 'Hello', 1 ]
console.log(reversedPair2); // Output: [ true, 'TypeScript' ]
var Box = /** @class */ (function () {
    function Box(initalContent) {
        this.content = initalContent;
    }
    Box.prototype.getContent = function () {
        return this.content;
    };
    Box.prototype.setContent = function (newContent) {
        this.content = newContent;
    };
    return Box;
}());
var stringBox = new Box("Hello");
var numberBox = new Box(10);
var booleanBox = new Box(true);
var objectBox = new Box({ name: "John", age: 25 });
var arrayBox = new Box([1, 2, 3, 4, 5]);
var tupleBox = new Box(["Hello", 10]);
console.log(stringBox.getContent()); // Output: Hello
console.log(numberBox.getContent()); // Output: 10
console.log(booleanBox.getContent()); // Output: true
//Example function with type guards
function exampleFunction(value) {
    //type guard using typeof
    if (typeof value === "string") {
        //within this block, typescript knows that value is a string
        console.log("String value: ".concat(value.toUpperCase));
    }
    else if (typeof value === "number") {
        //within this block, typescript knows that value is a number
        console.log("Number value: ".concat(value.toFixed(2)));
    }
    else {
        //this block will never be reached because value can only be a string or number
        console.log("Invalid type");
    }
}
exampleFunction("Hello"); // Output: String value: HELLO
exampleFunction(10); // Output: Number value: 10.00 
//instaceof Operator
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log;
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("Meow");
    };
    return Cat;
}());
//example function with instanceof operator type guard
function animalSound(animal) {
    if (animal instanceof Dog) {
        // within this block, typescript knows that animal is a Dog
        animal.bark();
    }
    else if (animal instanceof Cat) {
        // within this block, typescript knows that animal is a Cat
        animal.meow();
    }
    else {
        // this block will never be reached because animal can only be a Dog or Cat
        console.log("Invalid animal");
    }
}
var dog = new Dog();
var cat = new Cat();
animalSound(dog); // Output: Woof
animalSound(cat); // Output: Meow
var manager = {
    id: 1,
    name: "John",
    department: "Sales",
    role: "Manager"
};
console.log(manager.id); // Output: 1
console.log(manager.name); // Output: John
console.log(manager.department); // Output: Sales
console.log(manager.role); // Output: Manager
