const { fillSquare } = require('../fillSquare')

describe('fillSquare', function () {
  it('returns the same array if it is a square', () => {
    expect(fillSquare([[1]])).toEqual([[1]]);
    expect(fillSquare([[undefined, 2], [3, 4]])).toEqual([[undefined, 2], [3, 4]]);
  });
  it('adds null if more nested arrays than elements', () => {
    expect(fillSquare([[]])).toEqual([[null]]);
    const arr = [[1], [3]];
    expect(fillSquare(arr)).toEqual([[1, null], [3, null]]);
  });
  it('adds extra sub-arrays if needed', () => {
    const arr = [[1, 2, 3]];
    const expected = [[1, 2, 3], [null, null, null], [null, null, null]];
    expect(fillSquare(arr)).toEqual(expected);
  });
  it('returns square matrix with the value null standing in for any blank positions', () => {
    const arr = [
      [0, 2, 3],
      [1, 2],
      [1]
    ];
    const expected = [
      [0, 2, 3],
      [1, 2, null],
      [1, null, null]
    ];
    expect(fillSquare(arr)).toEqual(expected);

    const arr1 = [
      [1, 2, 3],
      [1, 2, 3, 4, 5, 6],
      [1]
    ];
    const expected1 = [
      [1, 2, 3, null, null, null],
      [1, 2, 3, 4, 5, 6],
      [1, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ];
    expect(fillSquare(arr1)).toEqual(expected1);

    const arr2 = [
      [1, 2, 3],
      [1, 2, 3],
      [1],
      [],
      [1, 2, 3],
      [1]
    ];
    const expected2 = [
      [1, 2, 3, null, null, null],
      [1, 2, 3, null, null, null],
      [1, null, null, null, null, null],
      [null, null, null, null, null, null],
      [1, 2, 3, null, null, null],
      [1, null, null, null, null, null]
    ];
    expect(fillSquare(arr2)).toEqual(expected2);
  });
});
