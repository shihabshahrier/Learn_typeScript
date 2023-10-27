# Installing Node.js and TypeScript

This readme provides instructions on how to install Node.js and TypeScript on your computer and how to run a TypeScript project.

## Table of Contents

1. [Installing Node.js](#installing-nodejs)
2. [Installing TypeScript](#installing-typescript)
3. [Running a TypeScript Project](#running-a-typescript-project)
4. [Additional Resources](#additional-resources)

---

## 1. Installing Node.js

Node.js is a JavaScript runtime that allows you to execute JavaScript code on the server side. TypeScript is a superset of JavaScript, and it requires Node.js to run. To install Node.js, follow these steps:

### For Windows:

1. Visit the official Node.js website: https://nodejs.org/
2. Download the "LTS" (Long Term Support) version for Windows.
3. Run the installer and follow the installation wizard.
4. After installation, open a Command Prompt or PowerShell and type `node -v` to verify that Node.js is installed.
5. Type `npm -v` to verify that the Node Package Manager (npm) is also installed.

### For macOS:

1. You can install Node.js and npm using [Homebrew](https://brew.sh/), a package manager for macOS.

   ```bash
   brew install node
   ```

2. After installation, open a terminal and type `node -v` and `npm -v` to verify that Node.js and npm are installed.

### For Linux (Ubuntu/Debian):

1. Open a terminal and run the following commands:

   ```bash
   curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. After installation, open a terminal and type `node -v` and `npm -v` to verify that Node.js and npm are installed.

## 2. Installing TypeScript

Once Node.js is installed, you can install TypeScript globally using npm. To install TypeScript, open your command prompt or terminal and run the following command:

```bash
npm install -g typescript
```

To verify the installation, run:

```bash
tsc -v
```

This command should print the TypeScript version.

## 3. Running a TypeScript Project

To run a TypeScript project, follow these steps:

1. Create a new directory for your TypeScript project (if you haven't already):

   ```bash
   mkdir my-ts-project
   cd my-ts-project
   ```

2. Create a TypeScript file, e.g., `app.ts`, and write your TypeScript code in it.

3. Compile your TypeScript code into JavaScript by running the TypeScript Compiler (tsc):

   ```bash
   tsc app.ts
   ```

   This will generate an `app.js` file in the same directory.

4. Now, you can run your JavaScript code using Node.js:

   ```bash
   node app.js
   ```

   This will execute your TypeScript code.

## 4. Additional Resources

- [Node.js Official Documentation](https://nodejs.org/en/docs/)
- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)

Congratulations! You have successfully installed Node.js and TypeScript and learned how to run a TypeScript project. You can now start building your TypeScript applications.