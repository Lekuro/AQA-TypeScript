import { Locator } from 'playwright';

export class ModalComponent {
    private get searchInput(): Locator {
        return this.searchModalLocator.locator('#docsearch-input');
    }

    private get algoliaButton(): Locator {
        return this.searchModalLocator.locator(
            'a[href="https://www.algolia.com/ref/docsearch/?utm_source=playwright.dev&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"]'
        );
    }

    public get searchResult(): Locator {
        return this.searchModalLocator.locator('ul#docsearch-list li');
    }

    public get searchResultArray(): Promise<Locator[]> {
        return this.searchModalLocator.locator('div>div>section li').all();
    }

    public constructor(private readonly searchModalLocator: Locator) {}

    public async fillSearchInput(text: string): Promise<void> {
        await this.searchInput.fill(text);
    }

    public async clickAlgoliaButton(): Promise<void> {
        await this.algoliaButton.click();
    }

    public async getSearchInputValue(): Promise<string> {
        return this.searchInput.inputValue();
    }
}
