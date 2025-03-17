/*
======== What is tsconfig.json? ========
The tsconfig.json file is a configuration file used by the TypeScript compiler (tsc) to specify how your TypeScript project should be compiled. It allows you to control various aspects of the compilation process, such as which files to include, the output directory, and the behavior of type checking.

When you run the TypeScript compiler (tsc), it looks for a tsconfig.json file in the current directory (or its parent directories). If found, the compiler uses the settings defined in this file to determine how to compile your TypeScript code.

----------- Creating a tsconfig.json File -----------
To create a tsconfig.json file, you can run the following command in your project directory:
    > tsc --init


----------- Usage -----------
Within your project directory, create two folders: "src" (for TypeScript files) and "dist" (for compiled JavaScript files). Then, create a tsconfig.json file with the following content:
NB: "src" and "dist" folders can be named anything, but these are common conventions.

- Within tsconfig.json, uncomment and set:
        "outDir": "./dist",
        "rootDir": "./src",

- Create a simple TypeScript file in the "src" folder
-To compile your TypeScript code, run the following command in your project directory:

    > tsc   (NB: use > tsc --watch instead to watch for changes in the .ts and recompile the .js automatically when files are saved. Ctrl+C to end)

     - This will compile all TypeScript files in your project (including subdirectories) into JavaScript files in the "dist" directory.
     - The "outDir" option in the tsconfig.json file can be used to specify a different output directory.

     - similarly, you can watch for nodejs changes by running: > node --watch dist/{file_name}.js, ie: > node --watch dist/index.js

 */