## Cucumber.js

### settings.json

```
  "cucumber.features": [
    "features/**/*.feature",
  ],
  "cucumber.glue": [
    "src/steps/**/*.ts",
  ],
```

### Install Cucumber.js

```
npm i -D @cucumber/cucumber @cucumber/pretty-formatter
```

### install playwright

```
npm i -D playwright
npx playwright install 
```

### package.json

```
  "type": "module",
  "scripts": {
    "test": "cucumber-js --config cucumber.cjs --profile local"
  },
```

### cucumber.cjs fill as in project

### tsconfig.json copy from project
### Install chai
```
npm i -D @types/chai chai
```