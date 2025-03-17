class Person {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person = new Person("Alice", 25);
person.greet(); // Output: "Hello, my name is Alice and I am 25 years old."


//   ========= Inheritance =========

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Woof! Woof!");
    }
}

const dog = new Dog("Rex");
dog.bark();   // Output: "Woof! Woof!"
dog.move(10); // Output: "Rex moved 10 meters."