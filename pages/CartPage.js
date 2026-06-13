export default class CartPage {
    constructor(page) {
        this.page = page;

        this.cartItems = this.page.locator('.inventory_item_name');
        this.cartBadge = this.page.locator('.shopping_cart_badge');
        this.itemPrices = this.page.locator('.inventory_item_price');
        this.checkoutButton = this.page.getByRole('button', { name: 'Checkout' });
        this.cartItemRows = this.page.locator('.cart_item');
    }

    getCartItems() {
        return this.cartItems;
    }

    getCartBadge() {
        return this.cartBadge;
    }

    async getCartPrice() {
        const textPrice = await this.itemPrices.allInnerTexts();

        const sum = textPrice
            .map(val => parseFloat(val.replace(/[^0-9.-]+/g, '')))
            .reduce((acc, curr) => acc + curr, 0);

        return sum;
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }

    async removeItemFromCart(itemName) {
        const itemRow = this.cartItemRows
            .filter({ hasText: itemName })
            .getByRole('button', { name: 'Remove' });
        await itemRow.click();
    }
}
