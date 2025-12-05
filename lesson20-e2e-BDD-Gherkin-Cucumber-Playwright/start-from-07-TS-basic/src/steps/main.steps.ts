import { Given, Then, When } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';
import { expect } from 'chai';
import { Page } from 'playwright';

Given('the user is navigated to the main page', async function (this: RobotDreamsWorld) {
    await this.mainPage.goTo();
    // await this.page.waitForTimeout(1000);
});

When('the user click the GetStarted button that opens in the same tab', async function (this: RobotDreamsWorld) {
    await this.mainPage.clickGetStarted();
});

Then('the tab should have the GetStarted URL {string}', async function (expectedUrl: string) {
    await expect(this.mainPage.url).to.be.equal(expectedUrl);
});

// Assuming you have access to `page` (current page) and `context` (browser context)
// in your Cucumber world or shared state.

When('the user click the GitHubStars button that opens in a new tab', async function (this: RobotDreamsWorld) {
    // Wait for the 'page' (or 'popup') event to occur, which is triggered when a new tab opens
    const pagePromise: Promise<Page> = this.context.waitForEvent('page');

    // Perform the action that opens the new tab (e.g., clicking a link with target="_blank")
    await this.mainPage.clickStarGitHub();

    // Await the new page object
    this.newTabPage = await pagePromise;

    // Wait for the new page to finish loading its initial content/redirects
    await this.newTabPage.waitForLoadState();
});

Then('the new tab should have the GitHubStars URL {string}', async function (expectedUrl: string) {
    // Use Playwright's built-in assertion with auto-waiting
    await expect(this.newTabPage.url()).to.be.equal(expectedUrl);
});

When('the user click the GitHubStarsGazers button that opens in a new tab', async function (this: RobotDreamsWorld) {
    const pagePromise: Promise<Page> = this.context.waitForEvent('page');
    await this.mainPage.clickStarGazersGitHub();
    this.newTabPage = await pagePromise;
    await this.newTabPage.waitForLoadState();
});

Then('the new tab should have the GitHubStarsGazers URL {string}', async function (expectedUrl: string) {
    await expect(this.newTabPage.url()).to.be.equal(expectedUrl);
});

When('the user click the GitHub button in header that opens in a new tab', async function (this: RobotDreamsWorld) {
    const pagePromise: Promise<Page> = this.context.waitForEvent('page');
    await this.mainPage.headerComponent.clickGitHubButton();
    this.newTabPage = await pagePromise;
    await this.newTabPage.waitForLoadState();
});

Then('the new tab should have the GitHub URL {string}', async function (expectedUrl: string) {
    await expect(this.newTabPage.url()).to.be.equal(expectedUrl);
});

When('the user click the Discord button in header that opens in a new tab', async function (this: RobotDreamsWorld) {
    const pagePromise: Promise<Page> = this.context.waitForEvent('page');
    await this.mainPage.headerComponent.clickDiscordButton();
    this.newTabPage = await pagePromise;
    await this.newTabPage.waitForLoadState();
});

Then('the new tab should have the Discord URL {string}', async function (expectedUrl: string) {
    await expect(this.newTabPage.url()).to.be.equal(expectedUrl);
});
