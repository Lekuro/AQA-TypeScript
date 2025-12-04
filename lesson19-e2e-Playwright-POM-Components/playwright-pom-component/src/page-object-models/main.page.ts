import { expect, Locator, Page } from '@playwright/test';
import { HeaderComponent } from 'src/components/header.component';
import { ModalComponent } from 'src/components/modal.component';

export class MainPage {
    private get getStartedButton(): Locator {
        return this.page.locator('header a[href="/docs/intro"]');
    }

    private get btnStarGitHub(): Locator {
        return this.page.locator('a[aria-label="Star microsoft/playwright on GitHub"]');
    }

    private get btnStarGazersGitHub(): Locator {
        return this.page.locator('a[aria-label="79k+ stargazers on GitHub"]');
    }

    public get title(): Locator {
        return this.page.locator('title');
    }

    public readonly headerComponent: HeaderComponent;
    public readonly modalComponent: ModalComponent;

    public constructor(
        public page: Page,
        protected readonly _url = 'https://playwright.dev/'
    ) {
        this.headerComponent = new HeaderComponent(this.page.locator('nav[aria-label="Main"]'));
        this.modalComponent = new ModalComponent(this.page.locator('div[class="DocSearch-Modal"]'));
    }

    public async goTo(url = this._url): Promise<void> {
        await this.page.goto(url);
    }

    public async verifyTitle(expectedTitle: string): Promise<void> {
        const text = (await this.title.textContent()) as string;
        console.log(text);

        await expect(this.page).toHaveTitle(expectedTitle);
    }

    public async clickGetStarted(): Promise<void> {
        return this.getStartedButton.click();
    }

    public async clickStarGitHub(): Promise<void> {
        return this.btnStarGitHub.click();
    }

    public async clickStarGazersGitHub(): Promise<void> {
        return this.btnStarGazersGitHub.click();
    }
}
