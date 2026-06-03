export default class ProductDetailsPage {
    constructor(page) {
        this.page = page;
    }

    getProductName() {
        return this.page.locator('.inventory_details_name');
    }
}