const maxDistance = require('./solution');

describe('maxDistance', () => {
  test('returns the maximum distance between two numbers from different arrays', () => {
    const arrays = [[1, 2, 3], [4, 5], [1, 2, 3]];
    expect(maxDistance(arrays)).toBe(4);
  });

  test('handles cases with negative and positive numbers', () => {
    const arrays = [[-10, -5, 0, 5], [10, 15, 20]];
    expect(maxDistance(arrays)).toBe(30);
  });

  test('returns the correct distance when arrays have only one element', () => {
    const arrays = [[1], [3], [6]];
    expect(maxDistance(arrays)).toBe(5);
  });

  test('handles arrays with the same elements', () => {
    const arrays = [[2, 2, 2], [2, 2], [2, 2, 2]];
    expect(maxDistance(arrays)).toBe(0);
  });

  test('handles arrays of different sizes', () => {
    const arrays = [[1, 2, 3], [4], [5, 6]];
    expect(maxDistance(arrays)).toBe(5);
  });

  test('returns correct distance for large inputs', () => {
    const arrays = [
      [1, 2, 3, 4, 5],
      [1000, 2000, 3000, 4000, 5000],
      [10, 20, 30, 40, 50],
    ];
    expect(maxDistance(arrays)).toBe(4999);
  });
});