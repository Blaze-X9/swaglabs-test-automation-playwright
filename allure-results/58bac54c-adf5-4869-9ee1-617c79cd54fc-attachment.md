# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> user can add item to cart
- Location: tests\cart.spec.js:10:5

# Error details

```
ReferenceError: LoginPage is not defined
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/baseTest';
  2  | import users from '../test-data/users';
  3  | import products from '../test-data/products';
  4  | 
  5  | 
  6  | test.beforeEach(async ({ page }) => {
> 7  |     await LoginPage.login(users.standardUser.username, users.standardUser.password);
     |     ^ ReferenceError: LoginPage is not defined
  8  | });
  9  | 
  10 | test('user can add item to cart', async ({ page }) => {
  11 |     await ProductListingPage.addItemToCart(products.backpack);
  12 |     await ProductListingPage.clickOnCart();
  13 |     await expect(CartPage.getCartItems()).toHaveText(products.backpack);
  14 | });
  15 | 
  16 | test('user can remove item from cart', async ({ page }) => {
  17 |     await ProductListingPage.addItemToCart(products.backpack);
  18 |     await ProductListingPage.clickOnCart();
  19 |     await CartPage.removeItemFromCart(products.backpack);
  20 |     await expect(CartPage.getCartItems()).not.toBeVisible();
  21 | });
  22 | 
  23 | test('user can remove item from cart from product page', async ({ page }) => {
  24 |     await ProductListingPage.addItemToCart(products.backpack);
  25 |     await ProductListingPage.removeItemFromCart(products.backpack);
  26 |     await ProductListingPage.clickOnCart();
  27 |     await expect(CartPage.getCartItems()).not.toBeVisible();
  28 | });
  29 | 
  30 | test('user can add multiple items to cart', async ({ page }) => {
  31 |     await ProductListingPage.addItemToCart(products.backpack);
  32 |     await ProductListingPage.addItemToCart(products.bikeLight);
  33 |     await ProductListingPage.addItemToCart(products.boltTShirt);
  34 |     await ProductListingPage.clickOnCart();
  35 |     await expect(CartPage.getCartItems()).toHaveText([products.backpack, products.bikeLight, products.boltTShirt]);
  36 | });
  37 | 
  38 | test('user can remove multiple items from cart', async ({ page }) => {
  39 |     await ProductListingPage.addItemToCart(products.backpack);
  40 |     await ProductListingPage.addItemToCart(products.bikeLight);
  41 |     await ProductListingPage.addItemToCart(products.boltTShirt);
  42 |     await ProductListingPage.clickOnCart();
  43 |     await CartPage.removeItemFromCart(products.backpack);
  44 |     await CartPage.removeItemFromCart(products.bikeLight);
  45 |     await CartPage.removeItemFromCart(products.boltTShirt);
  46 |     await expect(CartPage.getCartItems()).not.toBeVisible();
  47 | });
  48 | 
  49 | test('verify cart badge count', async ({ page }) => {
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