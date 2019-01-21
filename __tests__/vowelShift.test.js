const { vowelShift } = require('../vowelShift')

describe('vowelShift()', function () {
  it('returns unchanged string if no second argument or equal 0', () => {
    expect(vowelShift('foo')).toEqual('foo');
    expect(vowelShift('foo', 0)).toEqual('foo');
  });
  it('shifts vowels 1 vowel position to the right if second argument equal 1', () => {
    expect(vowelShift('hello', 1)).toEqual('holle');
    expect(vowelShift('hello child', 1)).toEqual('hille chold');
  });
  it('shifts every vowel in the string n vowel positions', () => {
    expect(vowelShift('star nosed mole', 2)).toEqual('stor nesad mole');
    expect(vowelShift('funnily enough', 4)).toEqual('finnely onuugh');
  });
});
