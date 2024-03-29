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

describe('multiply', () => {
  test('Multiplies 2 and 3 to make 6', () => {
    expect(Calculator.multiply(2, 3)).toBe(6);
  });

  test('Multiplies floating point numbers fairly well', () => {
    expect(Calculator.multiply(1.3, 2.5)).toBeCloseTo(3.25);
  });
});

describe('divide', () => {
  test('Divide 6 by 3 to make 2', () => {
    expect(Calculator.divide(6, 3)).toBe(2);
  });

  test('Divide floating point numbers fairly well', () => {
    expect(Calculator.divide(6, 1.5)).toBeCloseTo(4);
  });

  test('Get fairly accurate result when result is floating point', () => {
    expect(Calculator.divide(6, 4)).toBeCloseTo(1.5);
  });

  test('Throw error if divisor is 0', () => {
    expect(() => Calculator.divide(1, 0)).toThrow('Divisor is 0');
  });
});
