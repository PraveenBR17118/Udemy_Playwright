# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebAPIPart2.spec.js >> Client Login Playwright test
- Location: tests/WebAPIPart2.spec.js:44:1

# Error details

```
TimeoutError: page.waitForLoadState: Timeout 10000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - text:    
  - generic [ref=e25]:
    - paragraph [ref=e26]: Home | Search
    - heading "Filters" [level=4] [ref=e28]
    - generic [ref=e29]:
      - textbox "search" [ref=e31]
      - generic [ref=e32]:
        - heading "Price Range" [level=6] [ref=e33]
        - generic [ref=e34]:
          - textbox "Min Price" [ref=e36]
          - textbox "Max Price" [ref=e38]
      - generic [ref=e39]:
        - heading "Categories" [level=6] [ref=e40]
        - generic [ref=e41]: 
        - generic [ref=e43]:
          - checkbox [ref=e44]
          - generic [ref=e45]: fashion
        - generic [ref=e46]:
          - checkbox [ref=e47]
          - generic [ref=e48]: electronics
        - generic [ref=e49]:
          - checkbox [ref=e50]
          - generic [ref=e51]: household
      - generic [ref=e52]:
        - heading "Sub Categories" [level=6] [ref=e53]
        - generic [ref=e54]: 
        - generic [ref=e56]:
          - checkbox [ref=e57]
          - generic [ref=e58]: t-shirts
        - generic [ref=e59]:
          - checkbox [ref=e60]
          - generic [ref=e61]: shirts
        - generic [ref=e62]:
          - checkbox [ref=e63]
          - generic [ref=e64]: shoes
        - generic [ref=e65]:
          - checkbox [ref=e66]
          - generic [ref=e67]: mobiles
        - generic [ref=e68]:
          - checkbox [ref=e69]
          - generic [ref=e70]: laptops
      - generic [ref=e71]:
        - heading "Search For" [level=6] [ref=e72]
        - generic [ref=e73]: 
        - generic [ref=e75]:
          - checkbox [ref=e76]
          - generic [ref=e77]: men
        - generic [ref=e78]:
          - checkbox [ref=e79]
          - generic [ref=e80]: women
  - generic [ref=e81]:
    - generic [ref=e82]:
      - generic [ref=e83]:
        - generic [ref=e84]: Showing 3 results |
        - generic [ref=e85]: User can only see maximum 9 products on a page
      - generic [ref=e86]:
        - generic [ref=e90]:
          - heading "ADIDAS ORIGINAL" [level=5] [ref=e91]
          - generic [ref=e92]: $ 11500
          - button "View" [ref=e94] [cursor=pointer]:
            - generic [ref=e95]: 
            - text: View
          - button " Add To Cart" [ref=e96] [cursor=pointer]:
            - generic [ref=e97]: 
            - text: Add To Cart
        - generic [ref=e101]:
          - heading "ZARA COAT 3" [level=5] [ref=e102]
          - generic [ref=e103]: $ 11500
          - button "View" [ref=e105] [cursor=pointer]:
            - generic [ref=e106]: 
            - text: View
          - button " Add To Cart" [ref=e107] [cursor=pointer]:
            - generic [ref=e108]: 
            - text: Add To Cart
        - generic [ref=e112]:
          - heading "iphone 13 pro" [level=5] [ref=e113]
          - generic [ref=e114]: $ 55000
          - button "View" [ref=e116] [cursor=pointer]:
            - generic [ref=e117]: 
            - text: View
          - button " Add To Cart" [ref=e118] [cursor=pointer]:
            - generic [ref=e119]: 
            - text: Add To Cart
    - list "Pagination" [ref=e124]:
      - listitem [ref=e125]:
        - text: «
        - generic [ref=e126]:
          - text: Previous
          - generic [ref=e127]: page
      - listitem [ref=e128]:
        - generic [ref=e129]: You're on page
        - text: "1"
      - listitem [ref=e130]:
        - generic [ref=e131]:
          - text: Next
          - generic [ref=e132]: page
        - text: »
  - generic [ref=e133]: Design and Developed By - Kunal Sharma
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
  28  |         await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  29  |         await usrname.fill(email);
  30  |         await pwdField.fill(pwd);
  31  |         await signBtn.click();
> 32  |         await page.waitForLoadState('networkidle');
      |                    ^ TimeoutError: page.waitForLoadState: Timeout 10000ms exceeded.
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
  129 |         // console.log(prscount);
  130 | 
  131 |         // for(let i = 0;i<prscount; i++)
  132 |         //     {
```