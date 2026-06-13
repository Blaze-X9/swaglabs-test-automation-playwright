import { test, expect } from '../fixtures/baseTest';
import users from '../test-data/users';
import errorMessage from '../test-data/errorMessage';



test('user can login', async ({ LoginPage, ProductListingPage }) => {
    await LoginPage.login(users.standardUser.username, users.standardUser.password);
    await expect(ProductListingPage.getTitle()).toHaveText('Products');
});

test('login with invalid credentials shows error', async ({ LoginPage }) => {
    await LoginPage.login(users.invalidUser.username, users.invalidUser.password);
    await expect(LoginPage.getErrorMessage()).toContainText(errorMessage.invalid);
});

test('login with locked_out_user shows error', async ({ LoginPage }) => {
    await LoginPage.login(users.lockedUser.username, users.lockedUser.password);
    await expect(LoginPage.getErrorMessage()).toContainText(errorMessage.locked);
});

test('login with empty credentials shows error', async ({ LoginPage }) => {
    await LoginPage.login('', '');
    await expect(LoginPage.getErrorMessage()).toContainText(errorMessage.empty);
});

test('user can logout', async ({ LoginPage, ProductListingPage }) => {
    await LoginPage.login(users.standardUser.username, users.standardUser.password);
    await ProductListingPage.clickOnMenu();
    await ProductListingPage.clickOnLogout();
    await expect(LoginPage.getTitle()).toBeVisible();
});