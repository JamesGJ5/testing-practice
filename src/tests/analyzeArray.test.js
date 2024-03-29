import AnalyzeArray from '../analyzeArray';

describe('length', () => {
  test('Returns length of non-empty array', () => {
    expect(new AnalyzeArray([1, 6, 3]).length).toBe(3);
  });

  test('Returns length of empty array', () => {
    expect(new AnalyzeArray([]).length).toBe(0);
  });
});

describe('average', () => {
  test('Returns 5 for [1, 6, 3]', () => {
    expect(new AnalyzeArray([4, 6, 5]).average).toBe(5);
  });

  test('Does fairly well for floating point numbers', () => {
    expect(new AnalyzeArray([1.1, 2.2, 3.3]).average).toBeCloseTo(2.2);
  });

  test('Returns null for empty arrays', () => {
    expect(new AnalyzeArray([]).average).toBeNull();
  });
});

describe('min', () => {
  test('Returns 2 for [6, 2, 10]', () => {
    expect(new AnalyzeArray([6, 2, 10]).min).toBe(2);
  });

  test('Returns null for empty arrays', () => {
    expect(new AnalyzeArray([]).min).toBeNull();
  });
});

describe('max', () => {
  test('Returns 10 for [6, 2, 10]', () => {
    expect(new AnalyzeArray([6, 2, 10]).max).toBe(10);
  });

  test('Returns null for empty arrays', () => {
    expect(new AnalyzeArray([]).max).toBeNull();
  });
});
