// Please do not change the name of this function


const rgbaModifier = (rgbaStr, percent, opacity) => {
  let rgbaArr = rgbaStr.slice(5, rgbaStr.length - 1).split(",")
  if (!percent && !opacity) { return rgbaStr }
  if (percent || percent === 0) {
    let r = Math.round(+rgbaArr[0] + +rgbaArr[0] * percent / 100)
    let g = Math.round(+rgbaArr[1] + +rgbaArr[1] * percent / 100)
    let b = Math.round(+rgbaArr[2] + +rgbaArr[2] * percent / 100)
    let a = opacity ? opacity : +rgbaArr[3]
    if (r > 255) r = 255
    if (g > 255) g = 255
    if (b > 255) b = 255

    return `rgba(${r},${g},${b},${a})`

  }

  // let count = 0;
  // rgbaStr = rgbaStr.replace(/([\d.])+/g, (element) => {
  //   count++;
  //   element = Number(element);
  //   if (count < 4 && percent) {
  //     element += element * percent / 100;
  //     element = element.toFixed(0);
  //     if (element > 255) element = 255;
  //     if (element < 0) element = 0;
  //   }
  //   if (count === 4 && opacity) element = opacity;

  //   return element;
  // });

  // return rgbaStr;



}



module.exports = { rgbaModifier }
