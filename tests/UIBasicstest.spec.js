const {test,expect} = require('@playwright/test');
//const {expect} = require('../playwright.config');

test('Browser context Playwright test', async ({browser})=>
{
    
    const context = await browser.newContext();
    const page =  await context.newPage();

    const usrname = page.locator('input#username');
    const pwd = page.locator('[id=password]');
    const signbtn = page.locator('[id=signInBtn]');
    const cardTitles = page.locator('.card-body h4');


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await usrname.fill("praveenbr.1991@gmail.com");
    await pwd.fill("Learning@830$3mK2");
    await signbtn.click();

    console.log(await page.locator('[style*=block]').textContent());
    await expect(page.locator('[style*=block]')).toContainText('Incorrect');


    await usrname.fill("");
    await usrname.fill("rahulshettyacademy");
    // await pwd.fill("");
    // await pwd.fill('Learning@830$3mK2)');
    await signbtn.click();

    //console.log(await page.locator('.card-body h4').textContent());
    // console.log(await cardTitles.nth(0).textContent());

    // console.log(await cardTitles.last().textContent());

    // console.log(await cardTitles.first().textContent());
    const allTitles =await cardTitles.allTextContents();
    console.log(allTitles);



});

test('UI Controls', async ({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const usrname = page.locator('input#username');
        const pwd = page.locator('[id=password]');
        const signbtn = page.locator('[id=signInBtn]');
        const sltDrpDwn = page.locator('select.form-control');
        const usrRadioBtn = page.locator('[value="user"]');
        const popUpOkBtn = page.locator('[id="okayBtn"]');
        const agreeChckBox = page.locator('[id="terms"]');
        const blinkTxt = page.locator('[href*="documents-request"]');

        await usrname.fill("rahulshettyacademy");
        await pwd.fill("Learning@830$3mK2");
        await sltDrpDwn.selectOption("consult");
        await usrRadioBtn.last().click();
        await popUpOkBtn.click();
        console.log(usrRadioBtn.last().isChecked());
        expect(usrRadioBtn).toBeChecked();

        await agreeChckBox.click();

        await expect(agreeChckBox).toBeChecked();

        await agreeChckBox.uncheck();

        expect(await agreeChckBox.isChecked()).toBeFalsy();    
        
        
        await expect(blinkTxt).toHaveAttribute('class', 'blinkingText');

        //await signbtn.click();
        //await page.pause();

    
    });

test('Child window handling',async ({browser})=>
{
    const context = await browser.newContext();
    const page =  await context.newPage();
    const blinkTxt = page.locator('[href*="documents-request"]');
    const usrname = page.locator('input#username');

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

   const [newPage] =  await Promise.all(
    [
        context.waitForEvent('page'), // listen for any new page pending,rejected,fulfilled

    blinkTxt.click(),
    ]) // new page is opened

    const neText = await newPage.locator('.red').textContent();
    const arrayText = neText.split("@");
    const domain = arrayText[1].split(" ")[0];
   // console.log(domain);

    await usrname.fill(domain);
    console.log(await usrname.inputValue());


    


})