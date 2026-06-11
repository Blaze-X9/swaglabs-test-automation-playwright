# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product-details.spec.js >> user can sort products alphabetically
- Location: tests\product-details.spec.js:21:6

# Error details

```
ReferenceError: expect is not defined
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
          - generic [ref=e28]: Name (Z to A)
          - combobox [ref=e29]:
            - option "Name (A to Z)"
            - option "Name (Z to A)" [selected]
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e33]:
      - generic [ref=e34]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e36] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e37]
        - generic [ref=e38]:
          - generic [ref=e39]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e40] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e41]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e42]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e43]:
            - generic [ref=e44]: $15.99
            - button "Add to cart" [ref=e45] [cursor=pointer]
      - generic [ref=e46]:
        - link "Sauce Labs Onesie" [ref=e48] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e49]
        - generic [ref=e50]:
          - generic [ref=e51]:
            - link "Sauce Labs Onesie" [ref=e52] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e53]: Sauce Labs Onesie
            - generic [ref=e54]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e55]:
            - generic [ref=e56]: $7.99
            - button "Add to cart" [ref=e57] [cursor=pointer]
      - generic [ref=e58]:
        - link "Sauce Labs Fleece Jacket" [ref=e60] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e61]
        - generic [ref=e62]:
          - generic [ref=e63]:
            - link "Sauce Labs Fleece Jacket" [ref=e64] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e65]: Sauce Labs Fleece Jacket
            - generic [ref=e66]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e67]:
            - generic [ref=e68]: $49.99
            - button "Add to cart" [ref=e69] [cursor=pointer]
      - generic [ref=e70]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e72] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e73]
        - generic [ref=e74]:
          - generic [ref=e75]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e76] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e77]: Sauce Labs Bolt T-Shirt
            - generic [ref=e78]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e79]:
            - generic [ref=e80]: $15.99
            - button "Add to cart" [ref=e81] [cursor=pointer]
      - generic [ref=e82]:
        - link "Sauce Labs Bike Light" [ref=e84] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e85]
        - generic [ref=e86]:
          - generic [ref=e87]:
            - link "Sauce Labs Bike Light" [ref=e88] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e89]: Sauce Labs Bike Light
            - generic [ref=e90]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e91]:
            - generic [ref=e92]: $9.99
            - button "Add to cart" [ref=e93] [cursor=pointer]
      - generic [ref=e94]:
        - link "Sauce Labs Backpack" [ref=e96] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e97]
        - generic [ref=e98]:
          - generic [ref=e99]:
            - link "Sauce Labs Backpack" [ref=e100] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e101]: Sauce Labs Backpack
            - generic [ref=e102]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e103]:
            - generic [ref=e104]: $29.99
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
  1  | import test from '@playwright/test';
  2  | import LoginPage from '../pages/LoginPage';
  3  | import ProductListingPage from '../pages/ProductListingPage';
  4  | import ProductDetailsPage from '../pages/ProductDetailsPage';
  5  | import users from '../test-data/users';
  6  | import products from '../test-data/products';
  7  | 
  8  | test.beforeEach(async ({ page }) => {
  9  |     const loginPage = new LoginPage(page);
  10 |     await loginPage.login(users.standardUser.username, users.standardUser.password);
  11 | });
  12 | 
  13 | test('user can view product details', async ({ page }) => {
  14 |     const productListingPage = new ProductListingPage(page);
  15 |     await productListingPage.clickonProduct(products.backpack);
  16 | 
  17 |     const productDetailsPage = new ProductDetailsPage(page);
  18 |     await expect(productDetailsPage.getProductName()).toHaveText(products.backpack);
  19 | });
  20 | 
  21 | test.only('user can sort products alphabetically', async ({ page }) => {
  22 |     const productListingPage = new ProductListingPage(page);
  23 |     await productListingPage.sortProductsBy('za');
> 24 |     await expect(productListingPage.getProductNames()).toBeSorted({ descending: true });
     |     ^ ReferenceError: expect is not defined
  25 |     await productListingPage.sortProductsBy('az');
  26 |     await expect(productListingPage.getProductNames()).toBeSorted();
  27 | });
```