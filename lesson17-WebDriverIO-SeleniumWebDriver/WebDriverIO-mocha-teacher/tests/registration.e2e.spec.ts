import { expect, browser } from '@wdio/globals';
// import { expect } from 'expect-webdriverio';
import { RegisterPage } from '../src/page-objects/index';

describe('-------- register page --------', () => {
    let registerPage: RegisterPage;
    // before(async () => {});
    before(async () => {
        await browser.maximizeWindow();
        registerPage = new RegisterPage();
    });
    afterEach(async () => {
        await browser.refresh();
    });
    // after(async () => {});

    it('in password field is entered digit', async () => {
        await registerPage.goTo();
        await registerPage.registerButton.click();
        await expect(registerPage.passwordEnterDigit).toBeDisplayed();
        const data = '1';
        const passwordField = await registerPage.inputPassword;
        await passwordField.setValue(data);
        const passwordValue = await passwordField.getValue();
        await expect(passwordValue).toBe(data);
        await expect(registerPage.passwordEnterDigit).not.toBeDisplayed();
        await browser.saveScreenshot('./tests/screenshots/register-password-enter-digit.jpeg', { fullPage: true, format: 'jpeg' });
    });

    it('in password field is entered letter', async () => {
        await registerPage.goTo();
        await registerPage.registerButton.click();
        await expect(registerPage.passwordEnterLetter).toBeDisplayed();
        const data = 'a';
        const passwordField = await registerPage.inputPassword;
        await passwordField.setValue(data);
        const passwordValue = await passwordField.getValue();
        await expect(passwordValue).toBe(data);
        await expect(registerPage.passwordEnterLetter).not.toBeDisplayed();
        await browser.saveScreenshot('./tests/screenshots/register-password-enter-letter.jpeg', { fullPage: true, format: 'jpeg' });
    });

    it('in password field is entered capital letter', async () => {
        await registerPage.goTo();
        await registerPage.registerButton.click();
        await expect(registerPage.passwordEnterCapitalLetter).toBeDisplayed();
        const data = 'A';
        const passwordField = await registerPage.inputPassword;
        await passwordField.setValue(data);
        const passwordValue = await passwordField.getValue();
        await expect(passwordValue).toBe(data);
        await expect(registerPage.passwordEnterCapitalLetter).not.toBeDisplayed();
        await browser.saveScreenshot('./tests/screenshots/register-password-enter-capital-letter.jpeg', { fullPage: true, format: 'jpeg' });
    });

    it('in password field is entered special symbol', async () => {
        await registerPage.goTo();
        await registerPage.registerButton.click();
        await expect(registerPage.passwordEnterSpecialSymbol).toBeDisplayed();
        const data = '@';
        const passwordField = await registerPage.inputPassword;
        await passwordField.setValue(data);
        const passwordValue = await passwordField.getValue();
        await expect(passwordValue).toBe(data);
        await expect(registerPage.passwordEnterSpecialSymbol).not.toBeDisplayed();
        await browser.saveScreenshot('./tests/screenshots/register-password-enter-special-symbol.jpeg', { fullPage: true, format: 'jpeg' });
    });

    it('in password field is entered 8 symbols', async () => {
        await registerPage.goTo();
        await registerPage.registerButton.click();
        await expect(registerPage.passwordEnterEightSymbols).toBeDisplayed();
        const data = 'a1A@....';
        const passwordField = await registerPage.inputPassword;
        await passwordField.setValue(data);
        const passwordValue = await passwordField.getValue();
        await expect(passwordValue).toBe(data);
        await expect(registerPage.passwordEnterEightSymbols).not.toBeDisplayed();
        await browser.saveScreenshot('./tests/screenshots/register-password-enter-eight-symbols.jpeg', { fullPage: true, format: 'jpeg' });
    });

    it('passwords should match', async () => {
        await registerPage.goTo();
        await registerPage.registerButton.click();
        await expect(registerPage.passwordsShouldMatch).toBeDisplayed();
        const data = 'a1A@....';
        await registerPage.inputPassword.setValue(data);
        await registerPage.inputPassword2.setValue(data);
        await expect(registerPage.passwordsShouldMatch).not.toBeDisplayed();
        await browser.saveScreenshot('./tests/screenshots/register-password-should-match.jpeg', { fullPage: true, format: 'jpeg' });
    });

    it('should redirect to "sign in" page', async () => {
        await registerPage.goTo();
        await registerPage.registerButton.click();
        await expect(registerPage.pageHeader).toBeDisplayed();
        await expect(registerPage.pageHeader).toHaveText(expect.stringContaining('Реєстрація'));
        await registerPage.linkSignIn.click();
        await expect(registerPage.pageHeader).toBeDisplayed();
        await expect(registerPage.pageHeader).toHaveText(expect.stringContaining('Вхід до системи'));
        await browser.saveScreenshot('./tests/screenshots/register-redirect-to-sign-in.jpeg', { fullPage: true, format: 'jpeg' });
    });

    it('should show error trying register with registered email', async () => {
        await registerPage.goTo();
        await registerPage.register(process.env.EMAIL as string, process.env.PASSWORD as string);
        await registerPage.pageHeader.scrollIntoView();
        await expect(registerPage.errorEmailAlreadyExists).toBeDisplayed();
        await expect(registerPage.errorEmailAlreadyExists).toHaveText(expect.stringContaining('❌ A user with this email already exists'));
        await browser.saveScreenshot('./tests/screenshots/register-error-with-registered-email.jpeg', { fullPage: true, format: 'jpeg' });
    });

    // it('should register with valid credentials', async () => {
    //     const email = 'lilolovol+8@gmail.com';
    //     await registerPage.goTo();
    //     await registerPage.register(email, process.env.PASSWORD as string);
    //     await expect(registerPage.pageHeader).toBeDisplayed();
    //     await expect(registerPage).toHaveText(expect.stringContaining('Реєстрація успішна!'));
    //     await browser.saveScreenshot('./tests/screenshots/register-success.jpeg', { fullPage: true, format: 'jpeg' });
    //     // await expect($('//h3[text()="Обліковий запис створено!"]')).toHaveText(expect.stringContaining('Обліковий запис створено!'));
    //     // await expect($('//p[text()="Для продовження реєстрації на вашу пошту вислано e-mail з підтвердженням"]')).toHaveText(
    //     //     expect.stringContaining('Для продовження реєстрації на вашу пошту вислано e-mail з підтвердженням')
    //     // );
    //     // await expect($('//strong[text()="lilolovol+7@gmail.com"]')).toHaveText(expect.stringContaining(email));
    // });
});
