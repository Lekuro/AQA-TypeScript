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
    const pagePromise: Promise<Page> = this.page.waitForEvent('popup');

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

// it work and with context but right is use page
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
    const pagePromise: Promise<Page> = this.page.waitForEvent('popup');
    await this.mainPage.headerComponent.clickGitHubButton();
    this.newTabPage = await pagePromise;
    await this.newTabPage.waitForLoadState();
});

Then('the new tab should have the GitHub URL {string}', async function (expectedUrl: string) {
    await expect(this.newTabPage.url()).to.be.equal(expectedUrl);
});

When('the user click the Discord button in header that opens in a new tab', async function (this: RobotDreamsWorld) {
    const pagePromise: Promise<Page> = this.page.waitForEvent('popup');
    await this.mainPage.headerComponent.clickDiscordButton();
    this.newTabPage = await pagePromise;
    await this.newTabPage.waitForLoadState();
});

Then('the new tab should have the Discord URL {string}', async function (expectedUrl: string) {
    await expect(this.newTabPage.url()).to.be.equal(expectedUrl);
});

When('the site is opened', async function (this: RobotDreamsWorld) {
    await this.page.waitForTimeout(1000);
});

Then('the system mode is chosen', async function (this: RobotDreamsWorld) {
    const theme = await this.mainPage.htmlElement.getAttribute('data-theme-choice');
    expect(theme).to.be.equal('system');
});

When('the user click switch mode button first time', async function (this: RobotDreamsWorld) {
    await this.mainPage.headerComponent.clickSwitchModesButton();
});

Then('the mode should change to {string} first time', async function (expectedMode: string) {
    const theme = await this.mainPage.htmlElement.getAttribute('data-theme-choice');
    expect(theme).to.be.equal(expectedMode);
});

When('the user click switch mode button second time', async function (this: RobotDreamsWorld) {
    await this.mainPage.headerComponent.clickSwitchModesButton();
    await this.mainPage.headerComponent.clickSwitchModesButton();
});

Then('the mode should change to {string} second time', async function (expectedMode: string) {
    const theme = await this.mainPage.htmlElement.getAttribute('data-theme-choice');
    expect(theme).to.be.equal(expectedMode);
});

When('the user click switch mode button third time', async function (this: RobotDreamsWorld) {
    await this.mainPage.headerComponent.clickSwitchModesButton();
    await this.mainPage.headerComponent.clickSwitchModesButton();
    await this.mainPage.headerComponent.clickSwitchModesButton();
});

Then('the mode should change to {string} third time', async function (expectedMode: string) {
    const theme = await this.mainPage.htmlElement.getAttribute('data-theme-choice');
    expect(theme).to.be.equal(expectedMode);
});

When('the user click search button', async function (this: RobotDreamsWorld) {
    await this.mainPage.headerComponent.clickSearchButton();
});

When('the user type {string}', async function (this: RobotDreamsWorld, searchText: string) {
    await this.mainPage.modalComponent.fillSearchInput(searchText);
});

Then('the input field is filled with {string}', async function (this: RobotDreamsWorld, searchText: string) {
    const searchInputValue = await this.mainPage.modalComponent.getSearchInputValue();
    expect(searchInputValue).to.be.equal(searchText);
});

Then('the data is found', async function (this: RobotDreamsWorld) {
    // проблема тут була в тому що треба дочекатися, поки промалюється перший елемент, а потім читати всі елементи
    const searchResult = await this.mainPage.modalComponent.searchResult.all();
    expect(searchResult).to.have.length.greaterThan(0);
    // я очікувала масив і ставила аll для масиву але воно не працює
    // коли я лишаю непрацюючий код коментом і пишу що маю з ним проблему ви просто закрили завдання
    //  а як до вас достукатись я незнаю
});

Then('the data is found as array', async function (this: RobotDreamsWorld) {
    const searchResultArray = await this.mainPage.modalComponent.searchResultArray();
    expect(searchResultArray.length).to.be.greaterThan(0);
});
