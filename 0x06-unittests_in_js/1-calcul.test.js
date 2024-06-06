const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test for calculateNumber', () => {
  describe('SUM operation', () => {
    it('should round 2.49 to 2 and 2.51 to 3 and return a sum of 5', () => {
      const answer = calculateNumber('SUM', 2.49, 2.51);
      assert.strictEqual(answer, 5);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should round 5.5 to 6 and 2.1 to 2 and return a difference of 4', () => {
      const answer = calculateNumber('SUBTRACT', 5.5, 2.1);
      assert.strictEqual(answer, 4);
    });
  });

  describe('DIVIDE operation', () => {
    it('should round 2.49 to 2 and 0.001 to 0 and return a division error', () => {
      const answer = calculateNumber('DIVIDE', 2.49, 0.001);
      assert.strictEqual(answer, 'Error');
    });

    it('should round 9.7 to 10 and 2.5 to 3 and return a division of 10 / 3', () => {
      const answer = calculateNumber('DIVIDE', 9.7, 2.5);
      assert.strictEqual(answer, 10 / 3);
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 2, 3), Error, 'Invalid type');
    });
  });
});

