const {test,expect, request} = require('@playwright/test');
const { clear } = require('console');
const { promises } = require('fs');

const loginPayload = {userEmail: "sathappan.a.s@gmail.com", userPassword: "Chennai2024*"} 

test.beforeAll( async()=>
{
  const apiContext =  await request.newContext();
  const loginResponse= await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',{data:loginPayload})//200//201/202
  expect((await loginResponse).ok()).toBeTruthy();
  const loginResponseJson = loginResponse.json();
  const token = loginResponse.token();
});








test.beforeEach(  ()=>{


});


//before all the test cases - test 1, test 2, test 3 (execute once)

test('Client test cases ', async ({browser})=>
    {
        const context=await browser.newContext(); 
        const page=await context.newPage();
        
        await page.goto('https://rahulshettyacademy.com/client', { waitUntil: 'load' });
      
        const emailID = "sathappan.a.s@gmail.com";
        const products=page.locator(".card-body");
        const eMail = page.locator("#userEmail");
        const Password = page.locator("#userPassword");
        const Login = page.locator("#login");
        await eMail.fill(emailID);
        await Password.fill("Chennai2024*");
        await Login.click();
        //await page.waitForLoadState('networkidle');
        await page.locator(".card-body").first().waitFor();
        const titles = page.locator(".card-body").allTextContents();
        console.log(titles);
    
    
        const ProductName = 'ZARA COAT 3';
        const count = await products.count();
    
        for(let i=0;i<count;++i){
            if (await products.nth(i).locator("b").textContent()===ProductName)
                {
                    await products.nth(i).locator("text = Add To Cart").click();
                    break;
                }
        }
        await page.locator(".btn.btn-custom[routerlink='/dashboard/cart']").click(); 
    
    
        await page.locator("div li").first().waitFor();
        const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
        expect(bool).toBeTruthy();
    
        await page.locator("[type='button']").last().click();
    
    
        await page.locator("input[placeholder='Select Country']").pressSequentially("ind");
    
        const DropDownsOption = page.locator(".ta-results ");
        await DropDownsOption.waitFor();
        const optionCount = await DropDownsOption.locator("button").count();
    
            for (let i=0;i<optionCount;++i){
                const text= await DropDownsOption.locator("button").nth(i).textContent();
                    if (text === " India")
                    {
                        await DropDownsOption.locator("button").nth(i).click();
                        break;
                    }
            }
    
        await expect(page.locator(".user__name [type='text']").first()).toHaveText(emailID);
        await page.locator(".action__submit").click();
    
        await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
        const OrderID= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    
        console.log(OrderID);
    
        await page.locator("button[routerlink*=myorder]").click();
    
        await page.locator("tbody").waitFor();
    
        const rows = await page.locator("tbody tr");
    
        for (let i=0;i<await rows.count();i++){
            const rowOrderId = await rows.nth(i).locator("th").textContent();
            {
                if (OrderID.includes(rowOrderId)) {
                    await rows.nth(i).locator("button").first().click();
                    break;
            }
        }}
    
        const orderIdDetails = await page.locator(".col-text").textContent();
        expect(OrderID.includes(orderIdDetails)).toBeTruthy();
        //ZARA COAT 3
        //ADIDAS ORIGINAL
    });