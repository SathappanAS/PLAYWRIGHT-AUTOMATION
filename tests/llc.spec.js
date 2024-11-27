import {test,expect} from '@playwright/test';

test ('Playwright Special locator', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    expect(page.getByLabel('Check me out if you Love IceCreams!')).toBeChecked();
    await page.getByLabel('Employed').check();
    await page.getByLabel('Gender').selectOption('Female');
    await page.getByPlaceholder('Password').fill("abc123");
    await page.getByRole("button",{name: 'submit'}).click();
    const successText = await page.getByText(" The Form has been submitted successfully!");
    const textValidation= await page.getByText(" The Form has been submitted successfully!").isVisible();
    expect (textValidation).toBeTruthy();
    console.log(successText);
    await page.getByRole("link", {name : "Shop"}).click();

    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
});