class DashboardPage
{
    constructor(page)
    {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        //this.cartBtn = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");

    }

    async searchProductAddCart(productName)
    {
        

            // Alternative wait
            //await page.locator(".card-body b").first().waitFor();

            await this.productsText.first().waitFor();

            const titles = await this.productsText.allTextContents();
            //console.log(await cardBody.first().textContent());
            
            console.log(titles);
            const cun = await this.products.count();
            for(let i =0;i<cun;i++)
                {
                    if(await this.products.nth(i).locator("b").textContent() === productName)
                        {

                            // add the product to cart
                            await this.products.nth(i).locator("text= Add To Cart").click();
                            
                            break;

                        }
                }
    }

    async navigateToCart()
    {
        await this.cart.click();
    }

    async navigateToOrders()
{
    await this.orders.click();
}

}

module.exports = {DashboardPage};