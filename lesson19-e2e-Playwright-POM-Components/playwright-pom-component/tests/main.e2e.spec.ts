import { test } from '@playwright/test';
import 'dotenv/config';
import { MainPage } from '../src/page-object-models/index';

test.describe('Main page:', () => {
    let mainPage: MainPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        await mainPage.goTo();
    });

    test('has title double', () => {
        test.step('verify title on main page', async () => {
            await mainPage.verifyTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
        });
    });

    test('should redirect to github page', () => {
        test.step('click github link in header', async () => {
            await mainPage.headerComponent.clickGitHubButton();
        });
    });

    // test('should show error when invalid email', async () => {
    //     await loginPage.login('bad-email@try.me', process.env.PASSWORD as string);
    //     await expect(loginPage.errorInvalidUsernameOrPassword).toBeVisible();
    //     await expect(loginPage.errorInvalidUsernameOrPassword).toHaveText('Invalid username or password');
    // });

    // test('should show error when invalid password', async () => {
    //     await loginPage.login(process.env.EMAIL as string, 'bad-password');
    //     await expect(loginPage.errorInvalidUsernameOrPassword).toBeVisible();
    //     await expect(loginPage.errorInvalidUsernameOrPassword).toHaveText('Invalid username or password');
    // });

    // test('should help with forgotten password', async () => {
    //     await loginPage.clickSignInButton();
    //     await expect(loginPage.pageHeader).toBeVisible();
    //     await expect(loginPage.pageHeader).toHaveText('Вхід до системи');
    //     await loginPage.linkForgotPassword.click();
    // });

    // test('should redirect to "register" page', async () => {
    //     await loginPage.clickSignInButton();
    //     await expect(loginPage.pageHeader).toBeVisible();
    //     await expect(loginPage.pageHeader).toHaveText('Вхід до системи');
    //     await loginPage.clickRegister();
    //     await expect(loginPage.pageHeader).toBeVisible();
    //     await expect(loginPage.pageHeader).toHaveText('Реєстрація');
    // });
});
