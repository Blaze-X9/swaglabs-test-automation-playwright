# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> user can login via API and save storage state
- Location: tests\login.spec.js:7:6

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { test, expect, request} from '@playwright/test';
  2  | import LoginPage from '../pages/LoginPage';
  3  | import ProductListingPage from '../pages/ProductListingPage';
  4  | import users from '../test-data/users';
  5  | import errorMessage from '../test-data/errorMessage';
  6  | 
  7  | test.only('user can login via API and save storage state', async () => {
  8  |     const apiContext = await request.newContext({
  9  |         baseURL: 'https://www.saucedemo.com/',
  10 |     });
  11 | 
  12 |     const response = await apiContext.post('/api/login', {
  13 |         data: {
  14 |             username: users.standardUser.username,
  15 |             password: users.standardUser.password
  16 |         }
  17 |     });
  18 | 
> 19 |     expect(response.ok()).toBeTruthy();
     |                           ^ Error: expect(received).toBeTruthy()
  20 |     await apiContext.storageState({ path: 'storageState.json' });
  21 | });
  22 | 
  23 |     test('user can login', async ({ page }) => {
  24 |     const loginPage = new LoginPage(page);
  25 |     await loginPage.login(users.standardUser.username, users.standardUser.password);
  26 | 
  27 |     const productListingPage = new ProductListingPage(page);
  28 |     await expect(productListingPage.getTitle()).toHaveText('Products');
  29 | });
  30 | 
  31 | test('login with invalid credentials shows error', async ({ page }) => {
  32 |     const loginPage = new LoginPage(page);
  33 |     await loginPage.login(users.invalidUser.username, users.invalidUser.password);
  34 |     await expect(loginPage.getErrorMessage()).toContainText(errorMessage.invalid);
  35 | });
  36 | 
  37 | test('login with locked_out_user shows error', async ({ page }) => {
  38 |     const loginPage = new LoginPage(page);
  39 |     await loginPage.login(users.lockedUser.username, users.lockedUser.password);
  40 |     await expect(loginPage.getErrorMessage()).toContainText(errorMessage.locked);
  41 | });
  42 | 
  43 | test('login with empty credentials shows error', async ({ page }) => {
  44 |     const loginPage = new LoginPage(page);
  45 |     await loginPage.login('', '');
  46 |     await expect(loginPage.getErrorMessage()).toContainText(errorMessage.empty);
  47 | });
  48 | 
  49 | test('user can logout', async ({ page }) => {
  50 |     const loginPage = new LoginPage(page);
  51 |     await loginPage.login(users.standardUser.username, users.standardUser.password);
  52 | 
  53 |     const productListingPage = new ProductListingPage(page);
  54 |     await productListingPage.clickOnMenu();
  55 |     await productListingPage.clickOnLogout();
  56 |     await expect(loginPage.getTitle()).toBeVisible();
  57 | });
```