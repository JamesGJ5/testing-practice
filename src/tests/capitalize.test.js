import capitalize from '../capitalize';

test('Returns input string if it contains no letters', () => {
  expect(capitalize('3123  3--=+')).toBe('3123  3--=+');
});

test('Capitalises lowercase strings', () => {
  expect(capitalize('asdasdasdasd')).toBe('Asdasdasdasd');
});

test('Capitalises uppercase strings', () => {
  expect(capitalize('ASDASDASD')).toBe('Asdasdasd');
});

test('Capitalises mixed-case strings', () => {
  expect(capitalize('AsDaSdAsD')).toBe('Asdasdasd');
});

test('Returns input string if empty', () => {
  expect(capitalize('')).toBe('');
});
