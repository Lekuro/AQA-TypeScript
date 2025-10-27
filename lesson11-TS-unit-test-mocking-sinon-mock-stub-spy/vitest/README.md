# Vitest <https://vitest.dev/guide/>

## Install vitest and chai

```
npm install -D vitest
npm install -D chai
npm i -D @typescript-eslint/parser @types/chai
```

## Change package.json file

```
  "scripts": {
    "test": "npx eslint . && vitest",
    "lint": "eslint src/",
    "lint:fix": "npm run lint -- --fix",
    "build": "npm run lint && tsc --build"
  },
```

## Create vitest.config.ts file on module level

```
touch vitest.config.ts
```

## Add data to vitest.config.ts file

```
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        exclude: [],
        include: ['./tests/**/?(*.)+(spec|test).[t]s?(x)'],
        setupFiles: './src/hooks/vitest-global-setup.ts'
    }
});
```

## tsconfig.json

```
{
  "exclude": [
    "eslint.config.mjs",
    "./build/**/*",
    "./node_modules/**/*"
  ],
  "compilerOptions": {
    "baseUrl": "./",
    "target": "ES6",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "lib": ["es6", "DOM"],
    "module": "commonjs",                                /* Specify what module code is generated. */
    "rootDir": ".",                                  /* Check side effect imports. */
    "resolveJsonModule": true,
    "allowJs": true,                                 /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
    "outDir": "build",                  /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
    "moduleResolution": "node",
    "experimentalDecorators": true,

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    //"noImplicitAny": true,                               /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    "skipLibCheck": true,                                 /* Skip type checking all .d.ts files. */
    "typeRoots": [
      "node_modules/@types"
    ]
  }
}
```

## Run test by

```
npm run test
```
