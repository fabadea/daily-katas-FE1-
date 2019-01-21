const { romanNumeralEncoder } = require('../romanNumeralEncoder')

describe('romanNumeralEncoder()', function () {
  it('returns an empty string for invalid input', () => {
    expect(romanNumeralEncoder(true)).toEqual('');
    expect(romanNumeralEncoder('something')).toEqual('');
  });
  it('returns a Roman Numeral string when passed a number', () => {
    expect(romanNumeralEncoder(1)).toEqual('I');
    expect(romanNumeralEncoder(2)).toEqual('II');
    expect(romanNumeralEncoder(10)).toEqual('X');
    expect(romanNumeralEncoder(17)).toEqual('XVII');
    expect(romanNumeralEncoder(49)).toEqual('XLIX');
    expect(romanNumeralEncoder(60)).toEqual('LX');
    expect(romanNumeralEncoder(69)).toEqual('LXIX');
    expect(romanNumeralEncoder(75)).toEqual('LXXV');
    expect(romanNumeralEncoder(89)).toEqual('LXXXIX');
    expect(romanNumeralEncoder(91)).toEqual('XCI');
  });
});
