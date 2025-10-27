# TypeScript

### First steps

```
git checkout -b 10-TS-unit-test-frameworks-mocha-jest-vitest-jasmine
mkdir lesson10-TS-unit-test-frameworks-mocha-jest-vitest-jasmine
cd lesson10-TS-unit-test-frameworks-mocha-jest-vitest-jasmine
touch README.md
mkdir mocha
cd mocha
```

## Init TypeScript project. Type commonjs

```
npm init
```

#### If you copied package.json from previous project

```
npm i
```

### Enable TypeScript and get file package-lock.json and tsconfig.json

```
npm install typescript --save-dev
npx tsc --init
```

### Copy data to tsconfig.json

```
{
  "include": [
    "**/*"
  ],
  "exclude": [
    "eslint.config.mjs",
    "./build/**/*",
    "./node_modules/**/*"
  ],
  "compilerOptions": {
    "baseUrl": "./",
    "target": "ES6",
    "lib": ["es6", "DOM"],
    "module": "commonjs",
    "rootDir": ".",
    "resolveJsonModule": true,
    "allowJs": true,
    "outDir": "build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "strict": true,
    "skipLibCheck": true,
    "typeRoots": [
      "node_modules/@types"
    ]
  }
}
```

### install necessary package as ESLint (installed in VSCode)

```
npm i -D typescript ts-node eslint typescript-eslint @eslint/js @typescript-eslint/eslint-plugin @stylistic/eslint-plugin @stylistic/eslint-plugin-ts eslint-plugin-prettier eslint-plugin-unicorn prettier globals
```

### Create eslint.config.mjs file and copy data to it.

```
touch eslint.config.mjs
```

### Create .prettierrc file and copy data to it.

```
touch .prettierrc
```

### Create .gitignore file

```
touch .gitignore
echo 'node_modules/' > .gitignore
echo 'build/' >> .gitignore
echo '.vscode/' >> .gitignore
echo '.idea/' >> .gitignore
echo '**/*.js' >> .gitignore
```

### Check as ESLint work add code.ts file

```
npx eslint .
```

## Run TypeScript code

```
npx ts-node ./scr/code.ts
```

### Classical method with compilation in js

```
npx tsc
npx tsc ./src/code.ts
node ./build/<file>.js
node ./src/code.js
```

###### Some abbreviation mentioned

POC - proof of concept
MCP - Model Context Protocol
LLM - Large Language Model
TDD - Test Driven Development - tests are written before the code
BDD - Behavior-Driven Development Gherkin ???
BDD - might mean Behavior-Driven Development (керована поведінкою розробка), Binary Decision Diagram (бінарна діаграма рішень), body dysmorphic disorder (дисморфофобія) або binary-to-decimal decoder (двоєчно-десятковий декодер) залежно від контексту. В контексті розробки програмного забезпечення BDD — це методологія, що фокусується на поведінці системи з точки зору користувача, описуючи функціональність на зрозумілій мові.
AAA - Arrange, Act, Assert - structure of the unit test
Given, When, Then - structure of the unit test
"Given" is used to set up the initial state or context for the test scenario.
"When" is used to describe the action or event that is being tested.
"Then" is used to describe the expected outcome or result of the action or event.
