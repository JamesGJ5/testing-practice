import Calculator from '../calculator';

describe('add', () => {
  test('Adds 1 and 2 to make 3', () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  test('Adds floating point numbers fairly well', () => {
    expect(Calculator.add(1.31, 89.12)).toBeCloseTo(90.43);
  });
});

describe('subtract', () => {
  test('Subtracts 2 from 1 to make -1', () => {
    expect(Calculator.subtract(1, 2)).toBe(-1);
  });

  test('Subtracts floating point numbers fairly well', () => {
    expect(Calculator.subtract(1.31, 89.12)).toBeCloseTo(-87.81);
  });
});
