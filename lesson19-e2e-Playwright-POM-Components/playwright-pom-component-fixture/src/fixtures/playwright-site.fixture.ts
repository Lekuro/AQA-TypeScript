import { test as base } from '@playwright/test';
import { ConfigService } from '../services/config.service';
import { MainPage } from '../pages/main.page';

interface PlaywrightSiteFixture {
    mainPage: MainPage;
    configService: ConfigService;
}

export const test = base.extend<PlaywrightSiteFixture>({
    mainPage: async ({ browser, configService }, use) => {
        const context = await browser.newContext({
            recordVideo: {
                dir: 'test-results/videos'
            }
        });
        const page = await context.newPage();
        const mainPage = new MainPage(page, configService.config.uiConfig.playwrightBaseUrl);
        await mainPage.goTo();
        await use(mainPage); // await use(mainPage, context);

        // disposal
        await page.close();
        await context.close();
    },
    configService: async ({ browserName }, use) => {
        console.log(browserName);
        const configService = new ConfigService();
        await use(configService);
    }
});
