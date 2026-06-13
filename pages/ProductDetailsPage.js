export default class ProductDetailsPage {
    constructor(page) {
        this.page = page;

        this.productName = this.page.locator('.inventory_details_name');
    }

    getProductName() {
        return this.productName;
    }
}