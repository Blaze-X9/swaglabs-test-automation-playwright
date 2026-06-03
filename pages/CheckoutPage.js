export default class CheckoutPage {
    constructor(page) {
        this.page = page;
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

    async getOrderConfirmation() {
        return await this.page.locator('.complete-header').innerText();
    }

}