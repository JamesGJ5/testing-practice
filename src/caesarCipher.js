function shiftIntoRange(number, lowerInclusive, upperInclusive) {
  const rangeSize = upperInclusive - lowerInclusive + 1;
  const reducedNumber = number - lowerInclusive;
  const shiftedReducedNumber = ((reducedNumber % rangeSize) + rangeSize) % rangeSize;
  return shiftedReducedNumber + lowerInclusive;
}

export default function caesarCipher(string, shiftedBy) {
  const newCharList = [];
  for (let i = 0; i < string.length; i += 1) {
    const charCode = string.charCodeAt(i);
    let newCharCode;
    if (charCode >= 97 && charCode <= 122) {
      newCharCode = shiftIntoRange(charCode + shiftedBy, 97, 122);
    } else if (charCode >= 65 && charCode <= 90) {
      newCharCode = shiftIntoRange(charCode + shiftedBy, 65, 90);
    } else {
      newCharCode = charCode;
    }
    const newChar = String.fromCharCode(newCharCode);
    newCharList.push(newChar);
  }
  return newCharList.join('');
}
