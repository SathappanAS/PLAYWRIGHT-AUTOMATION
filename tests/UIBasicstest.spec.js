const {test,expect} = require('@playwright/test');
const { clear } = require('console');
const { promises } = require('fs');

test('Browser Context  Playwright test', async ({browser})=>
    {
        const context=await browser.newContext(); 
        const page=await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());

        const usrName=page.locator('#username');
        const signIn=page.locator('#signInBtn');
        const CardTitles=page.locator(".card-body a");

        await usrName.fill("rahulshetty");
        await page.locator("[type='password']").fill("learning");
        await signIn.click();
        console.log(await page.locator("[style*='block']").textContent());
        await expect(page.locator("[style*='block']")).toContainText('Incorrect');

        await usrName.fill("rahulshettyacademy");
        await page.locator("[type='password']").fill("learning");
        await signIn.click();

        //console.log(await CardTitles.first().textContent());
        //console.log(await CardTitles.nth(1).textContent());
        console.log(await CardTitles.allTextContents());

        const allCardTitle=await CardTitles.allTextContents();
    });


test('Page Playwright test', async ({page})=>
    {
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
    }); 

test('UI Controls', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const usrName=page.locator('#username');
    const signIn=page.locator('#signInBtn');

    /*Select Dropdown */
    const dropdown=page.locator("select.form-control");
    await dropdown.selectOption("consult");
    /*Select Radio Button*/
    const RadioButton=page.locator(".radiotextsty");
    await RadioButton.last().click();
    /*Click Ok Button from dialog box*/
    await page.locator("#okayBtn").click();
    /*Boolean for dropdown*/
    console.log(await page.locator(".radiotextsty").last().isChecked());
    /*assertion for dropdown*/
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    /*checkbox validation*/
    const TermsAndConditionCheckBox = page.locator("#terms");
    await TermsAndConditionCheckBox.click();
    /*checkbox assertion for tobechecked*/
    await expect(TermsAndConditionCheckBox).toBeChecked();
    /*uncheck the checkbox*/
    await TermsAndConditionCheckBox.uncheck();
    /*checkbox assertion for uncheck*/
    expect(await TermsAndConditionCheckBox.isChecked()).toBeFalsy();
    /*Blink Text Validation*/
    const DocumentLink = page.locator("[href*='documents-request']");
    await expect(DocumentLink).toHaveAttribute('class', 'blinkingText');
     /*playwright inspector*/
    // await page.pause(); 
});

test.only('Child Windows Handling', async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const DocumentLink = page.locator("[href*='documents-request']");
    
    const [newPage]=await Promise.all([
        context.waitForEvent('page'),
        DocumentLink.click()]
    )
 
    const text = await newPage.locator(".red").textContent();

    const arrayText=text.split("@")
    const Domain = arrayText[1].split(" ")[0]
    console.log(Domain);
    
    const usrName=page.locator('#username');
    await usrName.fill(Domain);
    //await page.pause();
    console.log(await usrName.textContent());
});