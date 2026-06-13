import {test,expect} from '../fixtures/baseTest';
import users from '../test-data/users';
import products from '../test-data/products';

test.beforeEach(async ({ LoginPage }) => {
    await LoginPage.login(users.standardUser.username, users.standardUser.password);
});

test('user can view product details', async ({ ProductListingPage, ProductDetailsPage }) => {
    await ProductListingPage.clickonProduct(products.backpack);
    await expect(ProductDetailsPage.getProductName()).toHaveText(products.backpack);
});

test('user can sort products alphabetically', async ({ ProductListingPage }) => {
    await ProductListingPage.sortProductsBy('za');
    const productNames = await ProductListingPage.getProductNames();
    const sortedNames = productNames.sort().reverse();
    expect(productNames).toEqual(sortedNames);
    await ProductListingPage.sortProductsBy('az');
    const sortedNamesAZ = productNames.sort();
    expect(productNames).toEqual(sortedNamesAZ);
});

test('user can sort products by price', async ({ ProductListingPage }) => {
    await ProductListingPage.sortProductsBy('lohi');
    const productPrices = await ProductListingPage.getProductPrices();
    const sortedPrices = productPrices.sort((a, b) => a - b);
    expect(productPrices).toEqual(sortedPrices);
    await ProductListingPage.sortProductsBy('hilo');
    const sortedPricesHI = productPrices.sort((a, b) => b - a);
    expect(productPrices).toEqual(sortedPricesHI);
});
