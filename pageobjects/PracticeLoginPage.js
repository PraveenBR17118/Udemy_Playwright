class PracticeLoginPage {
  constructor(page) {
    this.page = page;
    this.userName = page.locator('#username');
    this.password = page.locator('#password');
    this.terms = page.locator('#terms');
    this.signInButton = page.locator('#signInBtn');
  }

  async goTo() {
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  }

  async login(username, password) {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.terms.check();
    await this.signInButton.click();
  }
}

module.exports = { PracticeLoginPage };