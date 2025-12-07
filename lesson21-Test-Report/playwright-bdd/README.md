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

## ReportPortal
