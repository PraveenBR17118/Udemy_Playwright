const { test, request, expect } = require('@playwright/test');

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
});