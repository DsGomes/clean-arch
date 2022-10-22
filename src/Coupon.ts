export default class Coupon {
    constructor (readonly name: string, readonly discount: string, readonly expireDate?: Date) {}

    isExpired (now: Date = new Date()) {
        return this.expireDate && this.expireDate.getTime() < now.getTime();
    }

    calculateDiscount(total: number, now: Date = new Date()) {
        if(this.isExpired(now)) return 0;
        return (total * parseFloat(this.discount)) / 100;
    }
}