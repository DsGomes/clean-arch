import Cpf from "./Cpf";
import Item from "./Item";
import OrderItems from './OrderItems';

export default class Order {
    private Cpf: Cpf;
    private orderItems: OrderItems[];

    constructor(readonly cpf: string) {
        this.Cpf = new Cpf(cpf);
        this.orderItems = [];
    }

    addItem (item: Item, quantity: number): void {
        const itemId = this.orderItems.find(orderItem => orderItem.itemId === item.itemId);
        if(itemId) throw new Error('Item already exists');

        this.orderItems.push(new OrderItems(item.itemId, item.price, quantity));
    }

    execute (): number {
        const orderTotal = this.orderItems.reduce((total, orderItem) => {
            return total += orderItem.getTotal();
        }, 0);

        return orderTotal;
    }
}