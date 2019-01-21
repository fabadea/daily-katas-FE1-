const { parseHexInt } = require('../parseHexInt')

describe('parseHexInt', function () {
  it('returns decimal number for single char hexadecimal number', () => {
    expect(parseHexInt('9')).toEqual(9);
    expect(parseHexInt('A')).toEqual(10);
    expect(parseHexInt('F')).toEqual(15);
  });
  it('it is case insensitive when it comes to the hexadecimal numbers', () => {
    expect(parseHexInt('a')).toEqual(10);
    expect(parseHexInt('f')).toEqual(15);
  });
  it('returns the hexadecimal number expressed in the decimal numerical sytem', () => {
    expect(parseHexInt('ff')).toEqual(255);
    expect(parseHexInt('17f')).toEqual(383);
    expect(parseHexInt('d4e89')).toEqual(872073);
  });
});
