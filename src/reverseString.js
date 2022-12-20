export default function reverseString(str) {
  const arr = [];
  for (let i = str.length - 1; i >= 0; i -= 1) {
    const char = str[i];
    arr.push(char);
  }
  return arr.join('');
}
