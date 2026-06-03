export default class ProductListingPage {
    constructor(page) {
        this.page = page;
        }

    async getTitle() {
        return await this.page.locator('.title').innerText();
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
}