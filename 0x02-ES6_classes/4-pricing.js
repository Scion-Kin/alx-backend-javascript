import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = Currency(currency.code, currency.name);
    }

    get amount() {
        return this._amount;
    }

    set amount(val) {
        this._amount = val;
    }

    get currency() {
        return this._currency;
    }

    set currency(val) {
        this._currency = val;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullPrice()}`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}
