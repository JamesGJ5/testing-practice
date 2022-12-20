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
