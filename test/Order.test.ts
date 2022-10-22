import Coupon from "../src/Coupon";
import Item from "../src/Item";
import Order from "../src/Order";

const validCpf = '111.444.777-35';
const invalidCpf = '111.444.777-34';

describe('#Order', () => {
    test('Should not create order with invalid cpf', () => {
        expect(() => { new Order(invalidCpf) }).toThrow(new Error('Invalid CPF'));
    })

    test('Should create order with 3 items', () => {
        const order = new Order(validCpf);
        order.addItem(new Item(1, 'Computador', 20), 2);
        order.addItem(new Item(2, 'Celular', 10), 1);
        order.addItem(new Item(3, 'Fone de ouvido', 8), 1);

        const totalOrder = order.execute();

        expect(totalOrder).toBe(58);
    })

    test('Should create order when coupon is passed', () => {
        const order = new Order(validCpf);
        order.addItem(new Item(1, 'Computador', 20), 2);
        order.addItem(new Item(2, 'Celular', 10), 1);
        order.addItem(new Item(3, 'Fone de ouvido', 8), 1);

        order.addCoupon(new Coupon('20OFFPERIFERICOS', '20'));

        const totalOrder = order.execute();

        expect(totalOrder).toBe(46.4);
    })

    test('Should create order when coupon is expired', () => {
        const order = new Order(validCpf);
        order.addItem(new Item(1, 'Computador', 20), 2);
        order.addItem(new Item(2, 'Celular', 10), 1);
        order.addItem(new Item(3, 'Fone de ouvido', 8), 1);

        order.addCoupon(new Coupon('20OFFPERIFERICOS', '20', new Date(2022, 9, 10)));

        const totalOrder = order.execute();

        expect(totalOrder).toBe(58);
    })

    test('Should not create order with invalid item quantity', () => {
        const order = new Order(validCpf);
        expect(() => { order.addItem(new Item(1, 'Computador', 20), -1); }).toThrow(new Error('Invalid quantity'));
    })

    test('Should not create order when item already exists', () => {
        const order = new Order(validCpf);
        order.addItem(new Item(1, 'Computador', 20), 1);
        expect(() => { order.addItem(new Item(1, 'Computador', 20), 1); }).toThrow(new Error('Item already exists'));
    })
})