import Building from './5-building.js'; // eslint-disable-line import/extensions

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft !== 'number') {
      throw new Error('Input must be a number');
    }
    if (typeof floors !== 'number') {
      throw new Error('Input must be a number');
    }
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`; // Template literal
  }
}
