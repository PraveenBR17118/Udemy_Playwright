//const { expect } = require("@playwright/test");

import {expect , type Page, type Locator} from '@playwright/test';

export class OrdersReviewPage 
{
  page: Page
  country: Locator;
  dropdown: Locator;
  emailId: Locator;
  submit : Locator;
  orderConfirmationText : Locator;
  orderId : Locator;



  constructor(page : Page) 
  {
    this.page = page;
    this.country = page.locator('[placeholder="Select Country"]');
    this.dropdown = page.locator(".ta-results");
    this.emailId = page.locator(".user__name [type='text']").first();
    this.submit = page.locator(".action__submit");
    this.orderConfirmationText = page.locator(".hero-primary");
    this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
    //this.countrySuggestion = page.locator('.ta-results');
  }
  async searchCountryAndSelect(countryCode : string, countryName : string) 
  {


        //
        await this.country.pressSequentially(countryCode);
        await this.dropdown.waitFor();
        const optionscount : any = await this.dropdown.count();
        for(let i =0 ; i < optionscount;i++)
        {
          let text :any ;
             text  = await this.dropdown.nth(i).textContent();
            if(text === countryName)
                {
                    await this.dropdown.nth(i).click();
                    break;
                }
        }

        //this.page.pause();





        //

    // await this.country.pressSequentially(countryCode),{delay:100};
    // // await this.country.fill(countryCode,{delay:100});
    // await this.dropdown.waitFor();
    // const optionsCount = await this.dropdown.locator("button").count();
    // for (let i = 0; i < optionsCount; ++i) 
    //     {
    //         const text = await this.dropdown.locator("button").nth(i).textContent();
    //         if (text.trim() === countryName) 
    //             {
    //                 await this.dropdown.locator("button").nth(i).click();
    //                 break;
    //             }
    //     }
  }

  async VerifyEmailId(username: string) {
    await expect(this.emailId).toHaveText(username);
  }

  async SubmitAndGetOrderId() 
  {
    //this.page.pause();
    await this.submit.click();
    await expect(this.orderConfirmationText).toHaveText(
      " Thankyou for the order. "
    );
    await this.page.pause();
    const order =await this.orderId.textContent();
    console.log(order);
    return order
  }
}
module.exports = { OrdersReviewPage };
