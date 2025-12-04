import { Locator } from '@playwright/test';

export class ModalComponent {
    private get searchField(): Locator {
        return this.searchModalLocator.locator('input"]');
        // return this.page.locator('nav a[href="https://github.com/microsoft/playwright"]');
    }

    private get algoliaButton(): Locator {
        return this.searchModalLocator.locator(
            'a[href="https://www.algolia.com/ref/docsearch/?utm_source=playwright.dev&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"]'
        );
        // return this.page.locator('nav a[href="https://aka.ms/playwright/discord"]');
    }

    public constructor(private readonly searchModalLocator: Locator) {}

    public async clickSearchButton(): Promise<void> {
        await this.searchField.click();
    }

    public async clickAlgoliaButton(): Promise<void> {
        await this.algoliaButton.click();
    }
}
