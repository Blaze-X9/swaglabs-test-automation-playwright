import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ProductListingPage from '../pages/ProductListingPage';
import CartPage from '../pages/CartPage';
import users from '../test-data/users';
import products from '../test-data/products';


test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(users.standardUser.username, users.standardUser.password);
});

test('user can add item to cart', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    const cartPage = new CartPage(page);

    await productListingPage.addItemToCart(products.backpack);
    await productListingPage.clickOnCart();
    await expect(cartPage.getCartItems()).toHaveText(products.backpack);
});

test('user can remove item from cart', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    const cartPage = new CartPage(page);

    await productListingPage.addItemToCart(products.backpack);
    await productListingPage.clickOnCart();
    await cartPage.removeItemFromCart(products.backpack);
    await expect(cartPage.getCartItems()).not.toBeVisible();
});

test('user can remove item from cart from product page', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    const cartPage = new CartPage(page);

    await productListingPage.addItemToCart(products.backpack);
    await productListingPage.removeItemFromCart(products.backpack);
    await productListingPage.clickOnCart();
    await expect(cartPage.getCartItems()).not.toBeVisible();
});

test('user can add multiple items to cart', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    const cartPage = new CartPage(page);    
    
    await productListingPage.addItemToCart(products.backpack);
    await productListingPage.addItemToCart(products.bikeLight);
    await productListingPage.addItemToCart(products.boltTShirt);
    await productListingPage.clickOnCart();
    await expect(cartPage.getCartItems()).toHaveText([products.backpack, products.bikeLight, products.boltTShirt]);
});

test('user can remove multiple items from cart', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    const cartPage = new CartPage(page);

    await productListingPage.addItemToCart(products.backpack);
    await productListingPage.addItemToCart(products.bikeLight);
    await productListingPage.addItemToCart(products.boltTShirt);
    await productListingPage.clickOnCart();
    await cartPage.removeItemFromCart(products.backpack);
    await cartPage.removeItemFromCart(products.bikeLight);
    await cartPage.removeItemFromCart(products.boltTShirt);
    await expect(cartPage.getCartItems()).not.toBeVisible();
});

test('verify cart badge count', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    const cartPage = new CartPage(page);    

    await productListingPage.addItemToCart(products.backpack);
    await productListingPage.addItemToCart(products.bikeLight);
    await productListingPage.addItemToCart(products.boltTShirt);
    await productListingPage.clickOnCart();
    await expect(cartPage.getCartBadge()).toHaveText('3');
    await cartPage.removeItemFromCart(products.backpack);
    await expect(cartPage.getCartBadge()).toHaveText('2');
});


