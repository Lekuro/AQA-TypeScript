import { Locator } from '@playwright/test';
// import { ModalComponent } from './modal.component';

export class HeaderComponent {
    public get gitHubButton(): Locator {
        return this.headerLocator.locator('a[aria-label="GitHub repository"]:visible');
        // return this.page.locator('nav a[href="https://github.com/microsoft/playwright"]');
    }

    private get discordButton(): Locator {
        return this.headerLocator.locator('a[aria-label="Discord server"]');
        // return this.page.locator('nav a[href="https://aka.ms/playwright/discord"]');
    }

    private get switchModesButton(): Locator {
        return this.headerLocator.locator('button[aria-label="Switch between dark and light mode (currently dark mode)"]');
    }

    private get searchButton(): Locator {
        return this.headerLocator.locator('button[aria-label="Search (Ctrl+K)"]');
    }

    public constructor(private readonly headerLocator: Locator) {}

    public async clickGitHubButton(): Promise<void> {
        await this.gitHubButton.click();
    }

    public async clickDiscordButton(): Promise<void> {
        await this.discordButton.click();
    }

    public async clickSearchButton(): Promise<void> {
        await this.searchButton.click();
        // this.modalComponent = new ModalComponent(this.headerLocator.locator('div[class="DocSearch-Modal"]'));
    }

    public async clickSwitchModesButton(): Promise<void> {
        return this.switchModesButton.click();
    }
}
