import Currency from './3-currency.js'; // eslint-disable-line import/extensions

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new Error('Inputs must be numbers');
    }
    if (!(currency instanceof Currency)) {
      throw new Error('Currency must be a currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('Inputs must be numbers');
    }
    return amount * conversionRate;
  }
}
