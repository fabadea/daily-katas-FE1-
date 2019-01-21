const { binarySearch } = require('../binarySearch')

describe('binarySearch()', () => {
  it('searches for a number in a list and returns it"s index', () => {
    expect(binarySearch([10, 11, 12, 13, 14, 15, 16], 15)).toEqual(5);
  })
  it('searches for a number in a list and returns -1 if not found', () => {
    expect(binarySearch([10, 11, 12, 13, 14, 15, 16], 20)).toEqual(-1);
  })
  it('serches for a number recursilvely', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], 1)).toEqual(0);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], 2)).toEqual(1);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], 3)).toEqual(2);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], 4)).toEqual(3);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], 5)).toEqual(4);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], 6)).toEqual(5);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], 10)).toEqual(6);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], 11)).toEqual(7);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], 12)).toEqual(8);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], 13)).toEqual(9);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], 14)).toEqual(10);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], 15)).toEqual(11);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], 16)).toEqual(12);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], 17)).toEqual(-1);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], 22)).toEqual(-1);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], -2)).toEqual(-1);
  })
})
