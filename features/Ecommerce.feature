Feature: Ecommerce validations
 @Regression
  # The first example has two steps
  Scenario: Placing the Order
    Given a login to Ecommerce application with "tanvitkashyap@gmail.com" and "Pp@12345"
    When Add "ZARA COAT 3" to Cart
    Then Verify "ZARA COAT 3" is displayed in the Cart
    When Enter valid details and Place the Order "tanvitkashyap@gmail.com"
    Then Verify order is present in the OrderHistory


@ValidationError
  # The first example has two steps
  Scenario Outline: Placing the Order
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then Verify Error message is displayed
    # When Add "ZARA COAT 3" to Cart
    # Then Verify "ZARA COAT 3" is displayed in the Cart
    # When Enter valid details and Place the Order "tanvitkashyap@gmail.com"
    # Then Verify order is present in the OrderHistory
    Examples:
    |username                    |  password         |
    |praveenbr.1991@gmail.com    | Learning@830$3mK2 |
    |tanvit.1991@gmail.com       | Learning30$3mK2   |


