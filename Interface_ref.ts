// Similar to type in objects.ts

// type User1 = {
interface User1 {
  id: string; // Required
  name: string; // Required
  email?: string; // Optional
  readonly createdAt: Date; // Cannot be reassigned. Read only
  sayHello(): void;
};

const user1: User1 = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  createdAt: new Date(),
  sayHello() {
    console.log(`Hello, ${this.name}`);
  },

};

user.name = "John Smith";

console.log(user);

// -------------------------------------------

interface Animal {
    name: string;
    move(distance: number): void;
  }
  
  class Dog implements Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    move(distance: number): void {
      console.log(`${this.name} moved ${distance} meters.`);
    }
  }
  
  const dog: Animal = new Dog("Rex");
  dog.move(10); // Output: "Rex moved 10 meters."