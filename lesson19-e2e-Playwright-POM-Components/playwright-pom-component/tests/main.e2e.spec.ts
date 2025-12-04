import { expect, test } from '@playwright/test';
import 'dotenv/config';
import { MainPage } from '../src/page-object-models/index';

test.describe('Main page:', () => {
    let mainPage: MainPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        await mainPage.goTo();
    });

    test('the main page should has title', async () => {
        await test.step('verify title on main page', async () => {
            await mainPage.verifyTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
        });
    });

    test('the getStartedButton on main page should redirect to /docs/intro page', async () => {
        await test.step('click on getStarted button on main page', async () => {
            await mainPage.clickGetStarted();
        });
        await test.step('check redirect to /docs/intro page', async () => {
            await expect(mainPage.page).toHaveURL('https://playwright.dev/docs/intro');
        });
    });

    test('gitHub star button on main page should redirect to github page', async ({ context }) => {
        // Set up a promise to wait for the new page
        const newPagePromise = context.waitForEvent('page');
        await test.step('click github link in header', async () => {
            await mainPage.clickStarGitHub();
        });
        // Get the new page instance
        const newPage = await newPagePromise;
        // Wait for the new page to load (including redirects)
        await newPage.waitForLoadState();
        await test.step('check redirect to github', async () => {
            await expect(newPage).toHaveURL('https://github.com/microsoft/playwright');
        });
    });

    test('gitHub star gazers button on main page should redirect to github page', async ({ context }) => {
        // Set up a promise to wait for the new page
        const newPagePromise = context.waitForEvent('page');
        await test.step('click github link in header', async () => {
            await mainPage.clickStarGazersGitHub();
        });
        // Get the new page instance
        const newPage = await newPagePromise;
        // Wait for the new page to load (including redirects)
        await newPage.waitForLoadState();
        await test.step('check redirect to github', async () => {
            await expect(newPage).toHaveURL('https://github.com/microsoft/playwright/stargazers');
        });
    });

    test('header gitHub icon should redirect to github page', async ({ context }) => {
        // Set up a promise to wait for the new page
        const newPagePromise = context.waitForEvent('page');
        await test.step('click github link in header', async () => {
            await mainPage.headerComponent.clickGitHubButton();
        });
        // Get the new page instance
        const newPage = await newPagePromise;
        // Wait for the new page to load (including redirects)
        await newPage.waitForLoadState();
        await test.step('check redirect to github', async () => {
            await expect(newPage).toHaveURL('https://github.com/microsoft/playwright');
        });
    });

    test('header discord icon should redirect to discord page', async ({ context }) => {
        // Set up a promise to wait for the new page
        const newPagePromise = context.waitForEvent('page');
        await test.step('click github link in header', async () => {
            await mainPage.headerComponent.clickDiscordButton();
        });
        // Get the new page instance
        const newPage = await newPagePromise;
        // Wait for the new page to load (including redirects)
        await newPage.waitForLoadState();
        await test.step('check redirect to github', async () => {
            await expect(newPage).toHaveURL('https://discord.com/servers/playwright-807756831384403968');
        });
    });
});
