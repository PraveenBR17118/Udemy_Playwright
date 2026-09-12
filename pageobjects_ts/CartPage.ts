//const { expect } = require("@playwright/test");

import {expect , type Page, type Locator} from '@playwright/test';


export class CartPage
{
    page : Page;
    cartTags : Locator;
    crtPrdName: Locator;
    checkoutBtn: Locator;
    countryFiled: Locator;
    countrySuggestion:Locator;
    emailStaticText: Locator;
    placeOrdrBtn:Locator;
    dropdown:Locator;

    constructor(page : Page)
    {
        this.page = page;
        this.cartTags = page.locator("div li");
        this.crtPrdName = page.locator("h3:has-text('ZARA COAT 3')");
        this.checkoutBtn = page.locator('text=Checkout');
        this.countryFiled = page.locator('[placeholder="Select Country"]');
        this.countrySuggestion = page.locator('.ta-results');
        this.emailStaticText = page.locator(".user__name [type='text']");
        this.placeOrdrBtn = page.locator(".action__submit");
        this.dropdown = page.locator(".ta-results [type='button']");


    }

    async waitForTilesToLoad(productName:string)
    {
        await this.cartTags.first().waitFor();
        const bol = await this.getProductLocator(productName);
        await expect(bol).toBeTruthy();
    }

    async clickCheckoutBtn()
    {
        await this.checkoutBtn.click();
    }

    async getProductLocator(productName : string)
    {
        return this.page.locator("h3:has-text('"+productName+"')");
    }


    async enterCountry(country: string,countryTile : string)
    {

        await this.countryFiled.pressSequentially(country);
        await this.countrySuggestion.waitFor();
        //const 
        const optionscount = await this.dropdown.count();
        for(let i =0 ; i < optionscount;i++)
        {
            const text  = await this.dropdown.nth(i).textContent();
            if(text === countryTile)
                {
                    await this.dropdown.nth(i).click();
                    break;
                }
        }
    }

    async verifyEmailID(email : string)
    {
        await expect(this.emailStaticText.first()).toHaveText(email);
    }

    async clickPlaceOrderBtn()
    {
        await this.placeOrdrBtn.click();
    } 
}


module.exports = {CartPage};