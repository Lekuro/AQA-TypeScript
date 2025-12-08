## Playwright BDD <https://github.com/cucumber/cucumber-js/blob/main/docs/formatters.md>

### change cucumber.cjs file

```
    format: [
        'json:./playwright-bdd-reports/cucumber.json',
        'html:./playwright-bdd-reports/cucumber-embedded.html',
        'junit:./playwright-bdd-reports/cucumber.xml'
    ],
```

## Browserstack Test Observability

### website <https://www.browserstack.com/docs/test-reporting-and-analytics/getting-started/cucumber/cucumberjs/integrate-your-tests?fw-lang=javascript%2Fplaywright&super-fw=e2e_ui_testing#Tests_running_locally_or_elsewhere>

### Install the latest version of the browserstack-node-sdk npm package

```
npm install browserstack-node-sdk@latest
```

### Create the browserstack.yml file

Run the following command to set your username and accesskey as environment variables:

```
npx setup --username 'YOUR_USERNAME' --key 'YOUR_ACCESS_KEY'
```

### Run your suite with BrowserStack Test Reporting & Analytics

```
npm run test-browserstack
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
npm install --save-dev @cucumber/cucumber @cucumber/messages allure-cucumberjs
```

### change `cucumber.cjs` file

```
export default {
  format: ["allure-cucumberjs/reporter"],
  formatOptions: {
    resultsDir: "allure-results",
  },
};
```

### Run the allure report after serve is resultsDir by default allure-results

```
npx allure serve allure-results
```

## ReportPortal
