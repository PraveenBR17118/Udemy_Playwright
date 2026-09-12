import {expect , type Page, type Locator} from '@playwright/test';

export class LoginPage
{

    page : Page;
    userName :Locator;
    password : Locator;
    signInbutton : Locator;



    constructor(page : Page)
    
    {
        this.page = page;
        this.userName = page.locator("input#userEmail");
        this.password = page.locator("input#userPassword");
        this.signInbutton = page.locator("input#login");

    }
    async validLogin(email : string ,pwd : string)
    {
        await this.userName.fill(email);
        await this.password.fill(pwd);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');

    }

    async goTo()
    {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

}

module.exports = {LoginPage}