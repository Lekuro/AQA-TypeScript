import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';
import { expect } from 'chai';

Given('the user navigate to the jira home page', async function(this: RobotDreamsWorld) {
    await this.mainPage.goTo();
});


When('the user clicks the Get started button', async function(this: RobotDreamsWorld) {
    await this.mainPage.clickGetStarted();
});

Then('the user verifies that new page is opened', function(this: RobotDreamsWorld) {
    const context = RobotDreamsWorld.globalContext;
    const actualOptions = (this.scenarioContext.get('menuItems') as MenuItemOption[]).map(item => item.itemName);

    expect(actualOptions).to.include.members(expectedOptions);
});


When('the user clicks the {string} menu item', async function(this: RobotDreamsWorld, menuItem: string) {
    await this.jiraPage.sideMenuComponent.clickMenuItem(menuItem);
});

Then('the customize sidebar modal should be opened', async function(this: RobotDreamsWorld) {
    await this.jiraPage.customizeSidebarModalComponent.waitFor();
});

When('the user reads the customize navigation elements', async function(this: RobotDreamsWorld) {
    const customizationElements = await this.jiraPage.customizeSidebarModalComponent.getCustomizeJiraNavigationElements();
    this.scenarioContext.set('customizationElements', customizationElements);
});

Then('the following options should be present in the customize sidebar modal:', function(this: RobotDreamsWorld, data: DataTable) {
    const actualOptions = this.scenarioContext.get('customizationElements') as string[];
    const expectedOptions = data.hashes().map(row => row['options']);
    expect(actualOptions).to.include.members(expectedOptions);
});
