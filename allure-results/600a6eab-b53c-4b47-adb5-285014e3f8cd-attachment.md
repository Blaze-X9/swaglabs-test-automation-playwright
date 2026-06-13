# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> user can remove multiple items from cart
- Location: tests\cart.spec.js:38:5

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.inventory_item_name')
Expected: 0
Received: 2
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" with timeout 5000ms
  - waiting for locator('.inventory_item_name')
    3 × locator resolved to 3 elements
      - unexpected value "3"
    10 × locator resolved to 2 elements
       - unexpected value "2"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
        - generic [ref=e14]: "2"
      - generic [ref=e16]: Your Cart
    - generic [ref=e18]:
      - generic [ref=e19]:
        - generic [ref=e20]: QTY
        - generic [ref=e21]: Description
        - generic [ref=e22]:
          - generic [ref=e23]: "1"
          - generic [ref=e24]:
            - link "Sauce Labs Backpack" [ref=e25] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e26]: Sauce Labs Backpack
            - generic [ref=e27]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e28]:
              - generic [ref=e29]: $29.99
              - button "Remove" [ref=e30] [cursor=pointer]
        - generic [ref=e31]:
          - generic [ref=e32]: "1"
          - generic [ref=e33]:
            - link "Sauce Labs Bike Light" [ref=e34] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e35]: Sauce Labs Bike Light
            - generic [ref=e36]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e37]:
              - generic [ref=e38]: $9.99
              - button "Remove" [ref=e39] [cursor=pointer]
      - generic [ref=e40]:
        - button "Go back Continue Shopping" [ref=e41] [cursor=pointer]:
          - img "Go back" [ref=e42]
          - text: Continue Shopping
        - button "Checkout" [ref=e43] [cursor=pointer]
  - contentinfo [ref=e44]:
    - list [ref=e45]:
      - listitem [ref=e46]:
        - link "Twitter" [ref=e47] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e48]:
        - link "Facebook" [ref=e49] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e50]:
        - link "LinkedIn" [ref=e51] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e52]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/baseTest';
  2  | import users from '../test-data/users';
  3  | import products from '../test-data/products';
  4  | 
  5  | 
  6  | test.beforeEach(async ({ LoginPage }) => {
  7  |     await LoginPage.login(users.standardUser.username, users.standardUser.password);
  8  | });
  9  | 
  10 | test('user can add item to cart', async ({ ProductListingPage, CartPage }) => {
  11 |     await ProductListingPage.addItemToCart(products.backpack);
  12 |     await ProductListingPage.clickOnCart();
  13 |     await expect(CartPage.getCartItems()).toHaveText(products.backpack);
  14 | });
  15 | 
  16 | test('user can remove item from cart', async ({ ProductListingPage, CartPage }) => {
  17 |     await ProductListingPage.addItemToCart(products.backpack);
  18 |     await ProductListingPage.clickOnCart();
  19 |     await CartPage.removeItemFromCart(products.backpack);
  20 |     await expect(CartPage.getCartItems()).toHaveCount(0);
  21 | });
  22 | 
  23 | test('user can remove item from cart from product page', async ({ ProductListingPage, CartPage }) => {
  24 |     await ProductListingPage.addItemToCart(products.backpack);
  25 |     await ProductListingPage.removeItemFromCart(products.backpack);
  26 |     await ProductListingPage.clickOnCart();
  27 |     await expect(CartPage.getCartItems()).toHaveCount(0);
  28 | });
  29 | 
  30 | test('user can add multiple items to cart', async ({ ProductListingPage, CartPage }) => {
  31 |     await ProductListingPage.addItemToCart(products.backpack);
  32 |     await ProductListingPage.addItemToCart(products.bikeLight);
  33 |     await ProductListingPage.addItemToCart(products.boltTShirt);
  34 |     await ProductListingPage.clickOnCart();
  35 |     await expect(CartPage.getCartItems()).toHaveText([products.backpack, products.bikeLight, products.boltTShirt]);
  36 | });
  37 | 
  38 | test('user can remove multiple items from cart', async ({ ProductListingPage, CartPage }) => {
  39 |     await ProductListingPage.addItemToCart(products.backpack);
  40 |     await ProductListingPage.addItemToCart(products.bikeLight);
  41 |     await ProductListingPage.addItemToCart(products.boltTShirt);
  42 |     await ProductListingPage.clickOnCart();
  43 |     await CartPage.removeItemFromCart(products.backpack);
  44 |     await CartPage.removeItemFromCart(products.bikeLight);
  45 |     await CartPage.removeItemFromCart(products.boltTShirt);
> 46 |     await expect(CartPage.getCartItems()).toHaveCount(0);
     |                                           ^ Error: expect(locator).toHaveCount(expected) failed
  47 | });
  48 | 
  49 | test('verify cart badge count', async ({ ProductListingPage, CartPage }) => {
  50 |     await ProductListingPage.addItemToCart(products.backpack);
  51 |     await ProductListingPage.addItemToCart(products.bikeLight);
  52 |     await ProductListingPage.addItemToCart(products.boltTShirt);
  53 |     await ProductListingPage.clickOnCart();
  54 |     await expect(CartPage.getCartBadge()).toHaveText('3');
  55 |     await CartPage.removeItemFromCart(products.backpack);
  56 |     await expect(CartPage.getCartBadge()).toHaveText('2');
  57 | });
  58 | 
  59 | 
  60 | 
```