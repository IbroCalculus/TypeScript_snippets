// NB: similarly, use interface User {id: string; name: string; email?: string; createdAt: Date;} to define the same type
// Interface is mostly used for objects, while type for single fields. But they can be used interchangeably for objects.

// type User = {id: string; name: string; email?: string; createdAt: Date; sayHello(): void;}
interface User {
  id: string; // Required
  name: string; // Required
  email?: string; // Optional
  readonly createdAt: Date; // Cannot be reassigned. Read only
  sayHello(): void;
};

const user: User = {
  id: "1",
  name: "John Doe",
  createdAt: new Date(),
  sayHello() {
    console.log(`Hello, ${this.name}`);
  },
};

user.name = "John Smith";

console.log(user);

// ----------------- E.g 2 --------------------------

type IDFieldTypes = string | number; 

const userId: IDFieldTypes = "abc123"; // Valid
const productId: IDFieldTypes = 456; // Valid