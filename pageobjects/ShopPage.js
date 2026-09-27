class ShopPage {
  constructor(page) {
    this.page = page;
    this.iphoneX = page.getByRole('heading', { name: 'iphone X' });
  }

  async waitForShopPage() {
    await this.page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop');
  }
}

module.exports = { ShopPage };