export default class ProductListingPage {
    constructor(page) {
        this.page = page;

        this.title = this.page.locator('.title');
        this.productRows = this.page.locator('.inventory_item');
        this.cartLink = this.page.locator('a.shopping_cart_link');
        this.menuButton = this.page.getByRole('button', { name: 'Open Menu' });
        this.logoutButton = this.page.getByRole('link', { name: 'Logout' });   
        this.sortLink = this.page.locator('.product_sort_container'); 
        this.productNames = this.page.locator('.inventory_item_name');
        this.productPrices = this.page.locator('.inventory_item_price');
    }

    getTitle() {
        return this.title;
    }

    async addItemToCart(itemName) {  
        const items = this.productRows
        .filter({ hasText: itemName })
        .getByRole('button', { name: 'Add to cart' });
        await items.click();
    }

    async removeItemFromCart(itemName) {
        const items = this.productRows
        .filter({ hasText: itemName })
        .getByRole('button', { name: 'Remove' });
        await items.click();
    }

    async clickOnProduct(itemName) {
        const itemLink = this.productRows
        .filter({ hasText: itemName })
        .locator('.inventory_item_name');
        await itemLink.click();  
    }

    async clickOnCart() {
        await this.cartLink.click();
    }

    async clickOnMenu() {
        await this.menuButton.click();
    }

    async clickOnLogout() {
        await this.logoutButton.click();
    }

    async sortProductsBy(option){
        await this.sortLink.selectOption(option);
    }

    async getProductNames() {
        const names = await this.productNames.allInnerTexts();
        return names;
    }

    async getProductPrices() {
        const textPrices = await this.productPrices.allInnerTexts();
        const prices = textPrices.map(val => parseFloat(val.replace(/[^0-9.-]+/g, '')));
        return prices;
    }

}