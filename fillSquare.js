// Please do not change the name of this function
const fillSquare = (arr) => {
  let maxLength = arr[0].length
  arr.filter(nestedArr => {
    if (maxLength < nestedArr.length) maxLength = nestedArr.length
    return maxLength
  })
  let squareSide = maxLength > arr.length ? maxLength : arr.length

  for (let i = 0; i < squareSide; i++) {
    if (!arr[i]) arr.push([])
    for (let j = arr[i].length; j < squareSide; j++) {
      arr[i][j] = null;
    }
  }
  return arr
}

module.exports = { fillSquare }
