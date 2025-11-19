import { expect, browser } from '@wdio/globals';
import { LoginPage, IncomesPage } from '../page-objects/index';

describe('-------- Login page --------', () => {
    let loginPage: LoginPage;
    let incomePage: IncomesPage;
    // before(async () => {});
    beforeAll(async () => {
        await browser.maximizeWindow();
        loginPage = new LoginPage();
    });
    afterEach(async () => {
        await browser.refresh();
    });
    // after(async () => {});

    it('should show error when email, password is empty', async () => {
        await loginPage.goTo();

        await loginPage.login('', '');
        await expect(loginPage.errorEnterEmail).toBeDisplayed();
        await expect(loginPage.errorEnterEmail).toHaveText(expect.stringContaining('Email is required'));
        await expect(loginPage.errorEnterPassword).toBeDisplayed();
        await expect(loginPage.errorEnterPassword).toHaveText(expect.stringContaining('Password is required'));

        await browser.saveScreenshot('./tests/screenshots/error-empty-email-password.jpeg', { fullPage: true, format: 'jpeg' });
    });

    it('should show error when invalid email', async () => {
        await loginPage.goTo();

        await loginPage.login('bad-email@try.me', process.env.PASSWORD as string);
        await expect(loginPage.errorInvalidUsernameOrPassword).toBeDisplayed();
        await expect(loginPage.errorInvalidUsernameOrPassword).toHaveText(expect.stringContaining('Invalid username or password'));

        await browser.saveScreenshot('./tests/screenshots/error-invalid-email.jpeg', { fullPage: true, format: 'jpeg' });
    });

    it('should show error when invalid password', async () => {
        await loginPage.goTo();
        await loginPage.login(process.env.EMAIL as string, 'bad-password');
        await expect(loginPage.errorInvalidUsernameOrPassword).toBeDisplayed();
        await expect(loginPage.errorInvalidUsernameOrPassword).toHaveText(expect.stringContaining('Invalid username or password'));

        await browser.saveScreenshot('./tests/screenshots/error-invalid-password.jpeg', { fullPage: true, format: 'jpeg' });
    });

    it('should redirect to "sign in" page', async () => {
        await loginPage.goTo();
        await loginPage.login('', '');
        await expect(loginPage.pageHeader).toBeDisplayed();
        await expect(loginPage.pageHeader).toHaveText(expect.stringContaining('Вхід до системи'));
        await loginPage.linkSignIn.click();
        await expect(loginPage.pageHeader).toBeDisplayed();
        await expect(loginPage.pageHeader).toHaveText(expect.stringContaining('Реєстрація'));

        await browser.saveScreenshot('./tests/screenshots/redirect-to-sign-in.jpeg', { fullPage: true, format: 'jpeg' });
    });

    it('should login with valid credentials', async () => {
        await loginPage.goTo();
        incomePage = new IncomesPage();

        await loginPage.login(process.env.EMAIL as string, process.env.PASSWORD as string);
        await expect(incomePage.welcomeText).toBeDisplayed();
        await expect(incomePage.welcomeText).toHaveText(expect.stringContaining('lilolovol+2@gmail.com'));

        await browser.saveScreenshot('./tests/screenshots/success-login.jpeg', { fullPage: true, format: 'jpeg' });
    });
});
