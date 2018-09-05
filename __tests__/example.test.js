const { sum } = require('../example');

describe('sum()', () => {
  it('returns same number when passed a single integer', () => {
    expect(sum(1)).toBe(1);
    expect(sum(32)).toBe(32);
  });
  it('adds two numbers', () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum(3, 4)).toBe(7);
  });
  it('adds many numbers', () => {
    expect(sum(1, 1, 3, 4, 500)).toBe(509);
  });
  it('adds negative numbers', () => {
    expect(sum(-3, -93, 6)).toBe(-90);
  });
  it('adds numeric strings', () => {
    expect(sum('22', '33')).toBe(55);
  });
  it('throws an error when passed a non-numeric string', () => {
    const errMsg = 'Only numbers please!';
    expect(() => sum('ant')).toThrowError(errMsg);
    expect(() => sum([1])).toThrowError(errMsg);
    expect(() => sum({ name: 'no' })).toThrowError(errMsg);
    expect(() => sum(null)).toThrowError(errMsg);
  });
});
