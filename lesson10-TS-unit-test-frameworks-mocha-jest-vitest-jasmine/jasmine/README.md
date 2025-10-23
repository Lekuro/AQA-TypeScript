# Jasmine <https://jasmine.github.io/pages/getting_started.html>

## install jasmine

```
npm install --save-dev jasmine
npm i --save-dev @types/jasmine
```

## initialize jasmine in project create spec folder with jasmine.mjs file

```
npx jasmine init
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
npx jasmine spec/example.ts
npx jasmine
npm test
npm run test
```
