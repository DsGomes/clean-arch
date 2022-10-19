export default class OrderItems {
    constructor(readonly itemId: number, readonly price: number, readonly quantity: number) {
        if (quantity <= 0) throw new Error('Invalid quantity');
    }

    getTotal(): number {
        return this.price * this.quantity;
    }
}