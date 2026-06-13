import {test as base} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import ProductListingPage from '../pages/ProductListingPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';

export const test = base.extend({
    LoginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    CartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    CheckoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
    ProductListingPage: async ({ page }, use) => {
        await use(new ProductListingPage(page));
    },
    ProductDetailsPage: async ({ page }, use) => {
        await use(new ProductDetailsPage(page));
    },
});

export { expect } from '@playwright/test';