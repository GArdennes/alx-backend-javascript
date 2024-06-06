const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test for calculateNumber', () => {
  it('should round 2.49 to 2 and 2.51 to 3', () => {
    const answer = calculateNumber(2.49, 2.51);
    assert.strictEqual(answer, 5);
  });

  it('should round 1.4 to 1 and 4.6 to 5', () => {
    const answer = calculateNumber(1.4, 4.6);
    assert.strictEqual(answer, 6);
  });

  it('should round -1.4 to -1 and -4.6 to -5', () => {
    const answer = calculateNumber(-1.4, -4.6);
    assert.strictEqual(answer, -6);
  });

  it('should round 0.5 to 1 and 0.5 to 1', () => {
    const answer = calculateNumber(0.5, 0.5);
    assert.strictEqual(answer, 2);
  });

  it('should handle integers correctly', () => {
    const answer = calculateNumber(3, 7);
    assert.strictEqual(answer, 10);
  });
});
