import {test,expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ProductListingPage from '../pages/ProductListingPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import users from '../test-data/users';
import products from '../test-data/products';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(users.standardUser.username, users.standardUser.password);
});

test('user can view product details', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    await productListingPage.clickonProduct(products.backpack);

    const productDetailsPage = new ProductDetailsPage(page);
    await expect(productDetailsPage.getProductName()).toHaveText(products.backpack);
});

test('user can sort products alphabetically', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    await productListingPage.sortProductsBy('za');
    const productNames = await productListingPage.getProductNames();
    const sortedNames = productNames.sort().reverse();
    expect(productNames).toEqual(sortedNames);
    await productListingPage.sortProductsBy('az');
    const sortedNamesAZ = productNames.sort();
    expect(productNames).toEqual(sortedNamesAZ);
});

test('user can sort products by price', async ({ page }) => {
    const productListingPage = new ProductListingPage(page);
    await productListingPage.sortProductsBy('lohi');
    const productPrices = await productListingPage.getProductPrices();
    const sortedPrices = productPrices.sort((a, b) => a - b);
    expect(productPrices).toEqual(sortedPrices);
    await productListingPage.sortProductsBy('hilo');
    const sortedPricesHI = productPrices.sort((a, b) => b - a);
    expect(productPrices).toEqual(sortedPricesHI);
});