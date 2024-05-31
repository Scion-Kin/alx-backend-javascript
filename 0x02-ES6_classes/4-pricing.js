import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
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
    const currency = new Currency(this.currency.code, this.currency.name);
    return `${this.amount} ${currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
