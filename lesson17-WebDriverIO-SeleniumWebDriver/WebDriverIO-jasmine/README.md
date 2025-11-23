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
npm init wdio WebDriverIO-jasmine
```

✔ A project named "WebDriverIO-jasmine" was detected at "D:\other\robot_dreams\AQA-TypeScript\lesson17-WebDriverIO-SeleniumWebDriver\WebDriverIO-jasmine", correct? -> Yes  
✔ What type of testing would you like to do? -> E2E Testing - of Web or Mobile Applications  
✔ Where is your automation backend located? -> On my local machine  
✔ Which environment you would like to automate? -> Web - web applications in the browser  
✔ With which browser should we start? -> Chrome  
✔ Which framework do you want to use? -> Jasmine (https://jasmine.github.io/)  
✔ Do you want to use Typescript to write tests? -> Yes  
✔ Do you want WebdriverIO to autogenerate some test files? -> Yes  
✔ What should be the location of your spec files? -> D:\other\robot_dreams\AQA-TypeScript\lesson17-WebDriverIO-SeleniumWebDriver\WebDriverIO-jasmine\test\specs\*\*\*.ts  
✔ Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes  
✔ Where are your page objects located? -> D:\other\robot_dreams\AQA-TypeScript\lesson17-WebDriverIO-SeleniumWebDriver\WebDriverIO-jasmine\test\pageobjects\*\*\*.ts  
✔ Which reporter do you want to use? -> spec, allure  
✔ Do you want to add a plugin to your test setup? wait-for: utilities that provide functionalities to wait for certain conditions till a defined task is complete. -> https://www.npmjs.com/package/wdio-wait-for  
✔ Would you like to include Visual Testing to your setup? For more information see https://webdriver.io/docs/visual-testing! -> No  
✔ Do you want to add a service to your test setup? -> No  
✔ Do you want to add a service to your test setup? ->  
✔ Do you want me to run `npm install` -> Yes

### Run test

```
npm run wdio
```
