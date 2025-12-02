## PayWright <https://playwright.dev/>

### Create project

```
git pull
git checkout -b 18-playwright
mkdir lesson18-e2e-PlayWright
cd lesson18-e2e-PlayWright
mkdir playwright-teacher
cd playwright-teacher
touch README.md
```

### Install extension 'Playwright Test for VSCode' from Microsoft

### Install Playwright

```
npm init playwright@latest
```

Initializing project in '.'  
√ Do you want to use TypeScript or JavaScript? · TypeScript  
√ Where to put your end-to-end tests? · tests  
√ Add a GitHub Actions workflow? (Y/n) · true  
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

### Create tsconfig.json file. Enter data from file in project.

### Create eslint.config.mjs file. Enter data from file in project.

### Create .prettierrc file. Enter data from file in project.

### Install packages for linter.

```
npm i -D typescript ts-node eslint typescript-eslint @eslint/js @stylistic/eslint-plugin @stylistic/eslint-plugin-ts eslint-plugin-prettier eslint-plugin-unicorn prettier globals
```

### Install dotenv for using .env file

```
npm i -D dotenv
```

### Update playwright

```
npm install -D @playwright/test@latest
npx playwright install --with-deps
```

```
npx playwright --version
```

### Run! Inside that directory, you can run several commands:

#### Runs the end-to-end tests.

```
  npx playwright test
```

#### Runs the tests in a specific file.

```
  npx playwright test fire-name
```

#### Runs the tests in debug mode.

```
  npx playwright test --debug
```

#### Run the interactive UI mode.

```
  npx playwright test --ui
```

#### Auto generate tests with Codegen.

```
  npx playwright codegen
```

#### Runs the tests only on Desktop Chrome.

```
  npx playwright test --project=chromium
```
