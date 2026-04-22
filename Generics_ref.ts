// ========= Generic function =========
function identity<T>(arg: T): T {
    return arg;
  }
  
  const output1 = identity<string>("Hello"); // Output: "Hello" (type is string)
  const output2 = identity<number>(42);      // Output: 42 (type is number)


// ======== Generic function with two parameters ========

function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const output3 = pair<string, number>("Hello", 42); // Output: ["Hello", 42]
const output4 = pair<number, string>(42, "Hello"); // Output: [42, "Hello"]

// ======== Generic funtion with two parameters returning a string ========

function describePair<T, U>(first: T, second: U): string {
    return `First: ${first}, Second: ${second}`;
}

const output5 = describePair<string, number>("Hello", 42); // Output: "First: Hello, Second: 42"
const output6 = describePair<number, string>(42, "Hello"); // Output: "First: 42, Second: Hello"



// ========= Generic class =========

class PersonG<TName, TAge> {
    public name: TName;
    private age: TAge;

    constructor(name: TName, age: TAge) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Usage examples:
let person1 = new PersonG<string, number>("Alice", 25);
person1.greet(); // Output: "Hello, my name is Alice and I am 25 years old."

let person2 = new PersonG<string, string>("Bob", "thirty");
person2.greet(); // Output: "Hello, my name is Bob and I am thirty years old."

let person3 = new PersonG<number, number>(123, 25);
person3.greet(); // Output: "Hello, my name is 123 and I am 25 years old."