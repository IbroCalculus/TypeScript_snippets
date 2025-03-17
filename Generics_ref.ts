// ========= Generic function =========
function identity<T>(arg: T): T {
    return arg;
  }
  
  const output1 = identity<string>("Hello"); // Output: "Hello" (type is string)
  const output2 = identity<number>(42);      // Output: 42 (type is number)


// ========= Generic class =========