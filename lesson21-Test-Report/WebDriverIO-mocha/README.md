## Browserstack Test Observability test report

### don't work as wanted

### website better <https://webdriver.io/docs/browserstack-service/>

### install

```
npm install @wdio/browserstack-service --save-dev
```

### login to <https://automation.browserstack.com/> with lilolovol@gail.com

### copy npx setup --username '' --key ''

### change `wdio.conf.js` don't work for me

```
export const config = {
    // ...
    services: [
        ['browserstack', {
            testReporting: true,
            testReportingOptions: {
                user: process.env.BROWSERSTACK_USERNAME,
                key: process.env.BROWSERSTACK_ACCESS_KEY,
                projectName: "Your project name goes here",
                buildName: "The static build job name goes here e.g. Nightly regression"
            },
            browserstackLocal: true
        }]
    ],
    // ...
};
```

### website worse <https://www.browserstack.com/docs/test-reporting-and-analytics/getting-started/javascript/webdriverio/integrate-your-tests?fw-lang=javascript%2Fwebdriverio&super-fw=e2e_ui_testing#Tests_running_locally_or_elsewhere>

## WebDriverIO <https://webdriver.io/docs/gettingstarted>

### Install project

```
git pull
git checkout -b 17-WebDriverIO-SeleniumWebDriver
mkdir lesson17-WebDriverIO-SeleniumWebDriver
cd lesson17-WebDriverIO-SeleniumWebDriver/
touch README.md
```

### Install WebDriverIO in folder you are in

```
npm init wdio .
```

### Install WebDriverIO with creating a new folder

```
npm init wdio WebDriverIO-mocha
```

✔ A project named "WebDriverIO-mocha" was detected at "D:\other\robot_dreams\AQA-TypeScript\lesson17-WebDriverIO-SeleniumWebDriver\WebDriverIO-mocha", correct? Yes  
✔ What type of testing would you like to do? E2E Testing - of Web or Mobile Applications  
✔ Where is your automation backend located? On my local machine  
✔ Which environment you would like to automate? Web - web applications in the browser  
✔ With which browser should we start? Chrome  
✔ Which framework do you want to use? Mocha (https://mochajs.org/)  
✔ Do you want to use Typescript to write tests? Yes  
✔ Do you want WebdriverIO to autogenerate some test files? No  
✔ Which reporter do you want to use? spec  
✔ Do you want to add a plugin to your test setup?  
✔ Would you like to include Visual Testing to your setup? For more information see https://webdriver.io/docs/visual-testing! No  
✔ Do you want to add a service to your test setup?  
✔ Do you want me to run `npm install` Yes

### Run test

```
npm run wdio
```

### Debugger Wdio

```
npx wdio repl chrome
```

### Debugger in code

```
await browser.debug()
```
