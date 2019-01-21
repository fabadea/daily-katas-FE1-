// Please do not change the name of this function
const binarySearch = (arr, val
  //  ,start = 0, stop = arr.length - 1
) => {

  if (val > arr[arr.length - 1] || val < arr[0]) return -1;

  let start = 0;
  let stop = arr.length - 1;
  let middle = Math.floor((start + stop) / 2);

  while (start <= arr.length) {
    middle = Math.floor((start + stop) / 2);

    if (arr[middle] === val) return middle
    if (arr[middle] < val) {
      start = middle + 1
    } else {
      stop = middle - 1
    }
  }
  return -1;

  // if (stop >= start) {
  //   let middle = Math.floor((stop + start) / 2);
  //   if (arr[middle] === val) return middle;
  //   if (arr[middle] < val) {
  //     return binarySearch(arr, val, middle + 1, stop)
  //   } else {
  //     return binarySearch(arr, val, start, middle - 1)
  //   }
  // }
  // return -1;

}

module.exports = { binarySearch }
