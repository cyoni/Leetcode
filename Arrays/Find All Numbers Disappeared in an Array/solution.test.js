const findDisappearedNumbers = require('./solution');

describe('findDisappearedNumbers', () => {
  test('returns all missing numbers from the range [1, n]', () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];
    expect(findDisappearedNumbers(nums)).toEqual([5, 6]);
  });

  test('returns an empty array when no numbers are missing', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(findDisappearedNumbers(nums)).toEqual([]);
  });

  test('handles an array where all elements are the same', () => {
    const nums = [2, 2, 2, 2];
    expect(findDisappearedNumbers(nums)).toEqual([1, 3, 4]);
  });

  test('handles the smallest possible input size', () => {
    const nums = [1];
    expect(findDisappearedNumbers(nums)).toEqual([]);
  });

  test('returns all numbers when the array is empty', () => {
    const nums = [];
    expect(findDisappearedNumbers(nums)).toEqual([]);
  });

  test('handles an array with a single missing number', () => {
    const nums = [1, 2, 3, 4, 6];
    expect(findDisappearedNumbers(nums)).toEqual([5]);
  });
});
