const { findPartner } = require('../findPartner')

describe('findPartner()', function () {
  const students = [
    ['Sam', 'Harriet', 'Mitch', 'Jonny', 'JD', 'Kavita'],
    ['Amul', 'Chris', 'Mauro', 'Ruth', 'Haz', 'Joshua']
  ];
  it('returns an empty array if missing arguments', () => {
    expect(findPartner()).toEqual([]);
    expect(findPartner(students)).toEqual([]);
  });
  it('returns an empty array if an array of directions is empty', () => {
    expect(findPartner(students, [])).toEqual([]);
  });
  it('returns an empty array if incorrect direction', () => {
    expect(findPartner(students, ['cat'])).toEqual([]);
  });
  it('returns correct items in the same array horizontally', () => {
    expect(findPartner(students, ['right'])).toEqual(['Harriet']);
    expect(findPartner(students, ['right', 'right', 'right'])).toEqual(['Harriet', 'Mitch', 'Jonny']);
  });
  it('returns the rightmost item in the same array if you are at the leftmost item and go left', () => {
    expect(findPartner(students, ['left'])).toEqual(['Kavita']);
  });
  it('returns the leftmost item in the same array if you are at the rightmost item and go right', () => {
    expect(findPartner(students, ['right', 'right', 'right', 'right', 'right'])).toEqual(['Harriet', 'Mitch', 'Jonny', 'JD', 'Kavita']);
  });
  it('returns correct items vertically', () => {
    expect(findPartner(students, ['down'])).toEqual(['Amul']);
  });
  it('if you at the top of the array and try to go up, you will stay where you are', () => {
    expect(findPartner(students, ['up'])).toEqual([]);
    expect(findPartner(students, ['right', 'up', 'up'])).toEqual(['Harriet']);
  });
  it('if you at the end of the array and try to go down, you will stay where you are', () => {
    expect(findPartner(students, ['down', 'down'])).toEqual(['Amul']);
    expect(findPartner(students, ['down', 'down', 'left'])).toEqual(['Amul', 'Joshua']);
  });
});
