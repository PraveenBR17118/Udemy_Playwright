const { test, expect } = require("@playwright/test");
const {customtest} = require('../utils/test-base');
//const {expect} = require('../playwright.config');
//const {customtest} = require('../tests/utils/fixture');
//json->String->js object
const dataset = JSON.parse(JSON.stringify((require('../utils/placeoderTestData.json'))));
const { POManager } = require("../pageobjects/POManager");

for(const data of dataset)
{



test(`@Web Client Login Playwright test for ${data.productName}`, async ({ page }) => {
  const poManger = new POManager(page);
//   const email = "tanvitkashyap@gmail.com";
//   const pwd = "Pp@12345";
//   const productName = "ZARA COAT 3";
  const tankMessageTxt = page.locator(".hero-primary");
  const ordersBtn = page.locator("button[routerlink*='myorders']");
  const tableBody = page.locator("tbody");
  const tablRows = page.locator("tbody tr");
  const orderIdDetailstext = page.locator(".col-text");

  

  await poManger.loginPage.goTo();
  await poManger.loginPage.validLogin(data.username, data.password);

  //await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  // await usrname.fill(email);
  // await pwdField.fill(pwd);
  // await signBtn.click();
  await poManger.dashboardPage.searchProductAddCart(data.productName);
  await poManger.dashboardPage.navigateToCart();

  // await page.pause();
  //Zara Coat
  // await cartBtn.click();
  //await cartTags.first().waitFor();

  await poManger.cartPage.waitForTilesToLoad(data.productName);
  await poManger.cartPage.clickCheckoutBtn();

  await poManger.cartPage.enterCountry("ind", " India");

  //await poManger.ordersReviewPage.searchCountryAndSelect("ind", " India");
  await poManger.ordersReviewPage.VerifyEmailId(data.username);
  await poManger.cartPage.clickPlaceOrderBtn();



  //

  await expect(tankMessageTxt).toHaveText(" Thankyou for the order. ");
  const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log("Order id is : "+orderId);

  await ordersBtn.click();
  //.ng-star-inserted th[scope='row']


  await tableBody.waitFor();
  const rows = await tablRows.count();


  for (let i = 0; i < rows; ++i) 
      {
      const rowOrderId = await tablRows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) 
          {

          await tablRows.nth(i).locator("button").first().click();
          break;
           }
      }
  const orderIdDetails = await orderIdDetailstext.textContent();
  expect(orderId.includes(orderIdDetails)).toBeTruthy();     


  //

//   const orderId = poManger.ordersReviewPage.SubmitAndGetOrderId();

//   console.log("Order id is : " + orderId);

//   await poManger.dashboardPage.navigateToOrders();

//   await poManger.ordersHistoryPage.searchOrderAndSelect(orderId);
//   expect(
//     orderId.includes(await poManger.ordersHistoryPage.getOrderId())
//   ).toBeTruthy();
});



// customtest(`Client App login`, async ({ page, testDataForOrder }) => {
//   const poManager = new POManager(page);
//   //js file- Login js, DashboardPage
//   const products = page.locator(".card-body");
//   const loginPage = poManager.getLoginPage();
//   await loginPage.goTo();
//   await loginPage.validLogin(
//     testDataForOrder.username,
//     testDataForOrder.password
//   );
//   const dashboardPage = poManager.getDashboardPage();
//   await dashboardPage.searchProductAddCart(testDataForOrder.productName);
//   await dashboardPage.navigateToCart();

//   const cartPage = poManager.getCartPage();
//   await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
//   await cartPage.Checkout();
// });
}

customtest("Client Login Playwright - place order", async ({ page , testDataForOrder}) => {
  const poManger = new POManager(page);
//   const email = "tanvitkashyap@gmail.com";
//   const pwd = "Pp@12345";
//   const productName = "ZARA COAT 3";
  const tankMessageTxt = page.locator(".hero-primary");
  const ordersBtn = page.locator("button[routerlink*='myorders']");
  const tableBody = page.locator("tbody");
  const tablRows = page.locator("tbody tr");
  const orderIdDetailstext = page.locator(".col-text");

  

  await poManger.loginPage.goTo();
  await poManger.loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);

  //await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  // await usrname.fill(email);
  // await pwdField.fill(pwd);
  // await signBtn.click();
  await poManger.dashboardPage.searchProductAddCart(testDataForOrder.productName);
  await poManger.dashboardPage.navigateToCart();

  // await page.pause();
  //Zara Coat
  // await cartBtn.click();
  //await cartTags.first().waitFor();

  await poManger.cartPage.waitForTilesToLoad(testDataForOrder.productName);
  await poManger.cartPage.clickCheckoutBtn();
  })
