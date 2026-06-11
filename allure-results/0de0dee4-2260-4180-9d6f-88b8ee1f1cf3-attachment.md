# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.js >> Login Tests >> user can login
- Location: tests\e2e.spec.js:12:9

# Error details

```
Error: toHaveText can be only used with Locator object, was called with Promise Promise { <pending> }
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [ref=e10]:
              - navigation [ref=e12]:
                - link [ref=e13] [cursor=pointer]:
                  - /url: "#"
                  - text: All Items
                - link [ref=e14] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - link [ref=e15] [cursor=pointer]:
                  - /url: "#"
                  - text: Logout
                - link [ref=e16] [cursor=pointer]:
                  - /url: "#"
                  - text: Reset App State
              - generic [ref=e17]:
                - button [ref=e18] [cursor=pointer]: Close Menu
                - img [ref=e19]
        - generic [ref=e21]: Swag Labs
      - generic [ref=e24]:
        - generic [ref=e25]: Products
        - generic [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: Name (A to Z)
          - combobox [ref=e29]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e33]:
      - generic [ref=e34]:
        - link "Sauce Labs Backpack" [ref=e36] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e37]
        - generic [ref=e38]:
          - generic [ref=e39]:
            - link "Sauce Labs Backpack" [ref=e40] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e41]: Sauce Labs Backpack
            - generic [ref=e42]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e43]:
            - generic [ref=e44]: $29.99
            - button "Add to cart" [ref=e45] [cursor=pointer]
      - generic [ref=e46]:
        - link "Sauce Labs Bike Light" [ref=e48] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e49]
        - generic [ref=e50]:
          - generic [ref=e51]:
            - link "Sauce Labs Bike Light" [ref=e52] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e53]: Sauce Labs Bike Light
            - generic [ref=e54]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e55]:
            - generic [ref=e56]: $9.99
            - button "Add to cart" [ref=e57] [cursor=pointer]
      - generic [ref=e58]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e60] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e61]
        - generic [ref=e62]:
          - generic [ref=e63]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e64] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e65]: Sauce Labs Bolt T-Shirt
            - generic [ref=e66]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e67]:
            - generic [ref=e68]: $15.99
            - button "Add to cart" [ref=e69] [cursor=pointer]
      - generic [ref=e70]:
        - link "Sauce Labs Fleece Jacket" [ref=e72] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e73]
        - generic [ref=e74]:
          - generic [ref=e75]:
            - link "Sauce Labs Fleece Jacket" [ref=e76] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e77]: Sauce Labs Fleece Jacket
            - generic [ref=e78]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e79]:
            - generic [ref=e80]: $49.99
            - button "Add to cart" [ref=e81] [cursor=pointer]
      - generic [ref=e82]:
        - link "Sauce Labs Onesie" [ref=e84] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e85]
        - generic [ref=e86]:
          - generic [ref=e87]:
            - link "Sauce Labs Onesie" [ref=e88] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e89]: Sauce Labs Onesie
            - generic [ref=e90]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e91]:
            - generic [ref=e92]: $7.99
            - button "Add to cart" [ref=e93] [cursor=pointer]
      - generic [ref=e94]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e96] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e97]
        - generic [ref=e98]:
          - generic [ref=e99]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e100] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e101]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e102]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e103]:
            - generic [ref=e104]: $15.99
            - button "Add to cart" [ref=e105] [cursor=pointer]
  - contentinfo [ref=e106]:
    - list [ref=e107]:
      - listitem [ref=e108]:
        - link "Twitter" [ref=e109] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e110]:
        - link "Facebook" [ref=e111] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e112]:
        - link "LinkedIn" [ref=e113] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e114]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import LoginPage from '../pages/LoginPage';
  3  | import ProductListingPage from '../pages/ProductListingPage';
  4  | import CartPage from '../pages/CartPage';
  5  | import CheckoutPage from '../pages/CheckoutPage';
  6  | import ProductDetailsPage from '../pages/ProductDetailsPage';
  7  | 
  8  | test.describe.configure({mode: 'parallel'});
  9  | 
  10 | 
  11 | test.describe('Login Tests', () => {
  12 |     test('user can login', async ({ page }) => {
  13 |         const loginPage = new LoginPage(page);
  14 |         await loginPage.login('standard_user', 'secret_sauce');
  15 | 
  16 |         const productListingPage = new ProductListingPage(page);
> 17 |         await expect(productListingPage.getTitle()).toHaveText('Products');
     |                                                     ^ Error: toHaveText can be only used with Locator object, was called with Promise Promise { <pending> }
  18 |     });
  19 | 
  20 |     test('login with invalid credentials shows error', async ({ page }) => {
  21 |         const loginPage = new LoginPage(page);
  22 |         await loginPage.login('invalid_user', 'invalid_password');
  23 |         await expect(loginPage.getErrorMessage()).toBeVisible();
  24 |     });
  25 | });
  26 | 
  27 | test.describe('Cart Tests', () => {
  28 |     let loginPage;
  29 |     test.beforeEach(async ({ page }) => {
  30 |         loginPage = new LoginPage(page);
  31 |         await loginPage.login('standard_user', 'secret_sauce');
  32 |     });
  33 |     let productListingPage;
  34 |     let cartPage;
  35 |     test.beforeEach(async ({ page }) => {
  36 |         productListingPage = new ProductListingPage(page);
  37 |         await productListingPage.addItemToCart('Sauce Labs Backpack');
  38 |         cartPage = new CartPage(page);
  39 |     });
  40 |     test('user can add item to cart', async ({ page }) => {
  41 |         await productListingPage.clickOnCart();
  42 |         await expect(cartPage.getCartItems()).toBeVisible();
  43 |     });
  44 | 
  45 |     test('user can remove item from cart', async ({ page }) => {
  46 |         await productListingPage.clickOnCart();
  47 |         await cartPage.removeItemFromCart('Sauce Labs Backpack');
  48 |         await expect(cartPage.getCartItems()).not.toBeVisible();
  49 |     });
  50 | 
  51 |     test('user can remove item from cart from product page', async ({ page }) => {
  52 |         await productListingPage.removeItemFromCart('Sauce Labs Backpack');
  53 |         await productListingPage.clickOnCart();
  54 |         await expect(cartPage.getCartItems()).not.toBeVisible();
  55 |     });
  56 | });
  57 | 
  58 | test('user can checkout', async ({ page }) => {
  59 |     const loginPage = new LoginPage(page);
  60 |     await loginPage.login('standard_user', 'secret_sauce');
  61 | 
  62 |     const productListingPage = new ProductListingPage(page);
  63 |     await productListingPage.addItemToCart('Sauce Labs Backpack');
  64 |     await productListingPage.clickOnCart();
  65 | 
  66 |     const cartPage = new CartPage(page);
  67 |     await cartPage.clickCheckout();
  68 | 
  69 |     const checkoutPage = new CheckoutPage(page);
  70 |     await checkoutPage.fillShippingInformation('Suryaveer', 'Rathore', '12345');
  71 |     await checkoutPage.clickContinue();
  72 |     await checkoutPage.clickFinish();
  73 |     await expect(checkoutPage.getOrderConfirmation()).resolves.toBe('Thank you for your order!');
  74 | });
  75 | 
  76 | test('user can logout', async ({ page }) => {
  77 |     const loginPage = new LoginPage(page);
  78 |     await loginPage.login('standard_user', 'secret_sauce');
  79 | 
  80 |     const productListingPage = new ProductListingPage(page);
  81 |     await productListingPage.clickOnMenu();
  82 |     await productListingPage.clickOnLogout();
  83 |     await expect(loginPage.getTitle()).toBeVisible();
  84 | });
  85 | 
  86 | test('user can view product details', async ({ page }) => {
  87 |     const loginPage = new LoginPage(page);
  88 |     await loginPage.login('standard_user', 'secret_sauce');
  89 | 
  90 |     const productListingPage = new ProductListingPage(page);
  91 |     await productListingPage.clickonProduct('Sauce Labs Backpack');
  92 | 
  93 |     const productDetailsPage = new ProductDetailsPage(page);
  94 |     await expect(productDetailsPage.getProductName()).toHaveText('Sauce Labs Backpack');
  95 | });
  96 | 
  97 | 
```