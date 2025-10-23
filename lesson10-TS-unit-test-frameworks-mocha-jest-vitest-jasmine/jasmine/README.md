# Jasmine <https://jasmine.github.io/pages/getting_started.html>

## install jasmine

```
npm install --save-dev jasmine
npm i --save-dev @types/jasmine
npm i --save-dev jasmine-ts
```

## initialize jasmine in project create spec folder with jasmine.mjs file which rename to jasmine.json

```
npx jasmine init
```

### copy data to jasmine.json

```
{
  "spec_dir": "spec",
  "spec_files": [
    "**/*spec.ts"
  ],
  "helpers": [],
  "env": {
    "failSpecWithNoExpectations": false,
    "stopSpecOnExpectationFailure": false,
    "stopOnSpecFailure": false,
    "random": false
  }
}
```

## package.json file

```
"scripts": {
    "test": "npx eslint . && jasmine"
  },
```

## tsconfig.json file contain

```
{
  "compilerOptions": {
    "types": ["jasmine"]
  }
}
```

## Run tests

```
npx jasmine spec/example.spec.ts
npx jasmine
npm test
npm run test
```
