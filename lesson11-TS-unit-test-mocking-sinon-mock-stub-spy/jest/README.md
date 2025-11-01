# Jest <https://jestjs.io/>

## Jest install

```
npm i -D jest ts-jest typescript ts-node globals @jest/globals cross-env @types/jest
```

## Change package.json file

```
"type": "module",
"scripts": {
    "debug:nix": "cross-env NODE_OPTIONS='$NODE_OPTIONS --experimental-vm-modules' jest",
    "debug:win": "set NODE_OPTIONS=%NODE_OPTIONS% --experimental-vm-modules && jest",
    "test": "cross-env NODE_OPTIONS=--experimental-vm-modules jest"
  },
```

## Add to tsconfig.json file data yet this

```
{
    "compilerOptions": {
        "target": "ESNext",
        "lib": ["ESNext", "DOM"],
        "module": "ESNext",
    },
    "ts-node": {
        "esm": true,
        "experimentalSpecifierResolution": "node"
    }
}
```

## Create jest.config.ts file in module level

```
touch jest.config.ts
```

### Copy data to jest.config.ts file

```
import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
    extensionsToTreatAsEsm: ['.ts'],
    verbose: true,
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { useESM: true }]
    },
    testPathIgnorePatterns: ['./dist'],
    clearMocks: true,
    coverageProvider: 'v8',
    testMatch: ['**/specs/**/*.[t]s?(x)', '**/?(*.)+(spec|test).[t]s?(x)']
};

export default config;
```

## Tun test with

```
npm run test
npm run debug:win
npx jest
```

## Hooks set

```
mkdir hooks
touch hooks/jest-global-setup.ts
```

### Add data to jest-global-setup.ts

```
import type { Config } from '@jest/types';

/**
 * Global setup runs once before all test suites
 * Use this for one-time setup operations like:
 * - Starting test databases
 * - Initializing test servers
 * - Setting global environment variables
 * - Creating necessary test directories
 */
export default function globalSetup(globalConfig: Config.GlobalConfig, projectConfig?: Config.ProjectConfig): void {
    console.log('🚀 Running Jest global setup...');
    console.log(`Root directory: ${globalConfig.rootDir}`);
    console.log(`Test environment: ${projectConfig?.testEnvironment || 'default'}`);

    // Add your global setup logic here
    // Example: startTestServer();
    // Example: process.env.TEST_MODE = 'true';

    console.log('✅ Global setup completed');
}
```

## Chai install

```
npm i -D chai @types/expect @types/chai
```

### Use import
