/*
A type alias is essentially a name given to a type. It allows you to define a custom type that can be reused throughout your code. You define a type alias using the type keyword. Here's an example: 

type MyType = string | number | boolean;

// Now you can use MyType in your code as follows:
let value: MyType = "Hello";
value = 10;
value = true;
// value = "World";  // Error: Type '"World"' is not assignable to type 'MyType'. This ensures that only the allowed types are assigned to the variable.
*/

type ID = string | number;
let userId: ID = "user123";
userId = 456; // Valid because ID is a union of string and number

// ======= Using Type Aliases with Objects ============
type UserType = {
    id: number;
    username: string;
  };
  
  const user1: UserType = { id: 1, username: "alice" };
  console.log(user.username); // Output: "alice"

//   ==========  Union Types with Type Aliases ============
// Type aliases are especially useful for defining union types (types that can be one of several possibilities).

type Status = "loading" | "success" | "error";

function fetchData(status: Status): void {
  console.log(`Data fetch status: ${status}`);
}

fetchData("loading");   // Valid
fetchData("success");   // Valid
fetchData("unknown");   // Error: "unknown" is not assignable to type 'Status'
