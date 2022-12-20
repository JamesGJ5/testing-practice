import caesarCipher from '../caesarCipher';

test('Lowercase characters are shifted correctly', () => {
  expect(caesarCipher('ahz', 2)).toEqual('cjb');
});

test('Uppercase characters are shifted correctly', () => {
  expect(caesarCipher('AHZ', 2)).toEqual('CJB');
});

test('Non-letter characters are kept the same', () => {
  expect(caesarCipher(' .)', 1000)).toEqual(' .)');
});

test('Empty strings are returned as empty strings', () => {
  expect(caesarCipher('')).toEqual('');
});
