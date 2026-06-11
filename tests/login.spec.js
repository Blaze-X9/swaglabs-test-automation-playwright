import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ProductListingPage from '../pages/ProductListingPage';
import users from '../test-data/users';
import errorMessage from '../test-data/errorMessage';


test('user can login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(users.standardUser.username, users.standardUser.password);

    const productListingPage = new ProductListingPage(page);
    await expect(productListingPage.getTitle()).toHaveText('Products');
});

test('login with invalid credentials shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);
    await expect(loginPage.getErrorMessage()).toContainText(errorMessage.invalid);
});

test('login with locked_out_user shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(users.lockedUser.username, users.lockedUser.password);
    await expect(loginPage.getErrorMessage()).toContainText(errorMessage.locked);
});

test('login with empty credentials shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('', '');
    await expect(loginPage.getErrorMessage()).toContainText(errorMessage.empty);
});

test('user can logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(users.standardUser.username, users.standardUser.password);

    const productListingPage = new ProductListingPage(page);
    await productListingPage.clickOnMenu();
    await productListingPage.clickOnLogout();
    await expect(loginPage.getTitle()).toBeVisible();
});