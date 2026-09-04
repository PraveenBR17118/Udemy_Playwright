const { test, expect, request } = require("@playwright/test");

test("Security test request intercept", async ({ page }) => {
  // login and reach orders page
  //    --   https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a89e3b821054ba465ea087e
  // Continue method is used to intercept the request calls.
  // route.continue({headers,url : 'https://google.com', cookkiee})

  //const email = "tanvitkashyap@gmail.com";
  //const pwd = "Pp@12345";

  const email = "anshika@gmail.com";
  const pwd = "Iamking@000";

  const productName = "ZARA COAT 3";
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.getByPlaceholder("email@example.com").fill(email);
  await page.getByPlaceholder("enter your passsword").fill(pwd);
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();

  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    (route) =>
      route.continue({
        url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f676546455",
      })
  );

  await page.locator("button:has-text('View')").first().click();

  await page.pause();
});
