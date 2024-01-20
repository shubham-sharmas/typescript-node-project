# Node.js project with TypeScript, Express.js, ESLint, Prettier, ts-node, nodemon and package.json environment specific scripts

## #[typescript-node-project](https://shubhamsharmas.hashnode.dev/a-guide-on-setting-up-a-nodejs-project-with-typescript-expressjs-eslint-prettier-ts-node-nodemon-and-packagejson-environment-specific-scripts "https://shubhamsharmas.hashnode.dev/a-guide-on-setting-up-a-nodejs-project-with-typescript-expressjs-eslint-prettier-ts-node-nodemon-and-packagejson-environment-specific-scripts")

Welcome to the TypeScript Node.js project! This repository provides complete guide on setting-up a Node.js project with TypeScript, Express.js, ESLint, Prettier, ts-node, nodemon, and environment-specific package.json scripts for local, development, QA, and production.

## Technologies & Tools Used

1. **Node.js**: The project is built using Node.js, allowing users to leverage the benefits of server-side JavaScript.

2. **TypeScript Integration**: The project is written in TypeScript, providing static typing and improved code quality.

3. **Express.js Framework**: Utilizes the Express.js framework for building robust and scalable web applications and APIs.

4. **ESLint Integration**: Incorporates ESLint for static code analysis to identify and fix problematic patterns in the code.

5. **Prettier Integration**: Includes Prettier for code formatting, ensuring consistent and aesthetically pleasing code.

6. **Environment Variables with dotenv**: Uses the `dotenv` package to manage environment variables, making it easy to configure and deploy the application across different environments.

7. **Security with Helmet**: Implements security practices by using the Helmet middleware to secure Express.js apps by setting various HTTP headers.

8. **CORS Support**: Integrates the `cors` package to handle Cross-Origin Resource Sharing, allowing controlled access to resources from different domains.

9. **Type Definitions**: Includes TypeScript type definitions for key packages such as `cors`, `express`, `helmet`, and `node`.

10. **Development Dependencies for TypeScript**: Dev dependencies like `@types/cors`, `@types/express`, `@types/helmet`, `@types/node` provide TypeScript type definitions for development.

11. **Development Server with Nodemon**: Uses Nodemon for automatic server restarts during development, making the development process more efficient.

12. **TypeScript Execution with ts-node**: Integrates `ts-node` for running TypeScript files directly, eliminating the need for compiling before execution during development.

13. **TypeScript Compiler (tsc)**: Includes the TypeScript compiler (`typescript` package) to transpile TypeScript code into JavaScript for deployment.

14. **Linting and Formatting Scripts**: Provides environment-specific scripts in the `package.json` for linting and formatting code using ESLint and Prettier.

## Project Setup

Follow the steps below to set up the project on your local system:

1. Clone the Github Repo: `git clone https://github.com/shubham-sharmas/typescript-node-project.git`
2. Install dependencies: `npm i`
3. Start dev server: `npm run dev`
4. Open URL: `http://localhost:3000/`

### Package.json start scripts

`package.json` file contains different start scripts for different environment, use as per your requirement:

```
"local": "NODE_ENV=local nodemon",
```

```
"dev": "NODE_ENV=development npm run build:start",
```

```
"qa": "NODE_ENV=qa npm run build:start",
```

```
"prod": "NODE_ENV=production npm run build:start"
```

#### To add logging on the top of this repo, check the branch: [feature/pino-logging](https://github.com/shubham-sharmas/typescript-node-project/tree/feature/pino-logging) and [typescript-node-project-with-logging](https://shubhamsharmas.hashnode.dev/setting-up-logging-in-your-nodejs-typescript-app-a-quick-start-guide-with-typescript-node-project-and-pino-logging-libraryintegrated-with-logrotate) for details.

## Check the link for complete project details and code walk-through: [node.js-typescript-project-setup](https://shubhamsharmas.hashnode.dev/a-guide-on-setting-up-a-nodejs-project-with-typescript-expressjs-eslint-prettier-ts-node-nodemon-and-packagejson-environment-specific-scripts)
