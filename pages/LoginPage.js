export default class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async login(username, password) {
        await this.page.goto('https://www.saucedemo.com/');
        await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
    
    getErrorMessage() {
        return this.page.locator('.error-message-container');
    }

    getTitle() {
        return this.page.locator('.login_logo');
    }
}