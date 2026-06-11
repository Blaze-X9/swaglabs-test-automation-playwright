import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ProductListingPage from '../pages/ProductListingPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import users from '../test-data/users';
import products from '../test-data/products';
import shippingInfo from '../test-data/shippingInfo';


test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(users.standardUser.username, users.standardUser.password);
});

test('user can checkout', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productListingPage.addItemToCart(products.backpack);
    await productListingPage.clickOnCart();
    await cartPage.clickCheckout();
    await checkoutPage.fillShippingInformation(shippingInfo.firstName, shippingInfo.lastName, shippingInfo.zipCode);
    await checkoutPage.clickContinue();
    await checkoutPage.clickFinish();
    await expect(checkoutPage.getOrderConfirmation()).toHaveText('Thank you for your order!');
});

test('user can checkout with multiple items', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productListingPage.addItemToCart(products.backpack);
    await productListingPage.addItemToCart(products.bikeLight);
    await productListingPage.clickOnCart();
    await cartPage.clickCheckout();
    await checkoutPage.fillShippingInformation(shippingInfo.firstName, shippingInfo.lastName, shippingInfo.zipCode);
    await checkoutPage.clickContinue();
    await checkoutPage.clickFinish();
    await expect(checkoutPage.getOrderConfirmation()).toHaveText('Thank you for your order!');
});

test('user cannot checkout with empty shipping information', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productListingPage.addItemToCart(products.backpack);
    await productListingPage.addItemToCart(products.bikeLight);
    await productListingPage.clickOnCart();
    await cartPage.clickCheckout();
    await checkoutPage.fillShippingInformation('', '', '');
    await checkoutPage.clickContinue();
    await expect(checkoutPage.getErrorMessage()).toContainText('First Name is required');
});

test('verify total price on checkout page', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productListingPage.addItemToCart(products.backpack);
    await productListingPage.addItemToCart(products.bikeLight);
    await productListingPage.clickOnCart(); 
    const itemTotal = await cartPage.getCartPrice();
    await cartPage.clickCheckout();
    await checkoutPage.fillShippingInformation(shippingInfo.firstName, shippingInfo.lastName, shippingInfo.zipCode);
    await checkoutPage.clickContinue();
    const tax = await checkoutPage.getTaxAmount();
    const total = await checkoutPage.getTotalAmount();
    expect(total).toBe(itemTotal + tax);
});
