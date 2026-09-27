const { LoginPage } = require("../pageobjects/LoginPage");
const { PracticeLoginPage } = require("../pageobjects/PracticeLoginPage");
const { ShopPage } = require("../pageobjects/ShopPage");
const { DashboardPage } = require("../pageobjects/DashboardPage");
const { CartPage } = require("../pageobjects/CartPage");
const {OrdersReviewPage} = require('../pageobjects/OrdersReviewPage');
const {OrdersHistoryPage} = require('../pageobjects/OrdersHistoryPage');


class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.practiceLoginPage = new PracticeLoginPage(this.page);
    this.shopPage = new ShopPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.ordersHistoryPage = new OrdersHistoryPage(this.page);
    this.ordersReviewPage = new OrdersReviewPage(this.page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getPracticeLoginPage() {
    return this.practiceLoginPage;
  }

  getShopPage() {
    return this.shopPage;
  }

  getDashboardPage() {
    return this.dashboardPage;
  }

  getCartPage() {
    return this.cartPage;
  }
  getOrdersHistoryPage() {
    return this.ordersHistoryPage;
  }

  getOrdersReviewPage() {
    return this.ordersReviewPage;
  }
}

module.exports = { POManager };
