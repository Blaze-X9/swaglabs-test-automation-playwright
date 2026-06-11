# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.js >> verify total price on checkout page
- Location: tests\checkout.spec.js:59:6

# Error details

```
TypeError: textPrice.map is not a function
```

```
Error: locator.innerText: Error: strict mode violation: locator('.inventory_item_price') resolved to 2 elements:
    1) <div class="inventory_item_price" data-test="inventory-item-price">$29.99</div> aka getByText('$29.99')
    2) <div class="inventory_item_price" data-test="inventory-item-price">$9.99</div> aka getByText('$9.99')

Call log:
  - waiting for locator('.inventory_item_price')

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
  1  | export default class CartPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |     }
  5  | 
  6  |     getCartItems() {
  7  |         return this.page.locator('.inventory_item_name');
  8  |     }
  9  | 
  10 |     getCartBadge() {
  11 |         return this.page.locator('.shopping_cart_badge');
  12 |     }
  13 | 
  14 |     getCartPrice() {
> 15 |         const textPrice = this.page.locator('.inventory_item_price').innerText();
     |                                                                      ^ Error: locator.innerText: Error: strict mode violation: locator('.inventory_item_price') resolved to 2 elements:
  16 |         const sum = textPrice
  17 |           .map(val => parseFloat(val.replace(/[^0-9.-]+/g, '')))
  18 |           .reduce((acc, curr) => acc + curr, 0);
  19 |         return sum;
  20 |     }
  21 | 
  22 |     async clickCheckout() {
  23 |         await this.page.getByRole('button', { name: 'Checkout' }).click();
  24 |     }
  25 | 
  26 |     async removeItemFromCart(itemName) {
  27 |         const items = await this.page.locator('div.cart_item');
  28 |         const count = await items.count();  
  29 |         for(let i = 0; i < count; i++) {
  30 |             const name = await items.nth(i).locator('.inventory_item_name').innerText();    
  31 |             if(name === itemName) {
  32 |                 await items.nth(i).locator('button').click();
  33 |                 break;
  34 |             }
  35 |         }
  36 |     }
  37 | }
  38 | 
```