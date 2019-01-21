// Please do not change the name of this function
const findMostRepeated = (arr) => {

  if (arr.length === [...new Set(arr)].length) return { elements: [], repeats: null };
  const amountObj = [...new Set(arr)].reduce((accObj, curr) => {
    accObj[curr] = 0;
    return accObj;
  }, {})

  let repeats = 0;
  arr.forEach(elem => {
    ++amountObj[elem]
    if (repeats < amountObj[elem]) repeats = amountObj[elem]
  })
  const elements = [];
  for (let key in amountObj) {
    if (amountObj[key] === repeats) elements.push(key)
  }
  return { elements, repeats }

  // const countingObj = {};

  // arr.forEach(element => {
  //   if (!countingObj[element]) countingObj[element] = 1;
  //   else countingObj[element]++;
  // });

  // let repeats = Math.max(...Object.values(countingObj));
  // if (repeats < 2) repeats = null;
  // const elements = Object.keys(countingObj).filter(key => countingObj[key] === repeats);

  // return { elements, repeats };
}

module.exports = { findMostRepeated }
