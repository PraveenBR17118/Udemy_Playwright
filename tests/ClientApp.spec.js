const {test,expect} = require('@playwright/test');
//const {expect} = require('../playwright.config');


test('Client Login Playwright test', async ({page})=>
        {

            const productName = 'ZARA COAT 3';
            const usrname = page.locator("input#userEmail");
            const pwdField = page.locator("input#userPassword");
            const signBtn = page.locator("input#login");
            const cardBody = page.locator(".card-body b");
            const products = page.locator(".card-body");
            const cartBtn = page.locator("[routerlink*='cart']");
            const crtPrdName = page.locator("h3:has-text('ZARA COAT 3')");
            const cartTags = page.locator("div li");
            const checkoutBtn = page.locator('text=Checkout');
            const countryFiled = page.locator('[placeholder="Select Country"]');
            const countrySuggestion = page.locator('.ta-results');
            const emailStaticText = page.locator(".user__name [type='text']");
            const placeOrdrBtn = page.locator(".action__submit");
            const tankMessageTxt = page.locator(".hero-primary");
            const ordersBtn = page.locator("button[routerlink*='myorders']");
            const tableBody = page.locator("tbody");
            const tablRows = page.locator("tbody tr");
            const orderIdDetailstext = page.locator(".col-text");

            const email = "tanvitkashyap@gmail.com";
            const pwd = "Pp@12345";


            await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
            await usrname.fill(email);
            await pwdField.fill(pwd);
            await signBtn.click();
            await page.waitForLoadState('networkidle');


            // Alternative wait
            //await page.locator(".card-body b").first().waitFor();

            await cardBody.first().waitFor();

            const titles = await cardBody.allTextContents();
            //console.log(await cardBody.first().textContent());
            
            console.log(titles);
            const cun = await products.count();
            for(let i =0;i<cun;i++)
                {
                    if(await products.nth(i).locator("b").textContent() === productName)
                        {

                            // add the product to cart
                            await products.nth(i).locator("text= Add To Cart").click();
                            
                            break;

                        }
                }

           // await page.pause();
            //Zara Coat
            await cartBtn.click();
            await cartTags.first().waitFor();
            const bol = await crtPrdName.isVisible();
            expect(bol).toBeTruthy();
            await checkoutBtn.click();
            // new method pressSequentially
            await countryFiled.pressSequentially("ind");
            await countrySuggestion.waitFor();
            const dropdown = page.locator(".ta-results [type='button']");
            const optionscount = await dropdown.count();
            for(let i =0 ; i < optionscount;i++)
                {
                    const text  = await dropdown.nth(i).textContent();
                    if(text === " India")
                        {
                            await dropdown.nth(i).click();
                            break;
                        }
                }
            
            await page.pause();
            //await page.locator("//div[@class='payment__cc']//div[2]//input[1]")
            // const personalInformation = page.locator('.row div.title');
            // let prscount = await personalInformation.count();
            // console.log(prscount);

            // for(let i = 0;i<prscount; i++)
            //     {
            //         let text = personalInformation.nth(i).textContent();
            //         if(text === "CVV Code ")
            //             {
            //                 personalInformation.nth(i).locator('input').fill("123")                        }
            //     }
            
                // const nameField = page.locator("div:has-text('Name on Card ')");
                // await nameField.fill("PRAVEEN B R");
                // const couponField = page.locator("[name='coupon']");
                // await couponField.fill("123");
            
            await expect(emailStaticText.first()).toHaveText(email);
            await placeOrdrBtn.click();
            await expect(tankMessageTxt).toHaveText(" Thankyou for the order. ");
            const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
            console.log("Order id is : "+orderId);

            await ordersBtn.click();
            //.ng-star-inserted th[scope='row']


            await tableBody.waitFor();
            const rows = await tablRows.count();


            for (let i = 0; i < rows; ++i) 
                {
                const rowOrderId = await tablRows.nth(i).locator("th").textContent();
                if (orderId.includes(rowOrderId)) 
                    {

                    await tablRows.nth(i).locator("button").first().click();
                    break;
                     }
                }
            const orderIdDetails = await orderIdDetailstext.textContent();
            expect(orderId.includes(orderIdDetails)).toBeTruthy();     

        });