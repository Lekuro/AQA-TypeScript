## Mocha <https://mochajs.org/>

### mocha install

```
npm i -D mocha ts-mocha typescript tsx ts-node globals @types/mocha
```

### chai install

```
npm i -D chai @types/expect @types/chai
```

### sinon install

```
npm i -D ts-sinon
```
### install faker
```
npm i -D --save-dev @faker-js/faker
```

### Create .mocharc.json file

```
touch .mocharc.json
```

#### Copy data to .mocharc.json file

```
{
    "extension": "ts",
    "spec": "specs/**/*.spec.ts",
    "require": ["tsx", "./hooks/mocha-global-setup.hook.ts"],
    "retries": 2,
    "timeout": 120000
}
```

### Create folder and file for keeping tests

```
mkdir specs
touch specs/name.spec.ts
```

### Run test for "require": ["tsx"], in .mocharc.json file

```
npx mocha
npx mocha path/to/your/file.spec.ts
npx mocha specs/filename.spec.ts
npx mocha --specs "specs/filename.spec.ts"
npx mocha --grep "name of test to filter by it"
```

### Change package.json file, line test in script section

```
"scripts": {
    "test": "mocha"
  },
```

#### Run tests with npm

```
npm run test
```

### Create folder and file for hooks to use "require": ["tsx", "./hooks/mocha-global-setup.hook.ts"],

```
mkdir hooks
touch hooks/mocha-global-setup.hook.ts
```

#### Copy data to the hook file like

```
import { initGlobal } from 'global';

exports.mochaGlobalSetup = function () {
    console.log('global hook');
    initGlobal();
};

exports.mochaGlobalTeardown = function () {
    console.log('global teardown');
};
```

#### Add global.ts file on module level

```
touch global.ts
```

##### Add data to global.ts file like

```
declare global {
    var age: number;
}

export function initGlobal(): void {
    globalThis.age = 18;
}
```
