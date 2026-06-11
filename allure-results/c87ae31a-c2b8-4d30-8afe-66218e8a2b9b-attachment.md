# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login-tests.spec.js >> login with invalid credentials shows error
- Location: tests\login-tests.spec.js:14:6

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.error-message-container')
Expected: "Username and password do not match any user"
Received: "Epic sadface: Username and password do not match any user in this service"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.error-message-container')
    14 × locator resolved to <div class="error-message-container error">…</div>
       - unexpected value "Epic sadface: Username and password do not match any user in this service"

```

```yaml
- 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
  - button
  - text: "Epic sadface: Username and password do not match any user in this service"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import LoginPage from '../pages/LoginPage';
  3  | import ProductListingPage from '../pages/ProductListingPage';
  4  | import users from '../test-data/users';
  5  | 
  6  | test('user can login', async ({ page }) => {
  7  |     const loginPage = new LoginPage(page);
  8  |     await loginPage.login(users.standardUser.username, users.standardUser.password);
  9  | 
  10 |     const productListingPage = new ProductListingPage(page);
  11 |     await expect(productListingPage.getTitle()).toHaveText('Products');
  12 | });
  13 | 
  14 | test.only('login with invalid credentials shows error', async ({ page }) => {
  15 |     const loginPage = new LoginPage(page);
  16 |     await loginPage.login(users.invalidUser.username, users.invalidUser.password);
> 17 |     await expect(loginPage.getErrorMessage()).toHaveText('Username and password do not match any user');
     |                                               ^ Error: expect(locator).toHaveText(expected) failed
  18 | });
  19 | 
```