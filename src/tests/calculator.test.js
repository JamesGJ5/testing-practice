import Calculator from '../calculator';

describe('add', () => {
  test('Adds 1 and 2 to make 3', () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  test('Adds floating point numbers fairly well', () => {
    expect(Calculator.add(1.31, 89.12)).toBeCloseTo(90.43);
  });
});
