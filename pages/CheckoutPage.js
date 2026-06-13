export default class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.errorMessage = this.page.locator('.error-message-container');
        this.taxAmount = this.page.locator('.summary_tax_label');
        this.totalAmount = this.page.locator('.summary_total_label');
        this.firstNameInput = this.page.getByPlaceholder('First Name');
        this.lastNameInput = this.page.getByPlaceholder('Last Name');
        this.zipCodeInput = this.page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = this.page.getByRole('button', { name: 'Continue' });
        this.finishButton = this.page.getByRole('button', { name: 'Finish' });
        this.orderConfirmation = this.page.locator('.complete-header');
    }

    getErrorMessage() {
        return this.errorMessage;
    }

    async getTaxAmount() {
        const textTax = await this.taxAmount.innerText();
        const tax = parseFloat(textTax.replace(/[^0-9.-]+/g, ''));
        return tax;
    }

    async getTotalAmount() {
        const textTotal = await this.totalAmount.innerText();
        const total = parseFloat(textTotal.replace(/[^0-9.-]+/g, ''));
        return total;
    }

    async fillShippingInformation(firstName, lastName, zipCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.zipCodeInput.fill(zipCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async clickFinish() {
        await this.finishButton.click();
    }

    getOrderConfirmation() {
        return this.orderConfirmation;
    }

}