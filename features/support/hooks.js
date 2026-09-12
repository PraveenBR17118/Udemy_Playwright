//const{expect} = require('@playwright/test');
const playwright = require('@playwright/test');
const { POManager } = require("../../pageobjects/POManager");
const { Before , After, AfterStep, Status} = require('@cucumber/cucumber');




Before(async function () {
    this.browser = await playwright.chromium.launch({
        headless : false
      });
      this.context  = await this.browser.newContext();
      this.page = await this.context.newPage();
      this.poManger = new POManager(this.page);
    //this.count = 0;
  });

  AfterStep( async function ({result}) {
    // This hook will be executed after all steps, and take a screenshot on step failure
    if (result.status === Status.FAILED) {
      //this.driver.takeScreenshot();
      await this.page.screenshot({path : "screenshot1.png"});
    }
  });


// Asynchronous Promise
After(function () {
    // Assuming this.driver is a selenium webdriver
    //return this.driver.quit();
    console.log("I am the last to execute");
  });