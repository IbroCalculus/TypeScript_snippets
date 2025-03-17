
let names: string[] = ["Alice", "Bob", "Charlie"]; // Array of strings
let names2: Array<string> = ["Alice", "Bob", "Charlie"]; // Array of strings
let mixed1: any[] = ["Alice", "Bob", "Charlie", 42, true]; // Array of any type
let mixed2 = [1, "two", true]; // Inferred as (number | string | boolean)[]

// --- Mixied arrays ---
let mixedArray: (string | number)[] = ["Hello", 42, "World", 100];

// --- Array of objects ---
let employees: { name: string; age: number }[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

//  ---- tuples ----
// A tuple is a special type of array where the length and types of elements are fixed. Tuples are useful when you need an array with a specific structure.
let employee: [string, number] = ["Alice", 30];

// --- Array methods ---
let firstEmployee = employees[0]; // Accessing the first element
let employeeCount = employees.length; // Getting the number of elements

// --- Array push, pop, and shift methods ---
let fruits: string[] = ["Apple", "Banana"];
fruits.push("Orange"); // Add an element to the end
let lastFruit = fruits.pop(); // Remove the last element
let firstFruit = fruits.shift(); // Remove the first element


// ---- Readonly arrays (Cannot modify after initialization) ---
let readOnlyArray: readonly number[] = [1, 2, 3, 4];
let readonlyArray2: readonly (number | string | object)[] = ["Hello", "World", "100"];
let readonlyArray3: ReadonlyArray<string> = ["Hello", "World"];
let readonlyArray4: ReadonlyArray<string | number> = ["Hello", 42, "World", 100];

// ----- Multi-dimensional arrays ---
let multiDimArray: number[][] = [[1, 2], [3, 4], [5, 6]];

// ----- Array destructuring ---
let [first, second, third] = names;
console.log(first); // Output: Alice

// ----- Array spread operator ---
let numbers1: number[] = [1, 2, 3];
let numbers2: number[] = [4, 5, 6];
let allNumbers: number[] = [...numbers1, ...numbers2];

// ----- Array iteration ---
names.forEach(name => {
    console.log(name);
});

// ----- Array filtering ---
let filteredNames: string[] = names.filter(name => name.startsWith("A"));
console.log(filteredNames); // Output: ["Alice"]

// ----- Array methods ---
// TypeScript supports all standard JavaScript array methods, such as push, pop, map, filter, etc.

    let numbers: number[] = [1, 2, 3, 4];

// --- Using the map method ---
    let doubledNumbers: number[] = numbers.map(num => num * 2);
    console.log(doubledNumbers); // Output: [2, 4, 6, 8]

// --- Using the filter method ---
    let evenNumbers: number[] = numbers.filter(num => num % 2 === 0);
    console.log(evenNumbers); // Output: [2, 4]