//const  base  = require("@playwright/test");
import {test as baseTest} from '@playwright/test';

interface TestDataForOrder {
    username: string;
    password: string;
    productName: string;
};
export const customTest = baseTest.extend<{testDataForOrder: TestDataForOrder}>(
    {
        
        testDataForOrder :
        {
        username : "tanvitkashyap@gmail.com",
        password : "Pp@12345",
        productName : "ZARA COAT 3"
        }

    })
