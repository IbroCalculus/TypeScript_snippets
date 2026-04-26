let firstname: string = "Alice"; 
// String type. Same as let fName = "Alice", because it supports type inference. fName cannot be reassigned to a non string value.

// Similarly:
let age = 25; 
let isAdmin: boolean = true;
let avalue: string | number = "Hello";                  // Union type: can be either string or number
let ids: number[] = [1, 2, 3, 4];                       // Array of numbers
let users: string[] = ["Alice", "Bob", "Charlie"];      // Array of strings

age = 56;
// age = "56";  // Error: Type '"56"' is not assignable to type 'number'.

console.log(`Name: ${firstname}, Age: ${age}, Admin: ${isAdmin}`);


// ========== Any type (Not recommended)  ==========
/*
The any type tells TypeScript that a variable can hold any type of value (e.g., string, number, object, array, etc.). This means you can perform any operation on it without type-checking. It is useful when you don't know the type of the value that will be stored in a variable.
 */

let value: any;

value = 42; // Allowed
value = "Hello"; // Allowed
value = true; // Allowed
value = [1, 2, 3]; // Allowed
value = { name: "Alice" }; // Allowed

// ------- Example: Working with Dynamic Data -------
function handleData(data: any): void {
    if (typeof data === "string") {
      console.log("It's a string:", data.toUpperCase());
    } else if (Array.isArray(data)) {
      console.log("It's an array:", data.length);
    } else {
      console.log("Unknown type");
    }
  }
  
  handleData("hello"); // Output: "It's a string: HELLO"
  handleData([1, 2, 3]); // Output: "It's an array: 3"
  handleData(42); // Output: "Unknown type"