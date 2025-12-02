import { Page } from '@playwright/test';
import { JiraBasePage } from './playwright-base.page';

export class JiraPage extends JiraBasePage {
    public constructor(page: Page, url: string) {
        super(page, url);
    }
}
