import Cpf from "../src/Cpf";

describe('#Cpf', () => {
    it('should return true when cpf has punctuation and is valid', () => {
        const cpf = '111.444.777-35';
        const isValid = new Cpf(cpf);
        expect(isValid).toBeTruthy();
    });

    it('should return true when cpf has punctuation and is valid', () => {
        const cpf = '111.444.765-00';
        const isValid = new Cpf(cpf);
        expect(isValid).toBeTruthy();
    });

    it('should return true when cpf has not punctuation and is valid', () => {
        const cpf = '11144477735';
        const isValid = new Cpf(cpf);
        expect(isValid).toBeTruthy();
    });

    it('should return false when cpf has 10 length and is invalid', () => {
        const cpf = '1114447773';
        expect(() => { new Cpf(cpf) }).toThrow(new Error('Invalid CPF'));
    });

    it('should return false when cpf is invalid', () => {
        const cpf = '111.444.777-05';
        expect(() => { new Cpf(cpf) }).toThrow(new Error('Invalid CPF'));
    });

    it('should return false when cpf is incorrect format', () => {
        const cpf = "ABCDEFGHIJKLM";
        expect(() => { new Cpf(cpf) }).toThrow(new Error('Invalid CPF'));
    });
});