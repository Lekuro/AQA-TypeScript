import { test, expect } from '@playwright/test';

test.describe('Expense Tracker App', () => {
    const txnIncomeName = 'income 1';
    const txnExpenseName = 'expense 1';
    const txnAmount = '1.00';
    const zeroAmount = '0.00';
    test('should be able to add income transaction', async ({ page }) => {
        await page.goto('/');
        await page.fill('input#description', txnIncomeName);
        await page.fill('input#transactionamount', txnAmount);
        await page.click('form button');
        await page.waitForTimeout(1000);
        await expect(page.locator(`//li[text()='${txnIncomeName}']`)).toBeVisible();
        const incomeBalance = await page.locator('.money.plus').textContent();
        await expect(incomeBalance).toBe(txnAmount);
        const totalBalance = (await page.locator('#balance').textContent())?.slice(1);
        await expect(totalBalance).toBe(txnAmount);
    });

    test('should be able to add expense transaction', async ({ page }) => {
        await page.goto('/');
        await page.fill('input#description', txnExpenseName);
        await page.fill('input#transactionamount', '-' + txnAmount);
        await page.click('form button');
        await page.waitForTimeout(1000);
        await expect(page.locator(`//li[text()='${txnExpenseName}']`)).toBeVisible();
        const expenseBalance = await page.locator('.money.minus').textContent();
        await expect(expenseBalance).toBe(txnAmount);
        const totalBalance = (await page.locator('#balance').textContent())?.slice(2);
        await expect(totalBalance).toBe(txnAmount);
    });

    test('should be able to delete income transaction', async ({ page }) => {
        await page.goto('/');
        await page.fill('input#description', txnIncomeName);
        await page.fill('input#transactionamount', txnAmount);
        await page.click('form button');
        await page.waitForTimeout(1000);
        await page.locator(`//li[text()='${txnIncomeName}']/button`).click();
        await page.waitForTimeout(1000);
        const incomeBalance = await page.locator('.money.plus').textContent();
        await expect(incomeBalance).toBe(zeroAmount);
        const totalBalance = (await page.locator('#balance').textContent())?.slice(1);
        await expect(totalBalance).toBe(zeroAmount);
    });

    test('should be able to delete expense transaction', async ({ page }) => {
        await page.goto('/');
        await page.fill('input#description', txnExpenseName);
        await page.fill('input#transactionamount', '-' + txnAmount);
        await page.click('form button');
        await page.waitForTimeout(1000);
        await page.locator(`//li[text()='${txnExpenseName}']/button`).click();
        const expenseBalance = await page.locator('.money.minus').textContent();
        await expect(expenseBalance).toBe(zeroAmount);
        const totalBalance = (await page.locator('#balance').textContent())?.slice(1);
        await expect(totalBalance).toBe(zeroAmount);
    });

    test('balance should counts correctly', async ({ page }) => {
        await page.goto('/');
        await page.fill('input#description', txnIncomeName);
        await page.fill('input#transactionamount', txnAmount);
        await page.click('form button');
        await page.waitForTimeout(1000);
        await page.fill('input#description', txnExpenseName);
        await page.fill('input#transactionamount', '-' + txnAmount);
        await page.click('form button');
        await page.waitForTimeout(1000);
        const totalBalance = (await page.locator('#balance').textContent())?.slice(1);
        await expect(totalBalance).toBe(zeroAmount);
    });
});
