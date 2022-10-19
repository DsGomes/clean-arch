import Item from "../src/Item";
import Order from "../src/Order";

describe('#Order', () => {
    test('Should not create order with invalid cpf', () => {
        const cpf = '111.444.777-34';
        expect(() => { new Order(cpf) }).toThrow(new Error('Invalid CPF'));
    })

    test('Should create order with 3 items', () => {
        const cpf = '111.444.777-35';

        const order = new Order(cpf);
        order.addItem(new Item(1, 'Computador', 20), 2);
        order.addItem(new Item(2, 'Celular', 10), 1);
        order.addItem(new Item(3, 'Fone de ouvido', 8), 1);

        const totalOrder = order.execute();

        expect(totalOrder).toBe(58);
    })

    test('Should not create order with invalid item quantity', () => {
        const cpf = '111.444.777-35';
        const order = new Order(cpf);
        expect(() => { order.addItem(new Item(1, 'Computador', 20), -1); }).toThrow(new Error('Invalid quantity'));
    })
})