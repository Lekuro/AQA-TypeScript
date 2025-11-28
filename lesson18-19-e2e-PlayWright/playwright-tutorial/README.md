## PayWright <https://playwright.dev/>

### Create project

```
git pull
git checkout -b 18-playwright
mkdir lesson18-e2e-PlayWright
cd lesson18-e2e-PlayWright
mkdir playwright-tutorial
cd playwright-tutorial
touch README.md
```

### Install extension 'Playwright Test for VSCode' from Microsoft

### Install Playwright

```
npm init playwright@latest
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
