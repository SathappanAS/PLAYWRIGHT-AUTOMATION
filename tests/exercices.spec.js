const {test,expect} = require('@playwright/test');
const { clear } = require('console');

test('Exercis test cases ', async ({browser})=>
{
    const context=await browser.newContext(); 
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/");
    console.log(await page.title());

    const Login = page.locator(".theme-btn");
    await Login.nth(1).click();

    const eMail=page.locator("#email");

    await eMail.fill("sathappan.a.s@gmail.com");

    const loginClick=page.locator("#otp-login-btn");
    await loginClick.click();

    const specificSpanLocator = page.locator("a[class='F6o5n uni-ml-4 _9fH-o'] span");
    await specificSpanLocator.click();

    const LoginPage = page.locator("#email");
    await LoginPage.fill("sathappan.a.s@gmail.com");

  
});