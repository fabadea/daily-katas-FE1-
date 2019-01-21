const { subArrSum } = require('../subArrSum')

describe('subArrSum', function () {
  it('returns zero for an empty array', () => {
    expect(subArrSum([])).toEqual(0);
  });
  it('returns zero if array ccontains only negative elements', () => {
    expect(subArrSum([-2, -3])).toEqual(0);
  });
  it('returns element if only one positive element', () => {
    expect(subArrSum([1])).toEqual(1);
  });
  it('returns the sum of the whole array if only positive numbers', () => {
    expect(subArrSum([1, 2, 3, 4])).toEqual(10);
  });
  it('returns the maximum sum of any subsequence of consecutive numbers in an array', () => {
    expect(subArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
    expect(subArrSum([9, 8, 7, -3, 6, 5, 4, -3, 2, 1])).toEqual(36);
    expect(subArrSum([5, -6, 2, 9, -4, -3, 8, -10, 20])).toEqual(22);
  });
});
