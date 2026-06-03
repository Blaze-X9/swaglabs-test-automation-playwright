import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ProductListingPage from '../pages/ProductListingPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';

test.describe.configure({mode: 'parallel'});
let loginPage;
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
});

test.describe('Login Tests', () => {
    test('user can login', async ({ page }) => {
        const productListingPage = new ProductListingPage(page);
        await expect(productListingPage.getTitle()).resolves.toBe('Products');
    });

    test('login with invalid credentials shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('invalid_user', 'invalid_password');
    await expect(loginPage.getErrorMessage()).toBeVisible();
    });
});

test.describe('Cart Tests', () => {
    let productListingPage;
    let cartPage;
    test.beforeEach(async ({ page }) => {
        productListingPage = new ProductListingPage(page);
        await productListingPage.addItemToCart('Sauce Labs Backpack');
        cartPage = new CartPage(page);
    });
    test('user can add item to cart', async ({ page }) => {
        await productListingPage.clickOnCart();
        await expect(cartPage.getCartItems()).toBeVisible();
    });

    test('user can remove item from cart', async ({ page }) => {
        await productListingPage.clickOnCart();
        await cartPage.removeItemFromCart('Sauce Labs Backpack');
        await expect(cartPage.getCartItems()).not.toBeVisible();
    });

    test('user can remove item from cart from product page', async ({ page }) => {
        await productListingPage.removeItemFromCart('Sauce Labs Backpack');
        await productListingPage.clickOnCart();
        await expect(cartPage.getCartItems()).not.toBeVisible();
    });
});

test('user can checkout', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    await productListingPage.addItemToCart('Sauce Labs Backpack');
    await productListingPage.clickOnCart();

    const cartPage = new CartPage(page);
    await cartPage.clickCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillShippingInformation('Suryaveer', 'Rathore', '12345');
    await checkoutPage.clickContinue();
    await checkoutPage.clickFinish();
    await expect(checkoutPage.getOrderConfirmation()).resolves.toBe('Thank you for your order!');
});

test('user can logout', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    await productListingPage.clickOnMenu();
    await productListingPage.clickOnLogout();
    await expect(loginPage.getTitle()).toBeVisible();
});

test('user can view product details', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    await productListingPage.clickonProduct('Sauce Labs Backpack');

    const productDetailsPage = new ProductDetailsPage(page);
    await expect(productDetailsPage.getProductName()).toHaveText('Sauce Labs Backpack');
});

