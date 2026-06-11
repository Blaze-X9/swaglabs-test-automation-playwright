export default class CheckoutPage {
    constructor(page) {
        this.page = page;
    }

    getErrorMessage() {
        return this.page.locator('.error-message-container');
    }

    async getTaxAmount() {
        const textTax = await this.page.locator('.summary_tax_label').innerText();
        const tax = parseFloat(textTax.replace(/[^0-9.-]+/g, ''));
        return tax;
    }

    async getTotalAmount() {
        const textTotal = await this.page.locator('.summary_total_label').innerText();
        const total = parseFloat(textTotal.replace(/[^0-9.-]+/g, ''));
        return total;
    }

    async fillShippingInformation(firstName, lastName, zipCode) {
        await this.page.getByPlaceholder('First Name').fill(firstName);
        await this.page.getByPlaceholder('Last Name').fill(lastName);
        await this.page.getByPlaceholder('Zip/Postal Code').fill(zipCode);
    }

    async clickContinue() {
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

    async clickFinish() {
        await this.page.getByRole('button', { name: 'Finish' }).click();
    }

    getOrderConfirmation() {
        return this.page.locator('.complete-header');
    }

}