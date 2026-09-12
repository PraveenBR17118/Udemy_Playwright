
import { expect, type Locator, type Page } from '@playwright/test';

let message1 : string = "Hello";
//message1= 2;
message1 = "Bye";
console.log(message1);

let age1 : number = 20;
console.log(age1);

let isActive : boolean = true;

let numberArry: number[] = [1,2,3];

let data : any = "this could be anything";
data =42;

function add(a: number ,b : number) : number
{
    return a+b;
}

console.log(add(3,4));
let user:{name:string,age:number,location:string} ={name:"praveen", age:35,location:"delhi"};
user.location = "Bangalore";

console.log("User location is = "+user.location);

class demo1

{

    page:Page;
    cartTags: Locator;
    crtPrdName : Locator;
    checkoutBtn : Locator;
    countryFiled : Locator;
    countrySuggestion :Locator;
    emailStaticText :Locator;
    placeOrdrBtn : Locator;
    dropdown :Locator;





    constructor(page : any)
    {
        this.page = page;
        this.cartTags = page.locator("div li");
        this.crtPrdName = page.locator("h3:has-text('ZARA COAT 3')");
        this.checkoutBtn = page.locator('text=Checkout');
        this.countryFiled = page.locator('[placeholder="Select Country"]');
        this.countrySuggestion = page.locator('.ta-results');
        this.emailStaticText = page.locator(".user__name [type='text']");
        this.placeOrdrBtn = page.locator(".action__submit");
        this.dropdown = page.locator(".ta-results [type='button']");


    }

}
