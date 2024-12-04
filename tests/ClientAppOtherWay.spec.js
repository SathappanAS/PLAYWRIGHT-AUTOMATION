const {test,expect} = require('@playwright/test');
const { clear } = require('console');

test('Client test cases ', async ({browser})=>
{
    const context=await browser.newContext(); 
    const page=await context.newPage();
    
    await page.goto('https://rahulshettyacademy.com/client', { waitUntil: 'load' });
    await page.getByPlaceholder("email@example.com").fill("sathappan.a.s@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("Chennai2024*");
    await page.getByRole("button",{name: "Login"}).click();

    await page.locator(".card-body").first().waitFor();
    await page.locator('.card-body').filter({hasText:"ZARA COAT 3"}).getByRole("button", {name:"Add To Cart"}).click();

    await page.getByRole("listitem").getByRole("button",{name: "Cart"}).click();

    await page.locator("div li").first().waitFor();

    await expect(page.getByText('ZARA COAT 3')).toBeVisible();

    await page.getByRole("listitem").getByRole("button",{name:'Checkout'}).click();

    await page.getByPlaceholder('Select Country').pressSequentially('ind');

    await page.getByRole("button",{name:"India"}).nth(1).click();

    await page.getByText("PLACE ORDER").click();

    await expect(page.getByText(" Thankyou for the order")).toBeVisible();


    await page.pause();

});

//npx playwright test tests/llc.spec.js