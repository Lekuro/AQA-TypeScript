# Vitest <https://vitest.dev/guide/>

## Install vitest

```
npm install -D vitest
```

## Change package.json file

```
 "scripts": {
    "test": "vitest"
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
        include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
        exclude: ['**/node_modules/**', '**/.git/**']
    }
});
```

## Run test by

```
npm run test
```
