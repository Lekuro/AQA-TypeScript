import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get registerButton(): ChainablePromiseElement {
        return $('.register-button');
    }

    private get inputEmail(): ChainablePromiseElement {
        return $('input[type="email"]');
    }

    public get inputPassword(): ChainablePromiseElement {
        return $('//input[@type="password"]');
    }

    public get inputPassword2(): ChainablePromiseElement {
        return $('input[placeholder="Повторіть пароль"]');
    }

    private get btnSubmit(): ChainablePromiseElement {
        return $('button[type="submit"]');
    }

    public get linkSignIn(): ChainablePromiseElement {
        return $('button[type="button"]');
    }

    public get passwordEnterDigit(): ChainablePromiseElement {
        return $('//span[text()="Цифра (0-9)"]');
    }

    public get passwordEnterLetter(): ChainablePromiseElement {
        return $('//span[text()="Мала літера (a-z)"]');
    }

    public get passwordEnterCapitalLetter(): ChainablePromiseElement {
        return $('//span[text()="Велика літера (A-Z)"]');
    }

    public get passwordEnterSpecialSymbol(): ChainablePromiseElement {
        return $('//span[text()="Спеціальний символ (!@#$%^&* тощо)"]');
    }

    public get passwordEnterEightSymbols(): ChainablePromiseElement {
        return $('//span[text()="Мінімум 8 символів"]');
    }

    public get passwordsShouldMatch(): ChainablePromiseElement {
        return $('//span[text()="Паролі співпадають"]');
    }

    public get pageHeader(): ChainablePromiseElement {
        return $('//button[@aria-label="Close modal"]/../h2');
    }

    public get errorEmailAlreadyExists(): ChainablePromiseElement {
        return $('form>div:first-child');
        // return $('//form//*[contains(text(), "❌ A user with this email already exists")]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async register(email: string, password: string): Promise<void> {
        await this.registerButton.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputPassword2.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    // public open () {
    //     return super.open('login');
    // }
}
