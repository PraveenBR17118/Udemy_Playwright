const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');

test('Login and verify iPhone X is available in the shop', async ({ page }) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getPracticeLoginPage();
  const shopPage = poManager.getShopPage();

  await loginPage.goTo();
  await loginPage.login('rahulshettyacademy', 'Learning@830$3mK2');
  await shopPage.waitForShopPage();

  await expect(shopPage.iphoneX).toBeVisible();
});