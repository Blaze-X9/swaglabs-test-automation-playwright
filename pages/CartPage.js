export default class CartPage {
    constructor(page) {
        this.page = page;
    }

    getCartItems() {
        return this.page.locator('.inventory_item_name');
    }

    getCartBadge() {
        return this.page.locator('.shopping_cart_badge');
    }

    async getCartPrice() {
        const textPrice = await this.page.locator('.inventory_item_price').allInnerTexts();

        const sum = textPrice
            .map(val => parseFloat(val.replace(/[^0-9.-]+/g, '')))
            .reduce((acc, curr) => acc + curr, 0);

        return sum;
    }

    async clickCheckout() {
        await this.page.getByRole('button', { name: 'Checkout' }).click();
    }

    async removeItemFromCart(itemName) {
        const items = await this.page.locator('div.cart_item');
        const count = await items.count();
        for (let i = 0; i < count; i++) {
            const name = await items.nth(i).locator('.inventory_item_name').innerText();
            if (name === itemName) {
                await items.nth(i).locator('button').click();
                break;
            }
        }
    }
}
