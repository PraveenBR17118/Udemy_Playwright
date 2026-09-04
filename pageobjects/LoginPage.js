class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.userName = page.locator("input#userEmail");
        this.password = page.locator("input#userPassword");
        this.signInbutton = page.locator("input#login");

    }
    async validLogin(email,pwd)
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