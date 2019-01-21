// Please do not change the name of this function
const romanNumeralEncoder = (num) => {
  if (typeof num !== 'number') return '';
  const arabToRom = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C'
  }

  const reminder10 = num % 10;
  const decNum = num - reminder10;

  return arabToRom[decNum] + arabToRom[reminder10];
}


// const romanNumeralEncoder = (num) => {
//   if (typeof num !== 'number') return '';
//   const romToArab = {
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
//   };
//   let romanNum = '';

//   for (let char in romToArab) {
//     while (num >= romToArab[char]) {
//       romanNum += char;
//       num -= romToArab[char];
//     }
//   }
//   return romanNum;
// };


module.exports = { romanNumeralEncoder }
