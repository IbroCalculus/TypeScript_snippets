/*
TypeScript can be installed in 2 ways:
    1. Globally on your machine
    2. Locally (per project)

=============== Global installation ====================
    - You need to install Node.js and npm before you can install TypeScript.
    - In cmd; > npm install -g typescript
    - Verify installation: > tsc --version

=============== Project installation (Recommended) ====================
    - In cmd; > npm init -y  (to create a package.json file)
    - > npm install typescript --save-dev   ( This installs TypeScript inside your project (node_modules) ).    
    - Verify installation: > npx tsc --version

    - Initialize a TypeScript config file:  > npx tsc --init    ( This creates a tsconfig.json file. CHECK: tsconfig_ref.ts to configure)

    - Configure package.json to add a build script:
        "scripts": {
            "build": "tsc -p tsconfig.json",
            "dev": "tsc -w -p tsconfig.json"
        }

 */