/* 

---------------------------- user.ts ----------------------------

export interface User {
  id: number;
  name: string;
  email: string;
}

export function createUser(
  id: number,
  name: string,
  email: string
): User {
  return { id, name, email };
}

---------------------------- main.ts ----------------------------  

import { createUser, type User } from "./user.js";

const user: User = createUser(
  1,
  "Ibrahim",
  "ibrahim@example.com"
);

console.log(user);


-------------------------- Named Exports --------------------------
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}


--------------------------- Named Imports --------------------------
// main.ts
import { add, subtract } from "./math.js";




--------------------------- Default Exports --------------------------
// calculator.ts
export default class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}


--------------------------- Default Imports --------------------------
// main.ts
import Calculator from "./calculator.js";




*/