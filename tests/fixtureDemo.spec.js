const {test,expect,request} = require('@playwright/test');
const {customtest}= require('../utils/fixture.js')


customtest('Fixtures demo',async({ authenticatedPage, createOrder,testDataForOrder })=>
    {
        await authenticatedPage.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");

        await authenticatedPage.locator("button[routerlink*='myorders']").click();
        await authenticatedPage.locator("tbody").waitFor();

        await expect(authenticatedPage.getByText(createOrder.orderId)).toBeVisible();

        console.log(testDataForOrder.productName);
        // login to application/Create order and verify if the order is created from history page


    } );