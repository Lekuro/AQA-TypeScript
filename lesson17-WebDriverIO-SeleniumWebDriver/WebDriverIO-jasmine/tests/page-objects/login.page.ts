import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    private get signInButton(): ChainablePromiseElement {
        return $('.signin-button');
    }

    private get inputEmail(): ChainablePromiseElement {
        return $('input[type="email"]');
    }

    private get inputPassword(): ChainablePromiseElement {
        return $('input[type="password"]');
    }

    private get btnSubmit(): ChainablePromiseElement {
        return $('button[type="submit"]');
    }

    public get errorEnterEmail(): ChainablePromiseElement {
        return $('input[type="email"] + p');
    }

    public get errorEnterPassword(): ChainablePromiseElement {
        return $('input[type="password"] + p');
    }

    public get errorEmailShouldContainSymbol(): ChainablePromiseElement {
        return $('//form//*[contains(text(), "Електрона адреса має містити знак")]');
    }

    public get errorInvalidUsernameOrPassword(): ChainablePromiseElement {
        return $('//form//*[contains(text(), "Invalid username or password")]');
    }

    public get linkForgetPassword(): ChainablePromiseElement {
        return $('//form//*[contains(text(), "Забули пароль?")]');
    }

    public get linkSignIn(): ChainablePromiseElement {
        return $('//form//*[contains(text(), "Зареєструватися")]');
    }

    public get pageHeader(): ChainablePromiseElement {
        return $('//button[@aria-label="Close modal"]/../h2');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login(email: string, password: string): Promise<void> {
        await this.signInButton.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    // public open () {
    //     return super.open('login');
    // }
}
