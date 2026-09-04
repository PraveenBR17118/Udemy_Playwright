const  base  = require("@playwright/test");

exports.customtest = base.test.extend(
    {
        testDataForOrder :
        {
        username : "tanvitkashyap@gmail.com",
        password : "Pp@12345",
        productName : "ZARA COAT 3"
        }

    })
