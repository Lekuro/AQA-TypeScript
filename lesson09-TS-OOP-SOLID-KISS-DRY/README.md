# TypeScript

### First steps

```
git checkout -b 09-OOP-SOLID-KISS-DRY
mkdir lesson09-OOP-SOLID-KISS-DRY
cd lesson09-OOP-SOLID-KISS-DRY
touch README.md
mkdir src
```

## Init TypeScript project. Type commonjs

```
npm init
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
