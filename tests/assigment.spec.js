const {test,expect} = require('@playwright/test');
//const { clear } = require('console');

test('Page Playwright test', async ({page})=>
    {
    await page.goto("https://rahulshettyacademy.com/client");
    console.log(await page.title());
    
    const Email = page.locator("#userEmail");
    await Email.fill("anshika@gmail.com");

    const Password = page.locator('#userPassword');
    await Password.fill("Iamking@000");

    const Login = page.locator("[value='Login']");
    await Login.click();
    
    //await page.waitForLoadState('networkidle');
    
    await page.locator(".card-body b").first().waitFor();   

    const titles=await page.locator(".card-body b").allTextContents();

    console.log(titles);

    })