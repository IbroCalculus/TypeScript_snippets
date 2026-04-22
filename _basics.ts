// CHECK: _installation.ts
// CHECK: tsconfig_ref.ts

/*
What is TypeScript?
    TypeScript is a superset of JavaScript, meaning it extends the capabilities of JavaScript by adding features such as static typing , which helps developers catch errors during development rather than at runtime. It was created and is maintained by Microsoft, and it compiles down to plain JavaScript, so it can run in any environment that supports JavaScript.

In simpler terms:
    TypeScript adds extra tools and features to JavaScript.
    It allows you to write code with type annotations (e.g., specifying that a variable should be a string, number, or object).
    The TypeScript compiler (tsc) converts your TypeScript code into regular JavaScript, which can then be executed in browsers or Node.js.
    
Why Use TypeScript?
    Static Typing : With TypeScript, you can define types for variables, function parameters, and return values. This helps catch errors early in the development process.
    Improved Tooling : Since TypeScript provides type information, editors like Visual Studio Code can offer better autocompletion, refactoring, and error checking.
    Scalability : As projects grow larger, TypeScript's structure and type system help maintain code quality and make it easier to understand and modify.
    Modern Features : TypeScript includes many modern JavaScript features (from ES6 and beyond) and ensures compatibility with older environments by transpiling them into older versions of JavaScript.
 */


/* =============== Getting Started ====================
 After making sure TypeScript is installed (check: _installation.ts), you can create a new TypeScript file in src folder, by saving it with a .ts extension.
    
        // hello.ts
        console.log("Hello, World!");

------------- Executing the code -------------
This can be done in three (3) ways:
NB: Method 1 is not recommended, it works only on .ts files whose content are javascript and not js. ie; do not use types.

    1. Using node to execute the .ts:   cmd > node hello.ts ( from within src folder)
    2. Using the TypeScript compiler (tsc) to compile the TypeScript code into JavaScript, and then running the resulting JavaScript code.
    3. running using npm run dev which will create the outputs within dist folder
        
----------- Method 2: Using the TypeScript Compiler (tsc) --------------
To compile your TypeScript code into JavaScript, you can use the TypeScript compiler (tsc). From the command line, navigate to the directory containing your TypeScript file (src) and run:   

        tsc hello.ts
        
After running the tsc command, you should see a new file named hello.js in the same directory. This file contains the same JavaScript code as your TypeScript file, but without the type annotations added.

Now, you can run your JavaScript code by opening hello.js in a web browser or by using Node.js:
        node hello.js       ( within the .js file directory, ie dist)

----------- Method 2: Using npm run dev --------------
If you have set up your package.json with a build script as mentioned in _installation.ts, from the project root directory, you can simply run:
        npm run dev

This will watch for changes in your TypeScript files and automatically compile them into JavaScript files in the dist folder whenever you save your .ts files. You can then run the compiled JavaScript files from the dist folder using Node.js or by opening them in a web browser.


*/
