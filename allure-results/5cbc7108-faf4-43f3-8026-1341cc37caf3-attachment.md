# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebAPIPart2.spec.js >> Client Login Playwright test
- Location: tests/WebAPIPart2.spec.js:44:1

# Error details

```
TimeoutError: page.goto: Timeout 10000ms exceeded.
Call log:
  - navigating to "https://rahulshettyacademy.com/client/#/auth/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e28]:
      - paragraph [ref=e29]:
        - generic [ref=e30]: Register to sign in with your personal account
      - generic [ref=e31]:
        - heading "Log in" [level=1] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Email
            - textbox "email@example.com" [ref=e36]
          - generic [ref=e37]:
            - generic [ref=e38]: Password
            - textbox "enter your passsword" [ref=e39]
          - button "Login" [ref=e40] [cursor=pointer]
        - link "Forgot password?" [ref=e41] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e42] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e43]:
    - heading "Why People Choose Us?" [level=1] [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e49]: 
        - generic [ref=e51]:
          - heading "3546540" [level=1]
          - paragraph [ref=e52]: Successfull Orders
      - generic [ref=e53]:
        - generic [ref=e54]: 
        - generic [ref=e56]:
          - heading "37653" [level=1]
          - paragraph [ref=e57]: Customers
      - generic [ref=e58]:
        - generic [ref=e59]: 
        - generic [ref=e61]:
          - heading "3243" [level=1]
          - paragraph [ref=e62]: Sellers
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e65]: 
        - generic [ref=e67]:
          - heading "4500+" [level=1]
          - paragraph [ref=e68]: Daily Orders
      - generic [ref=e69]:
        - generic [ref=e70]: 
        - generic [ref=e72]:
          - heading "500+" [level=1]
          - paragraph [ref=e73]: Daily New Customer Joining
```

# Test source

```ts
  1   | 
  2   | 
  3   | // Login UI -> .json
  4   | 
  5   | // test browser -> .json, cart-, order, orderdetails, orderhistory
  6   | 
  7   | const {test, expect, request} = require('@playwright/test');
  8   | 
  9   | let webContext;
  10  | const email = "tanvitkashyap@gmail.com";
  11  | 
  12  | test.beforeAll(async({browser})=>
  13  |     {
  14  |         
  15  |         
  16  |         const pwd = "Pp@12345";
  17  | 
  18  |         
  19  | 
  20  |         const context = await browser.newContext();
  21  |         const page = await context.newPage();
  22  | 
  23  | 
  24  |         const usrname = page.locator("input#userEmail");
  25  |         const pwdField = page.locator("input#userPassword");
  26  |         const signBtn = page.locator("input#login");
  27  | 
> 28  |         await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
      |                    ^ TimeoutError: page.goto: Timeout 10000ms exceeded.
  29  |         await usrname.fill(email);
  30  |         await pwdField.fill(pwd);
  31  |         await signBtn.click();
  32  |         await page.waitForLoadState('networkidle');
  33  | 
  34  |         await context.storageState({path: 'state.json'});
  35  | 
  36  |         webContext = await browser.newContext({storageState:'state.json'});
  37  | 
  38  | 
  39  |     }
  40  | 
  41  | )
  42  | 
  43  | 
  44  | test('Client Login Playwright test', async ({})=>
  45  |     {
  46  | 
  47  |         const productName = 'ZARA COAT 3';
  48  |         
  49  |         const page = await webContext.newPage();
  50  |         await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  51  | 
  52  | 
  53  |         const cardBody = page.locator(".card-body b");
  54  |         const products = page.locator(".card-body");
  55  |         const cartBtn = page.locator("[routerlink*='cart']");
  56  |         const crtPrdName = page.locator("h3:has-text('ZARA COAT 3')");
  57  |         const cartTags = page.locator("div li");
  58  |         const checkoutBtn = page.locator('text=Checkout');
  59  |         const countryFiled = page.locator('[placeholder="Select Country"]');
  60  |         const countrySuggestion = page.locator('.ta-results');
  61  |         const emailStaticText = page.locator(".user__name [type='text']");
  62  |         const placeOrdrBtn = page.locator(".action__submit");
  63  |         const tankMessageTxt = page.locator(".hero-primary");
  64  |         const ordersBtn = page.locator("button[routerlink*='myorders']");
  65  |         const tableBody = page.locator("tbody");
  66  |         const tablRows = page.locator("tbody tr");
  67  |         const orderIdDetailstext = page.locator(".col-text");
  68  | 
  69  |         // const email = "tanvitkashyap@gmail.com";
  70  |         // const pwd = "Pp@12345";
  71  | 
  72  | 
  73  |         // await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  74  |         // await usrname.fill(email);
  75  |         // await pwdField.fill(pwd);
  76  |         // await signBtn.click();
  77  |         // await page.waitForLoadState('networkidle');
  78  | 
  79  | 
  80  |         // Alternative wait
  81  |         //await page.locator(".card-body b").first().waitFor();
  82  | 
  83  |         await cardBody.first().waitFor();
  84  | 
  85  |         const titles = await cardBody.allTextContents();
  86  |         //console.log(await cardBody.first().textContent());
  87  |         
  88  |         console.log(titles);
  89  |         const cun = await products.count();
  90  |         for(let i =0;i<cun;i++)
  91  |             {
  92  |                 if(await products.nth(i).locator("b").textContent() === productName)
  93  |                     {
  94  | 
  95  |                         // add the product to cart
  96  |                         await products.nth(i).locator("text= Add To Cart").click();
  97  |                         
  98  |                         break;
  99  | 
  100 |                     }
  101 |             }
  102 | 
  103 |        // await page.pause();
  104 |         //Zara Coat
  105 |         await cartBtn.click();
  106 |         await cartTags.first().waitFor();
  107 |         const bol = await crtPrdName.isVisible();
  108 |         expect(bol).toBeTruthy();
  109 |         await checkoutBtn.click();
  110 |         // new method pressSequentially
  111 |         await countryFiled.pressSequentially("ind");
  112 |         await countrySuggestion.waitFor();
  113 |         const dropdown = page.locator(".ta-results [type='button']");
  114 |         const optionscount = await dropdown.count();
  115 |         for(let i =0 ; i < optionscount;i++)
  116 |             {
  117 |                 const text  = await dropdown.nth(i).textContent();
  118 |                 if(text === " India")
  119 |                     {
  120 |                         await dropdown.nth(i).click();
  121 |                         break;
  122 |                     }
  123 |             }
  124 |         
  125 |         await page.pause();
  126 |         //await page.locator("//div[@class='payment__cc']//div[2]//input[1]")
  127 |         // const personalInformation = page.locator('.row div.title');
  128 |         // let prscount = await personalInformation.count();
```