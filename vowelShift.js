// Please do not change the name of this function
const vowelShift = (str, n) => {
  // array with vowels
  const newArr = str.split('').filter(char => {
    return /^[aeiouAEIOU]$/.test(char);
  })
  // rotatedArrByN
  const rotatedArrByN = newArr.slice(newArr.length - n).concat(newArr.slice(0, newArr.length - n));
  // count to match the position in rotatedArrByN
  let count = 0
  // if vowel in string change the vowel with the one in count position
  for (let i = 0; i < str.length; i++) {
    if (/[aeiouAEIOU]/.test(str[i])) {
      str = str.substr(0, i) + rotatedArrByN[count] + str.substr(i + 1);
      count++
    }
  }
  return str
}

module.exports = { vowelShift }
