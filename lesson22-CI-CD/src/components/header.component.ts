import { Locator } from '@playwright/test';

export class HeaderComponent {
    public get gitHubButton(): Locator {
        return this.headerLocator.locator('a[aria-label="GitHub repository"]:visible');
    }

    private get discordButton(): Locator {
        return this.headerLocator.locator('a[aria-label="Discord server"]');
    }

    private get switchModesButton(): Locator {
        return this.headerLocator.locator('button[aria-label*="Switch between dark and light mode"]');
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
    }

    public async clickSwitchModesButton(): Promise<void> {
        await this.switchModesButton.click();
    }
}
