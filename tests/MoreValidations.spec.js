const {test,expect} = require ('@playwright/test')

test("Popup validations", async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const framepage= await page.frameLocator('#courses-iframe');  // frame 
    await framepage.locator("li a[href*='lifetime-access']:visible").click(); //finding only visible elements
    const textcheck = await framepage.locator('.text h2').textContent();
    console.log(textcheck.split(" ")[1]); // print text by split space
})
    //await page.locator('#mousehover').hover();



    //await page.goto('https://www.google.com/');
    //await page.goBack();
    //await page.goForward();

    //await expect(page.locator('#displayed-text')).toBeVisible();
    //await page.locator('#hide-textbox').click();
    //await expect(page.locator('#displayed-text')).toBeHidden();

    //page.on('dialog',dialog=>dialog.accept()); //listener
    //await page.locator("#confirmbtn").click();

    test("Screenshot validations", async({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
       await expect(page.locator('#displayed-text')).toBeVisible();
       await page.locator('#displayed-text').screenshot({path:'partialScreenshot.png'});
       await page.locator('#hide-textbox').click();
       await page.screenshot({path: 'screenshot.png'});
       await expect(page.locator("#displayed-text")).toBeHidden();

    })

test.only('visual', async({page})=>{
    await page.goto("https://www.google.com");
    expect(await page.screenshot()).toMatchSnapshot('landing.png');
})