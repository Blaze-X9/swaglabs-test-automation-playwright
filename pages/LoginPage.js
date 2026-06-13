export default class LoginPage {
    constructor(page) {
        this.page = page;

        this.baseUrl = 'https://www.saucedemo.com/';
        this.usernameInput = this.page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.errorMessage = this.page.locator('.error-message-container');
        this.title = this.page.locator('.login_logo');
    }

    async login(username, password) {
        await this.page.goto(this.baseUrl);
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    
    getErrorMessage() {
        return this.errorMessage;
    }

    getTitle() {
        return this.title;
    }
}