// Please do not change the name of this function
const parseHexInt = (str) => {
  const refObj = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  }

  let result = 0;

  str.split('').reverse().forEach((char, index) => {
    if (isNaN(+char)) {
      char = char.toUpperCase();
      char = refObj[char];
    }
    result += Math.pow(16, index) * char;
  });
  return result;

  // const convert = {
  //   a: 10,
  //   b: 11,
  //   c: 12,
  //   d: 13,
  //   e: 14,
  //   f: 15
  // }
  // let ans = 0;
  // for (let i = 0; i < str.length; i++) {
  //   let each = str[str.length - 1 - i]
  //   let number = Number(each) ? Number(each) : convert[each];
  //   ans += ((16 ** i) * number)
  // }
  // return ans;
}

module.exports = { parseHexInt }
