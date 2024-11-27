import {test,expect} from '@playwright/test';

test ('Playwright Special locator', async ({ page }) => {
    await page.goto("https://www.amazon.com/");
    //await page.getByRole('link', { name: 'Best Sellers' }).click();
    await page.getByRole('link', { name: 'Hello, sign in' }).click();
    await page.getByRole('textbox').fill('testing@test.com');
    await page.pause();
});