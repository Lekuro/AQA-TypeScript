## Playwright <https://playwright.dev/docs/test-reporters>

### change `playwright.config.ts` file

```
export default defineConfig({
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        ['list'],
        ['json', { outputFile: 'playwright-reports/json-playwright-report.json' }],
        ['html', { outputFolder: 'playwright-reports/html-playwright-report' }],
        ['junit', { outputFile: 'playwright-reports/xmls-playwright-report.xml' }]
    ],});
```

### to watch the report

```
npx playwright show-report playwright-reports\html-playwright-report
```

## Browserstack Test Observability

### website <https://www.browserstack.com/docs/test-reporting-and-analytics/getting-started/javascript/playwright/integrate-your-tests?fw-lang=javascript%2Fplaywright&super-fw=e2e_ui_testing#Tests_running_locally_or_elsewhere>

### Install or update to the latest version of BrowserStack Node SDK

```
npm i -D browserstack-node-sdk
npm list browserstack-node-sdk

```

### login to <https://automation.browserstack.com/> with lilolovol@gail.com

### copy npx setup --username '' --key ''

### Create the `browserstack.yml` file

If you don’t already have a browserstack.yml file, run the following command to create one:

```
npx setup --username 'YOUR_USERNAME' --key 'YOUR_ACCESS_KEY'

```

### Set up the browserstack.yml file or copy from browserstack

```
userName: YOUR_USERNAME
accessKey: YOUR_ACCESS_KEY
buildName: "Your static build/job name goes here"
projectName: "Your static project name goes here"
CUSTOM_TAG_1: "You can set a custom Build Tag here"
# Use CUSTOM_TAG_<N> and set more build tags as you need.
testObservability: true
browserstackLocal: true
browserstackAutomation: false # Set to true for tests on BrowserStack products.
```

### Run your test suite with Test Reporting & Analytics

For example, if you use the command `npx playwright test sample --project=chromium` to run your test suite, you need to replace it with `npx browserstack-node-sdk playwright test sample --project=chromium`.

```
npx browserstack-node-sdk playwright test
```

### copy link from browserstack to share with people

```
https://automation.browserstack.com/projects/playwright-fixture/builds
```

## Mocha-awesome

## Allure

### Install allure

```
npm install -D allure-commandline
npx allure --version
```

### Install adapter for your framework. For more details look <https://allurereport.org/docs/frameworks/>

```
npm install -D allure-playwright
```

### change `playwright.config.ts` file

```
export default defineConfig({
  // ...
  reporter: [
    ['allure-playwright',{resultsDir: "allure-html-results"}]
  ],
});
```

### Run the allure report after serve is resultsDir by default allure-results

```
npx allure serve allure-html-results
```

## ReportPortal
