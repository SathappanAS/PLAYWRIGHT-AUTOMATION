//const {test,expect} = require('@playwright/test')

import {test,expect} from '@playwright/test'  //test,expect are function 

test('Loctors',async({page})=>{   //Loctors = test case name and page is fixture

    await page.goto("https://www.demoblaze.com/index.html"); //Before using any functions from the page fixture we have to use something called await keyword

    //click on  login button - property
    
    /*
  
    1. Basic Element Selection

        Example: Selecting by Class Name
        If the element has a class name, you can use the class selector (.):
            // const element = await page.locator('.my-class');
        
        Example: Selecting by ID :
        If the element has an ID, you can use the ID selector (#):
            // const element = await page.locator('#my-id');
        
        Example: Selecting by Tag Name 
        You can select by tag name directly, such as div, span, etc.
            // const element = await page.locator('div');
        
    2. Using CSS Selectors

        Example: Descendant Selector
        To find a child element inside a parent element:
            // const element = await page.locator('.parent-class .child-class');

        You can find elements based on attributes:
            const element = await page.locator('[name="username"]');
        Or to match a specific attribute value:
            const element = await page.locator('[type="submit"]');
    
        You can use pseudo-classes like :nth-child(), :first-child, etc.
            const element = await page.locator('ul li:nth-child(3)'); // Selects the 3rd list item
    
    3. Combining Selectors

        Complex Selector
                // const element = await page.locator('div.container > ul li.active');

                This selects an li with the class active inside a ul within a div with class container.

        Example: Wait for an Element

                const element = await page.locator('.my-class');
                await element.waitFor({ state: 'visible' });  // Wait for the element to be visible

    */

})