export default function capitalize(string) {
  const upperCasePart = string.length >= 1 ? string[0].toUpperCase() : '';
  const lowerCasePart = string.length >= 2 ? string.slice(1).toLowerCase() : '';
  return upperCasePart + lowerCasePart;
}
