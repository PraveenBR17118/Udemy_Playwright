const base = require('@playwright/test');
const { APIUtils } = require("../utils/APIUtils");
const {request} = require('@playwright/test');
const loginPayLoad = {
    userEmail: "tanvitkashyap@gmail.com",
    userPassword: "Pp@12345",
  };
const orderPayLoad = {
    orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }],
  };




exports.customtest = base.test.extend({

    authenticatedPage : async({browser}, use)=> 
        {
            const context = await browser.newContext();
            const page = await context.newPage();
            const email = "tanvitkashyap@gmail.com";
            const pwd = "Pp@12345";
            const usrname = page.locator("input#userEmail");
            const pwdField = page.locator("input#userPassword");
            const signBtn = page.locator("input#login");


            await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
            await usrname.fill(email);
            await pwdField.fill(pwd);
            await signBtn.click();
            await page.waitForLoadState('networkidle');

            await use(page);
            //
            await context.close();
        },

        createOrder : async({},use)=>
            {
                const apiContext = await request.newContext();
                const apiUtils = new APIUtils(apiContext, loginPayLoad);
                const response = await apiUtils.createOrder(orderPayLoad);

                await use(response);
                //
                await apiContext.dispose();
            },
        testDataForOrder:
        {
            productName : 'ADIDAS ORIGINAL'
        }


    
})

