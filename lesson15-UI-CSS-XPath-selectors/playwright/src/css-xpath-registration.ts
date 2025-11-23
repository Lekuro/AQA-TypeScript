// npx ts-node src/css-browser.ts
import { password } from "./secret";

const { chromium } = require("playwright");

async function run() {
  // don't see browser but made screenshots
  // const browser = await chromium.launch();
  // await page.setViewportSize({ width: 1280, height: 720 });
  // await page.screenshot({ path: "screenshot.png" });
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://new.fophelp.pro/");

  const signButton = await page.$(".signin-button");
  const signButtonText = await signButton.textContent();
  console.log("signButtonText: ", signButtonText);
  await signButton.click();

  const registerButton = await page.$(".register-button");
  const registerButtonText = await registerButton.textContent();
  console.log("registerButtonText: ", registerButtonText);
  await registerButton.click();

  const emailInput = await page.$("[type='email']");
  await emailInput.type("lilolovol+2@gmail.com").then();
  const passwordInput = await page.$("[placeholder='Мінімум 6 символів']");
  await passwordInput.type(password).then();
  const passwordInput2 = await page.$("[placeholder='Повторіть пароль']");
  await passwordInput2.type(password).then();
  const selectFopGroup = await page.$("select").then();
  await selectFopGroup.selectOption("3").then();
  const checkboxVatPayer = await page.$("//span[text()='Платник ПДВ']");
  let isSelected = await checkboxVatPayer.isChecked();
  if (!isSelected) {
    await checkboxVatPayer.check().then();
  }
  const checkboxGeneralTax = await page.$(
    "//span[text()='ФОП на загальній системі оподаткування']"
  );
  isSelected = await checkboxGeneralTax.isChecked();
  if (isSelected) {
    await checkboxGeneralTax.uncheck().then();
  }
  const submitButton = await page.$('button[type="submit"]');
  await submitButton.click();
  await page.waitForTimeout(10000);
  const errorMessage = await page.$(
    "//div[text()='A user with this email already exists']"
  );
  if (errorMessage) {
    const errorMessageText = await errorMessage.textContent();
    console.log("errorMessageText: ", errorMessageText);
  } else {
    const successH2 = await page.$("h2");
    const successH2Text = await successH2.textContent();
    console.log("successH2: ", successH2Text);
    const buttonContinue = await page.$("button");
    await buttonContinue.click();
  }

  // Wait for 10 seconds before closing the browser
  await page.waitForTimeout(10000);
  await browser.close();
}

run();
