import { Locator } from '@playwright/test';

export class ModalComponent {
    public get searchInput(): Locator {
        return this.searchModalLocator.locator('#docsearch-input');
    }

    private get algoliaButton(): Locator {
        return this.searchModalLocator.locator(
            'a[href="https://www.algolia.com/ref/docsearch/?utm_source=playwright.dev&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"]'
        );
    }

    public constructor(private readonly searchModalLocator: Locator) {}

    public async fillSearchInput(text: string): Promise<void> {
        await this.searchInput.fill(text);
    }

    public async clickAlgoliaButton(): Promise<void> {
        await this.algoliaButton.click();
    }
}
