import { test, expect } from '../fixtures/baseTest';
import users from '../test-data/users';
import products from '../test-data/products';
import shippingInfo from '../test-data/shippingInfo';

test.beforeEach(async ({ LoginPage }) => {
    await LoginPage.login(users.standardUser.username, users.standardUser.password);
});

test('user can checkout', async ({ ProductListingPage, CartPage, CheckoutPage }) => {
    await ProductListingPage.addItemToCart(products.backpack);
    await ProductListingPage.clickOnCart();
    await CartPage.clickCheckout();
    await CheckoutPage.fillShippingInformation(shippingInfo.firstName, shippingInfo.lastName, shippingInfo.zipCode);
    await CheckoutPage.clickContinue();
    await CheckoutPage.clickFinish();
    await expect(CheckoutPage.getOrderConfirmation()).toHaveText('Thank you for your order!');
});

test('user can checkout with multiple items', async ({ ProductListingPage, CartPage, CheckoutPage }) => {
    await ProductListingPage.addItemToCart(products.backpack);
    await ProductListingPage.addItemToCart(products.bikeLight);
    await ProductListingPage.clickOnCart();
    await CartPage.clickCheckout();
    await CheckoutPage.fillShippingInformation(shippingInfo.firstName, shippingInfo.lastName, shippingInfo.zipCode);
    await CheckoutPage.clickContinue();
    await CheckoutPage.clickFinish();
    await expect(CheckoutPage.getOrderConfirmation()).toHaveText('Thank you for your order!');
});

test('user cannot checkout with empty shipping information', async ({ ProductListingPage, CartPage, CheckoutPage }) => {
    await ProductListingPage.addItemToCart(products.backpack);
    await ProductListingPage.addItemToCart(products.bikeLight);
    await ProductListingPage.clickOnCart();
    await CartPage.clickCheckout();
    await CheckoutPage.fillShippingInformation('', '', '');
    await CheckoutPage.clickContinue();
    await expect(CheckoutPage.getErrorMessage()).toContainText('First Name is required');
});

test('verify total price on checkout page', async ({ ProductListingPage, CartPage, CheckoutPage }) => {
    await ProductListingPage.addItemToCart(products.backpack);
    await ProductListingPage.addItemToCart(products.bikeLight);
    await ProductListingPage.clickOnCart();
    const itemTotal = await CartPage.getCartPrice();
    await CartPage.clickCheckout();
    await CheckoutPage.fillShippingInformation(shippingInfo.firstName, shippingInfo.lastName, shippingInfo.zipCode);
    await CheckoutPage.clickContinue();
    const tax = await CheckoutPage.getTaxAmount();
    const total = await CheckoutPage.getTotalAmount();
    expect(total).toBe(itemTotal + tax);
});
