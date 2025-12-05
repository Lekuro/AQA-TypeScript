import { Given, Then, When } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';
import { expect } from 'chai';
import { Page } from 'playwright';

Given('the user navigate to the main page', async function (this: RobotDreamsWorld) {
    await this.mainPage.goTo();
});

When('the user clicks the Get started button', async function (this: RobotDreamsWorld) {
    const pagePromise: Promise<Page> = await this.globalContext.waitForEvent('page');
    await this.mainPage.clickGetStarted();
});

Then('the user verifies that new page is opened', function (this: RobotDreamsWorld) {
    const context = RobotDreamsWorld.globalContext;
    const actualOptions = (this.scenarioContext.get('menuItems') as MenuItemOption[]).map((item) => item.itemName);

    expect(actualOptions).to.include.members(expectedOptions);
});
// Assuming you have access to `page` (current page) and `context` (browser context)
// in your Cucumber world or shared state.

When('I click the link that opens a new tab', async function () {
    // Wait for the 'page' (or 'popup') event to occur, which is triggered when a new tab opens
    const pagePromise: Promise<Page> = this.context.waitForEvent('page');

    // Perform the action that opens the new tab (e.g., clicking a link with target="_blank")
    await this.page.getByRole('link', { name: 'Open new tab' }).click();

    // Await the new page object
    this.newPage = await pagePromise;

    // Wait for the new page to finish loading its initial content/redirects
    await this.newPage.waitForLoadState();
});

Then('the new tab should have the URL {string}', async function (expectedUrl: string) {
    // Use Playwright's built-in assertion with auto-waiting
    await expect(this.newPage).toHaveURL(expectedUrl);
});

// Example using a partial URL or regex
Then('the new tab should redirect to a URL containing {string}', async function (partialUrl: string) {
    // You can use a regex or a glob pattern for flexibility
    await expect(this.newPage).toHaveURL(/.*${partialUrl}.*/);
});
// When('the user clicks the {string} menu item', async function(this: RobotDreamsWorld, menuItem: string) {
//     await this.jiraPage.sideMenuComponent.clickMenuItem(menuItem);
// });

// Then('the customize sidebar modal should be opened', async function(this: RobotDreamsWorld) {
//     await this.jiraPage.customizeSidebarModalComponent.waitFor();
// });

// When('the user reads the customize navigation elements', async function(this: RobotDreamsWorld) {
//     const customizationElements = await this.jiraPage.customizeSidebarModalComponent.getCustomizeJiraNavigationElements();
//     this.scenarioContext.set('customizationElements', customizationElements);
// });

// Then('the following options should be present in the customize sidebar modal:', function(this: RobotDreamsWorld, data: DataTable) {
//     const actualOptions = this.scenarioContext.get('customizationElements') as string[];
//     const expectedOptions = data.hashes().map(row => row['options']);
//     expect(actualOptions).to.include.members(expectedOptions);
// });
