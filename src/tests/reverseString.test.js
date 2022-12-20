import reverseString from '../reverseString';

test("Reverses 'sdasd'", () => {
  expect(reverseString('sdasd')).toBe('dsads');
});

test('Reverses palindromes', () => {
  expect(reverseString('abcba')).toBe('abcba');
});

test('Returns same string as input if empty', () => {
  expect(reverseString('')).toBe('');
});
