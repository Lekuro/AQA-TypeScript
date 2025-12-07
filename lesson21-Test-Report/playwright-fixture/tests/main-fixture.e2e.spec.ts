import { expect } from '@playwright/test';
import { test } from '../src/fixtures/playwright-site.fixture';
import 'dotenv/config';

test.describe('fixture-based Main page test example', { tag: ['@fixture'] }, () => {
    test('the main page should has title', async ({ mainPage }) => {
        await test.step('verify title on main page', async () => {
            await mainPage.verifyTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
        });
    });

    test('the getStartedButton on main page should redirect to /docs/intro page', async ({ mainPage }) => {
        await test.step('click on getStarted button on main page', async () => {
            await mainPage.clickGetStarted();
        });
        await test.step('check redirect to /docs/intro page', async () => {
            await expect(mainPage.page).toHaveURL('https://playwright.dev/docs/intro');
            // will it be better code bellow?
            await expect(mainPage.page).toHaveTitle('Installation | Playwright');
            await expect(mainPage.page.waitForURL('https://playwright.dev/docs/intro')).toBeTruthy();
        });
        await test.step('verify title on /docs/intro page', async () => {
            await mainPage.verifyTitle('Installation | Playwright');
            await mainPage.page.screenshot({ path: 'tests/screenshots/getStartedButton-redirect-to-docs-intro.jpeg' });
        });
    });

    // test('gitHub star button on main page should redirect to github page', async ({ context, mainPage }) => {
    //     // Set up a promise to wait for the new page
    //     const newPagePromise = context.waitForEvent('page');
    //     await test.step('click github link in header', async () => {
    //         await mainPage.clickStarGitHub();
    //     });
    //     // Get the new page instance
    //     const newPage = await newPagePromise;
    //     // Wait for the new page to load (including redirects)
    //     await newPage.waitForLoadState();
    //     await test.step('check redirect to github', async () => {
    //         await expect(newPage).toHaveURL('https://github.com/microsoft/playwright');
    //         await newPage.screenshot({ path: 'tests/screenshots/gitHubStar-redirect-to-github-page.jpeg' });
    //     });
    // });

    // test('gitHub star gazers button on main page should redirect to github page', async ({ context, mainPage }) => {
    //     // Set up a promise to wait for the new page
    //     const newPagePromise = context.waitForEvent('page');
    //     await test.step('click github link in header', async () => {
    //         await mainPage.clickStarGazersGitHub();
    //     });
    //     // Get the new page instance
    //     const newPage = await newPagePromise;
    //     // Wait for the new page to load (including redirects)
    //     await newPage.waitForLoadState();
    //     await test.step('check redirect to github', async () => {
    //         await expect(newPage).toHaveURL('https://github.com/microsoft/playwright/stargazers');
    //         await newPage.screenshot({ path: 'tests/screenshots/gitHubStarGazers-redirect-to-github-page.jpeg' });
    //     });
    // });

    // test('header gitHub icon should redirect to github page', async ({ context, mainPage }) => {
    //     // Set up a promise to wait for the new page
    //     const newPagePromise = context.waitForEvent('page');
    //     await test.step('click github link in header', async () => {
    //         await mainPage.headerComponent.clickGitHubButton();
    //     });
    //     // Get the new page instance
    //     const newPage = await newPagePromise;
    //     // Wait for the new page to load (including redirects)
    //     await newPage.waitForLoadState();
    //     await test.step('check redirect to github', async () => {
    //         await expect(newPage).toHaveURL('https://github.com/microsoft/playwright');
    //         await newPage.screenshot({ path: 'tests/screenshots/gitHubFromHeader-redirect-to-github-page.jpeg' });
    //     });
    // });

    // test('header discord icon should redirect to discord page', async ({ context, mainPage }) => {
    //     // Set up a promise to wait for the new page
    //     const newPagePromise = context.waitForEvent('page');
    //     await test.step('click github link in header', async () => {
    //         await mainPage.headerComponent.clickDiscordButton();
    //     });
    //     // Get the new page instance
    //     const newPage = await newPagePromise;
    //     // Wait for the new page to load (including redirects)
    //     await newPage.waitForLoadState();
    //     await test.step('check redirect to github', async () => {
    //         await expect(newPage).toHaveURL('https://discord.com/servers/playwright-807756831384403968');
    //         await newPage.screenshot({ path: 'tests/screenshots/discordFromHeader-redirect-to-github-page.jpeg' });
    //     });
    // });

    test('header switch btn should change theme color', async ({ mainPage }) => {
        await test.step('check background color', async () => {
            const theme = await mainPage.htmlElement.getAttribute('data-theme-choice');
            expect(theme).toBe('system');
        });
        await mainPage.page.screenshot({ path: 'tests/screenshots/switch-mode-system-beginning.jpeg' });
        await mainPage.page.waitForTimeout(1000); // Waits for 1 seconds
        await test.step('click switch button', async () => {
            await mainPage.headerComponent.clickSwitchModesButton();
        });
        await test.step('check background color', async () => {
            const theme = await mainPage.htmlElement.getAttribute('data-theme-choice');
            expect(theme).toBe('light');
        });
        await mainPage.page.screenshot({ path: 'tests/screenshots/switch-mode-light.jpeg' });
        await mainPage.page.waitForTimeout(1000); // Waits for 1 seconds
        await test.step('click switch button', async () => {
            await mainPage.headerComponent.clickSwitchModesButton();
        });
        await test.step('check background color', async () => {
            const theme = await mainPage.htmlElement.getAttribute('data-theme-choice');
            expect(theme).toBe('dark');
        });
        await mainPage.page.screenshot({ path: 'tests/screenshots/switch-mode-dark.jpeg' });
        await mainPage.page.waitForTimeout(1000); // Waits for 1 seconds
        await test.step('click switch button', async () => {
            await mainPage.headerComponent.clickSwitchModesButton();
        });
        await test.step('check background color', async () => {
            const theme = await mainPage.htmlElement.getAttribute('data-theme-choice');
            expect(theme).toBe('system');
        });
        await mainPage.page.screenshot({ path: 'tests/screenshots/switch-mode-system-end.jpeg' });
        await mainPage.page.waitForTimeout(1000); // Waits for 1 seconds
    });

    test('modal search should be opened', async ({ mainPage }) => {
        await test.step('click search button', async () => {
            await mainPage.headerComponent.clickSearchButton();
        });
        await mainPage.page.waitForTimeout(1000); // Waits for 1 seconds
        await test.step('check modal is opened', async () => {
            const inputData = 'assertions';
            await mainPage.modalComponent.fillSearchInput(inputData);
            await expect(mainPage.modalComponent.searchInput).toHaveValue(inputData);
        });
        await mainPage.page.screenshot({ path: 'tests/screenshots/modal-search-filled.jpeg' });
        await mainPage.page.waitForTimeout(1000); // Waits for 1 seconds
    });

    // test('Algolia btn in modal-search should redirect to Algolia page', async ({ context, mainPage }) => {
    //     // Set up a promise to wait for the new page
    //     const newPagePromise = context.waitForEvent('page');
    //     await test.step('click search button', async () => {
    //         await mainPage.headerComponent.clickSearchButton();
    //     });
    //     await mainPage.page.waitForTimeout(1000); // Waits for 1 seconds
    //     await test.step('click algolia button', async () => {
    //         await mainPage.modalComponent.clickAlgoliaButton();
    //     });
    //     await mainPage.page.waitForTimeout(1000); // Waits for 1 seconds
    //     // Get the new page instance
    //     const newPage = await newPagePromise;
    //     // Wait for the new page to load (including redirects)
    //     await newPage.waitForLoadState();
    //     await test.step('check redirect to Algolia', async () => {
    //         await expect(newPage).toHaveURL(
    //             'https://www.algolia.com/developers?utm_source=playwright.dev&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch'
    //         );
    //         await newPage.screenshot({ path: 'tests/screenshots/AlgoliaFromModalSearch-redirect-to-Algolia.jpeg' });
    //     });
    // });
});
