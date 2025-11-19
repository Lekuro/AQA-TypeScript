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
