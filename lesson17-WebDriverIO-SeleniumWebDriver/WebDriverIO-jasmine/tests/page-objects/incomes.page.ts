import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class IncomesPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get welcomeText () {
        return $(".welcome-text");
    }

    public async getWelcomeText(): Promise<string> {
        const spanWelcome = await this.welcomeText;
        const text = await spanWelcome.getText();
        return text;
    }
}


