export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Input must be a number');
    }
    this._sqft = sqft;

    // Prevent direct instantiation of the abstract class
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
