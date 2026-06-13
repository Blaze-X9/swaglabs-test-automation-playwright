import { test, expect } from '../fixtures/baseTest';
import users from '../test-data/users';
import products from '../test-data/products';


test.beforeEach(async ({ LoginPage }) => {
    await LoginPage.login(users.standardUser.username, users.standardUser.password);
});

test('user can add item to cart', async ({ ProductListingPage, CartPage }) => {
    await ProductListingPage.addItemToCart(products.backpack);
    await ProductListingPage.clickOnCart();
    await expect(CartPage.getCartItems()).toHaveText(products.backpack);
});

test('user can remove item from cart', async ({ ProductListingPage, CartPage }) => {
    await ProductListingPage.addItemToCart(products.backpack);
    await ProductListingPage.clickOnCart();
    await CartPage.removeItemFromCart(products.backpack);
    await expect(CartPage.getCartItems()).not.toBeVisible();
});

test('user can remove item from cart from product page', async ({ ProductListingPage, CartPage }) => {
    await ProductListingPage.addItemToCart(products.backpack);
    await ProductListingPage.removeItemFromCart(products.backpack);
    await ProductListingPage.clickOnCart();
    await expect(CartPage.getCartItems()).not.toBeVisible();
});

test('user can add multiple items to cart', async ({ ProductListingPage, CartPage }) => {
    await ProductListingPage.addItemToCart(products.backpack);
    await ProductListingPage.addItemToCart(products.bikeLight);
    await ProductListingPage.addItemToCart(products.boltTShirt);
    await ProductListingPage.clickOnCart();
    await expect(CartPage.getCartItems()).toHaveText([products.backpack, products.bikeLight, products.boltTShirt]);
});

test('user can remove multiple items from cart', async ({ ProductListingPage, CartPage }) => {
    await ProductListingPage.addItemToCart(products.backpack);
    await ProductListingPage.addItemToCart(products.bikeLight);
    await ProductListingPage.addItemToCart(products.boltTShirt);
    await ProductListingPage.clickOnCart();
    await CartPage.removeItemFromCart(products.backpack);
    await CartPage.removeItemFromCart(products.bikeLight);
    await CartPage.removeItemFromCart(products.boltTShirt);
    await expect(CartPage.getCartItems()).not.toBeVisible();
});

test('verify cart badge count', async ({ ProductListingPage, CartPage }) => {
    await ProductListingPage.addItemToCart(products.backpack);
    await ProductListingPage.addItemToCart(products.bikeLight);
    await ProductListingPage.addItemToCart(products.boltTShirt);
    await ProductListingPage.clickOnCart();
    await expect(CartPage.getCartBadge()).toHaveText('3');
    await CartPage.removeItemFromCart(products.backpack);
    await expect(CartPage.getCartBadge()).toHaveText('2');
});


