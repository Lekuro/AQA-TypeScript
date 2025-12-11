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
        return this.searchModalLocator.locator('#docsearch-list>li');
    }

    // гетер не може вертати проміс
    public async searchResultArray(): Promise<string[]> {
        await this.searchResult.first().waitFor({ state: 'visible' });
        const results = await this.searchResult.all();
        const resultsArray: string[] = [];
        for (const result of results) {
            const resultText = await result.locator('span').first().innerText();
            resultsArray.push(resultText);
        }
        return resultsArray;
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
