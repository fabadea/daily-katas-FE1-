const { findMostRepeated } = require('../findMostRepeated')

describe('findMostRepeated()', function () {
  it('returns an object with empty array of elements and null for repeats if the array is empty', () => {
    expect(findMostRepeated([])).toEqual({ elements: [], repeats: null });
  });
  it('returns an object with empty array of elements and null for repeats if there are no repeated elements', () => {
    expect(findMostRepeated(['foo', 'bar', 'hello', 'world'])).toEqual({ elements: [], repeats: null });
  });
  it('returns an object that describes the most repeated single element in the array', () => {
    expect(findMostRepeated(['foo', 'foo', 'bar', 'hello', 'world'])).toEqual({ elements: ['foo'], repeats: 2 });
  });
  it('returns an object that describes the most repeated elements in the array', () => {
    expect(findMostRepeated(['foo', 'foo', 1, 2, 3, 'bar', 2, 3, 4, 'bar', 'bar', 'foo'])).toEqual({ elements: ['foo', 'bar'], repeats: 3 });
  });
});