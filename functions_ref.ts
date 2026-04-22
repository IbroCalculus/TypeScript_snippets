// ========== Basic Functions ==========
function sayHello(): void {
    console.log("Hello to you");
};

function fails(): never {
    throw new Error("This function always throws an error");
}

function greet(name: string): string {
    return `Hello, ${name}!`;
}

function add(x: number, y: number): number {
    return x + y;
}

// ========== Optional Parameters ==========
function printName(firstname: string, lastname?: string): string {
    if (lastname) {
        return `${firstname} ${lastname}`;
    } else {
        return firstname;
    }
}

// ========== Default Parameters ==========
function getAge(name: string, age: number = 21): string {
    return `${name} is ${age} years old.`;
}

// ========== Rest Parameters () ==========
function multiplyNumbers(...numbers: number[]): number {
    let result = 1;
    for (let number of numbers) {
        result *= number;
    }
    return result;
}

// ========== Arrow Functions ==========
const multiply = (a: number, b: number): number => a * b;
console.log(multiply(3, 4)); // Output: 12


// ========== Function Overloads ==========
function reverse(input: string): string;
function reverse(input: number[]): number[];
function reverse(input: string | number[]): string | number[] {
  if (typeof input === "string") {
    return input.split("").reverse().join("");
  } else {
    return input.slice().reverse();
  }
}

console.log(reverse("hello")); // Output: "olleh"
console.log(reverse([1, 2, 3])); // Output: [3, 2, 1]

// ========== Anonymous Functions ==========
// Anonymous functions are functions without a name, often used as callbacks or assigned to variables.
const sayHello2 = function (name: string): void {
    console.log(`Hello, ${name}!`);
  };  
  sayHello2("Alice"); // Output: "Hello, Alice!"

// ========== Callback Functions ==========
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
function greetUser(name: string, callback: (name: string) => void) {
    callback(name);
  }
  
  greetUser("Alice", (name) => {
    console.log(`Hello, ${name}!`);
  }); // Output: "Hello, Alice!"

//   -----------------------
  function processUserInput(input: string, callback: (result: string) => void): void {
    const processed = input.trim().toUpperCase();
    callback(processed);
  }
  
  processUserInput("  hello world  ", result => {
    console.log(result); // Output: "HELLO WORLD"
  });

//   =========== Generic Functions ==========
// Generic functions are functions that can work with a range of types rather than a single one.

function reverseArray<T>(array: T[]): T[] {
    return array.slice().reverse();
}

let numbers3 = [1, 2, 3, 4, 5];
let reversedNumbers = reverseArray(numbers3); // Type of reversedNumbers is number[]
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

let strings = ["hello", "world", "TypeScript"];
let reversedStrings = reverseArray(strings); // Type of reversedStrings is string[]
