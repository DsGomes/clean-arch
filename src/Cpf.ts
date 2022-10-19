export default class Cpf{
    constructor(readonly value: string){
        if(!this.validate(value)) throw new Error('Invalid CPF');
    }

    private removeSpecialCharacters(cpf: string) : string {
        return cpf.replace('.','').replace('.','').replace('-','').replace(" ","");
    };

    private hasCpfLength(cpf) : boolean {
        return cpf.length == 11;
    }

    private hasSameCharacters(cpf) : boolean {
        return !cpf.split("").every(c => c === cpf[0]);
    };

    private calculateDigits(cpf, factor) : number {
        let digitSum = 0;

        for(const digit of cpf)
            if (factor > 1) digitSum += digit * factor--;

        const rest = (digitSum % 11);
        return (rest < 2) ? 0 : 11 - rest;
    };

    private validate(cpf: string) : boolean {
        if (!cpf) return false;
        cpf = this.removeSpecialCharacters(cpf);
        if (!this.hasCpfLength(cpf)) return false;
        if (!this.hasSameCharacters(cpf)) return false;

        const calculatedDigit1 = this.calculateDigits(cpf, 10);
        const calculatedDigit2 = this.calculateDigits(cpf, 11);

        let lastDigits = cpf.substring(cpf.length-2, cpf.length);
        return lastDigits == `${calculatedDigit1}${calculatedDigit2}`;
    }
}