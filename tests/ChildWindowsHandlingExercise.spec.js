const {test,expect} = require('@playwright/test');
const { clear } = require('console');
const { promises } = require('fs');


test('Child Windows Handling', async({browser})=>
    {
        const context=await browser.newContext();
        const page=await context.newPage();
        await page.goto("https://www.discover.com/online-banking/");
        
        const HelpYouFindanAccount = page.locator("[target='_blank']").first();
        
        const [newPage]=await Promise.all([
            context.waitForEvent('page'),
            HelpYouFindanAccount.click()]
        )

        const TakeQuiz = newPage.locator('#get-started-button');
        await TakeQuiz.click();

        await page.pause();
        
    });