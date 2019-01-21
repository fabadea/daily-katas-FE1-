const { rgbaModifier } = require('../rgbaModifier')

describe('rgbaModifier()', function () {
  it('returns unchanged string if only first argument given', () => {
    expect(rgbaModifier('rgba(100,100,100,0.6)')).toEqual('rgba(100,100,100,0.6)');
  });
  it('returns unchanged string if second argument isEqual 0 and no third argument', () => {
    expect(rgbaModifier('rgba(100,100,100,0.6)', 0)).toEqual('rgba(100,100,100,0.6)');
  });
  it('modifies each of the RGB values by the given percentage', () => {
    expect(rgbaModifier('rgba(100,100,100,0.6)', 50)).toEqual('rgba(150,150,150,0.6)');
    expect(rgbaModifier('rgba(44,70,180,0.9)', -30)).toEqual('rgba(31,49,126,0.9)');
    expect(rgbaModifier('rgba(50,100,20,0.6)', 20)).toEqual('rgba(60,120,24,0.6)');
  });
  it('returns RGB values in range between 0 and 255', () => {
    expect(rgbaModifier('rgba(225,60,160,1)', 90)).toEqual('rgba(255,114,255,1)');
    expect(rgbaModifier('rgba(50,78,12,0.8)', -100)).toEqual('rgba(0,0,0,0.8)');
  });
  it('applies the new opacity', () => {
    expect(rgbaModifier('rgba(100,100,100,0.6)', 0, 0.4)).toEqual('rgba(100,100,100,0.4)');
  });
  it('returns RGB values in range between 0 and 255 and applies the new opacity', () => {
    expect(rgbaModifier('rgba(100,100,100,0.6)', 50, 1)).toEqual('rgba(150,150,150,1)');
    expect(rgbaModifier('rgba(50,100,20,0.6)', 20, 0.4)).toEqual('rgba(60,120,24,0.4)');
    expect(rgbaModifier('rgba(44,70,180,0.9)', -30, 0.3)).toEqual('rgba(31,49,126,0.3)');
    expect(rgbaModifier('rgba(225,60,160,1)', 90, 0.7)).toEqual('rgba(255,114,255,0.7)');
    expect(rgbaModifier('rgba(50,78,12,0.8)', -100, 0.5)).toEqual('rgba(0,0,0,0.5)');
  });
});
