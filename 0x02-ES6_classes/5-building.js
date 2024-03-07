export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Input must be a number');
    }
    this._sqft = sqft;

    // Prevent direct instantiation of the abstract class
    if (this.constructor === Building) {
      throw new Error('Cannot create instances of abstract class Building');
    }
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract method declaration
  evacuationWarningMessage() { // eslint-disable-line class-methods-use-this
    throw new Error('Abstract method evacuationWarningMessage must be implemented in subclasses');
  }
}
