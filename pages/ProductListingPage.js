export default class ProductListingPage {
    constructor(page) {
        this.page = page;
        }

    getTitle() {
        return this.page.locator('.title');
    }

    async addItemToCart(itemName) {
        const items = await this.page.locator('.inventory_item');
        const count = await items.count();
        for(let i = 0; i < count; i++) {
            const name = await items.nth(i).locator('.inventory_item_name').innerText();
            if(name === itemName) {
                await items.nth(i).locator('button').click();
                break;
            }
        }   
    }

    async removeItemFromCart(itemName) {
        const items = await this.page.locator('.inventory_item');
        const count = await items.count();
        for(let i = 0; i < count; i++) {
            const name = await items.nth(i).locator('.inventory_item_name').innerText();
            if(name === itemName) {
                await items.nth(i).locator('button').click();
                break;
            }
        }   
    }

    async clickonProduct(itemName) {
        const items = await this.page.locator('.inventory_item');
        const count = await items.count();  
        for(let i = 0; i < count; i++) {
            const name = await items.nth(i).locator('.inventory_item_name').innerText();
            if(name === itemName) {
                await items.nth(i).locator('.inventory_item_name').click();
                break;
            }
        }   
    }

    async clickOnCart() {
        await this.page.locator('a.shopping_cart_link').click();
    }

    async clickOnMenu() {
        await this.page.getByRole('button', { name: 'Open Menu' }).click();
    }   

    async clickOnLogout() {
        await this.page.getByRole('link', { name: 'Logout' }).click();
    }  
    
    async sortProductsBy(option){
        await this.page.locator('.product_sort_container').selectOption(option);
    }

    async getProductNames() {
        const names = await this.page.locator('.inventory_item_name').allInnerTexts();
        return names;
    }

    async getProductPrices() {
        const textPrices = await this.page.locator('.inventory_item_price').allInnerTexts();
        const prices = textPrices.map(val => parseFloat(val.replace(/[^0-9.-]+/g, '')));
        return prices;
    }

}