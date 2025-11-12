## Playwright

### Install playwright

```
npm i -D playwright
```

#### Install some extra

```
npm i -D ts-node
```

```
npx playwright install
```

C:\Users\lion\AppData\Local\ms-playwright\chromium-1194 
C:\Users\lion\AppData\Local\ms-playwright\chromium_headless_shell-1194 
C:\Users\lion\AppData\Local\ms-playwright\firefox-1495 
C:\Users\lion\AppData\Local\ms-playwright\webkit-2215 
C:\Users\lion\AppData\Local\ms-playwright\ffmpeg-1011 
C:\Users\lion\AppData\Local\ms-playwright\winldd-1007 

### Load the browser

```
const { chromium } = require('playwright');

async function run() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://new.fophelp.pro/');

    // Ваш код для пошуку елементів на веб-сайті

    await browser.close();
}

run();
```

### Look for element

```
const element = await page.$('#my-element');
```

### Get text from element

```
const text = await page.$eval('#my-element', (el) => el.textContent);
```

### Run the file

```
npx ts-node filename.ts
```
