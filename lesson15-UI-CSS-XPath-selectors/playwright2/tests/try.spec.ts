import { test, expect } from "@playwright/test";
import { chromium } from "playwright";
import { password } from "./secret.js";

let browser: any;
let context: any;
let page: any;

test.beforeAll(async () => {
  // Setup code that runs before all tests
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
});

test.afterAll(async () => {
  // Teardown code that runs after all tests
  await browser.close();
});

test.beforeEach(async () => {
  // Setup code that runs before each test
  page = await context.newPage();
  await page.goto("https://new.fophelp.pro/");
});

test.afterEach(async () => {
  // Teardown code that runs after each test
  await page.close();
});

test("has title", async ({}) => {
  // Test code here
  await expect(page).toHaveTitle(/FopHELP - помічник у веденні ФОП/);
});

test("login ", async ({}) => {
  const emailData = "lilolovol+2@gmail.com";
  // const loginButton = await page.waitForSelector("//button[text()='Увійти']");
  const loginButton = await page.getByRole("button", { name: "Увійти" });
  await loginButton.click();
  const emailInput = await page.locator("[type='email']");
  await emailInput.type(emailData);
  const passwordInput = await page.locator("[type='password']");
  await passwordInput.type(password);
  const signInButton = await page.locator("[type='submit']");
  await signInButton.click();
  const welcomeText = await page.locator(".welcome-text").textContent();
  expect(welcomeText).toContain(emailData);
  // Wait for 10 seconds before closing the browser
  await page.waitForTimeout(10000);
});
