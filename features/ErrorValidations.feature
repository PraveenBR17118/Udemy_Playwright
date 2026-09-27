Feature: Ecommerce validations
  @ValidationError
  # The first example has two steps
  Scenario Outline: Placing the Order
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then Verify Error message is displayed
    # When Add "ZARA COAT 3" to Cart
    # Then Verify "ZARA COAT 3" is displayed in the Cart
    # When Enter valid details and Place the Order "tanvitkashyap@gmail.com"
    # Then Verify order is present     const { test, request, expect } = require('@playwright/test');
    
    test('HTTP GET call example', async () => {
      const apiContext = await request.newContext();
      const response = await apiContext.get('https://jsonplaceholder.typicode.com/posts/1');
      
      // Validate the response status
      expect(response.status()).toBe(200);
    
      // Parse and log the response body
      const responseBody = await response.json();
      console.log(responseBody);
    
      // Validate the response body
      expect(responseBody).toHaveProperty('id', 1);
    });in the OrderHistory
    Examples:
    |username                    |  password         |
    |praveenbr.1991@gmail.com    | Learning@830$3mK2 |
    |tanvit.1991@gmail.com       | Learning30$3mK2   |

