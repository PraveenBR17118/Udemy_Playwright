const { Given, When, Then } = require('@cucumber/cucumber');
const{expect} = require('@playwright/test');
const playwright = require('@playwright/test');
const { POManager } = require("../../pageobjects/POManager");

  

Given('a login to Ecommerce application with {string} and {string}', {timeout : 100*1000 },async function (username, password) 
{
    // Write code here that turns the phrase above into concrete actions
   

    this.tankMessageTxt = this.page.locator(".hero-primary");
    this.ordersBtn = this.page.locator("button[routerlink*='myorders']");
    this.tableBody = this.page.locator("tbody");
    this.tablRows = this.page.locator("tbody tr");
    this.orderIdDetailstext = this.page.locator(".col-text");
    
    await this.poManger.loginPage.goTo();
    await this.poManger.loginPage.validLogin(username, password);
});
  
When('Add {string} to Cart', async function (productName) 
{
    // Write code here that turns the phrase above into concrete actions
    await this.poManger.dashboardPage.searchProductAddCart(productName);
    await this.poManger.dashboardPage.navigateToCart();
});
  
Then('Verify {string} is displayed in the Cart', async function (productName) 
{
    // Write code here that turns the phrase above into concrete actions
    await this.poManger.cartPage.waitForTilesToLoad(productName);
    await this.poManger.cartPage.clickCheckoutBtn();
});
  
When('Enter valid details and Place the Order {string}', async function (username) 
{
    // Write code here that turns the phrase above into concrete actions
    //await this.poManger.cartPage.VerifyEmailId(username);
    await this.poManger.cartPage.enterCountry("Ind"," India")
    await this.poManger.cartPage.clickPlaceOrderBtn();

});
  
Then('Verify order is present in the OrderHistory', {timeout : 100*1000},async function () 
{
    // Write code here that turns the phrase above into concrete actions
    // verification failed
    await expect(this.tankMessageTxt).toHaveText(" Thankyou for the order. ");
    console.log("Below line of code is skipped");
    const orderId = await this.page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log("Order id is : "+orderId);

    await this.ordersBtn.click();
    //.ng-star-inserted th[scope='row']


    await this.tableBody.waitFor();
    const rows = await this.tablRows.count();


    for (let i = 0; i < rows; ++i) 
    {
      const rowOrderId = await this.tablRows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) 
        {

          await this.tablRows.nth(i).locator("button").first().click();
          break;
        }
      }
    const orderIdDetails = await this.orderIdDetailstext.textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();     

  });


  Given('a login to Ecommerce2 application with {string} and {string}', async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    const usrname = this.page.locator('input#username');
    const pwd = this.page.locator('[id=password]');
    const signbtn = this.page.locator('[id=signInBtn]');
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await this.page.title());
    await expect(this.page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await usrname.fill(username);
    await pwd.fill(password);
    await signbtn.click();

    


  });
  
  Then('Verify Error message is displayed', async function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    console.log(await this.page.locator('[style*=block]').textContent());
    await expect(this.page.locator('[style*=block]')).toContainText('Incorrect');
  });

  module.exports = {
    default: {
      paths: ['features/**/*.feature'],
      require: ['features/step_definitions/**/*.js'],
      format: ['progress']
    }
  };