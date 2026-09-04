const {test,expect} = require('@playwright/test');
//const {expect} = require('../playwright.config');


test('Playwright Special Locators', async ({page})=>
    {

        const checkMeChkBox = page.getByLabel("Check me out if you Love IceCreams!");
        const emply = page.getByLabel("Employed");
        const gender = page.getByLabel("Gender");
        const pwd = page.getByPlaceholder("Password");
        const submitBtn = page.getByRole("button",{name:'Submit'});
        const successText = page.getByText("Success! The Form has been submitted successfully!.");
        const shpLink = page.getByRole("link",{name: 'Shop'});

        await page.goto("https://rahulshettyacademy.com/angularpractice");

        await checkMeChkBox.check();
        await emply.check();
        await gender.selectOption("Male");
        await pwd.fill("abc123");
        await submitBtn.click();
        expect(await successText.isVisible()).toBeTruthy();

        // 5 seconds default timeout for expect assertions
        await expect( successText ).toBeVisible({timeout: 10_000});
        await shpLink.click();

        await page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button").click();

    })




test('Playwright Test level timeout', async ({page})=>
    {
    
        const slowexpect = expect.configure({timeout :9000});
        const checkMeChkBox = page.getByLabel("Check me out if you Love IceCreams!");
        const emply = page.getByLabel("Employed");
        const gender = page.getByLabel("Gender");
        const pwd = page.getByPlaceholder("Password");
        const submitBtn = page.getByRole("button",{name:'Submit'});
        const successText = page.getByText("Success! The Form has been submitted successfully!.");
        const shpLink = page.getByRole("link",{name: 'Shop'});
        const shopHeader = page.locator(".my-4");

        await page.goto("https://rahulshettyacademy.com/angularpractice");

        await checkMeChkBox.check();
        await emply.check();
        await gender.selectOption("Male");
        await pwd.fill("abc123");
        await submitBtn.click();
        expect(await successText.isVisible()).toBeTruthy();

        // 5 seconds default timeout for expect assertions
        await expect( successText ).toBeVisible();
        await shpLink.click();


        await slowexpect(shopHeader.first()).toHaveText("Shop Name");


        await page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button").click();

    }
)