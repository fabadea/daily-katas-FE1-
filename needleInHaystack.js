// Please do not change the name of this function
const needleInHaystack = (haystack, needle) => {
  needle = needle.toLowerCase();
  let result = [];
  let path = [];

  const findNeedle = (haystack, str) => {
    for (let prop in haystack) {
      if (typeof haystack[prop] === 'string' && haystack[prop].toLowerCase().includes(str)) {
        let needlePath = path.slice();
        needlePath.push(prop);
        needlePath = needlePath.join('.');
        result.push(needlePath);
      } else if (typeof haystack[prop] === 'object') {
        path.push(prop);
        findNeedle(haystack[prop], str);
        path.pop();
      }
    }
  };

  findNeedle(haystack, needle);

  return result.sort();

  //   const calling = anotherOne(haystack, needle)
  //   return calling === '' ? [] : calling.split(' ').slice(0, -1).sort()

  // const anotherOne = (haystack, needle) => {
  //   if (typeof haystack === 'string') {
  //     if (haystack.toLowerCase().includes(needle.toLowerCase())) {
  //       return true
  //     }
  //     return false
  //   }
  //   let anAns = '';
  //   for (let key in haystack) {
  //     let next = anotherOne(haystack[key], needle)
  //     if (next) {
  //       if (next === true) {
  //         anAns += key + ' '
  //       } else {
  //         anAns += next.split(' ').slice(0, -1).map(part => {
  //           return key + '.' + part
  //         }).join(' ') + ' ';
  //       }
  //     }
  //   }
  //   return anAns;
  // }
}
module.exports = { needleInHaystack }
