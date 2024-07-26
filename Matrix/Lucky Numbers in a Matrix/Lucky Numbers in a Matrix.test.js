const { luckyNumbers } = require("./Lucky Numbers in a Matrix");

describe("luckyNumbers", () => {
  test("should return all lucky numbers in the matrix", () => {
    const matrix = [
      [3, 7, 8],
      [9, 11, 13],
      [15, 16, 17],
    ];
    expect(luckyNumbers(matrix)).toEqual([15]);
  });

  test("should return an empty array if there are no lucky numbers", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(luckyNumbers(matrix)).toEqual([7]);
  });

  test("should handle a matrix with only one row", () => {
    const matrix = [[10, 20, 30, 40]];
    expect(luckyNumbers(matrix)).toEqual([10]);
  });

  test("should handle a matrix with only one column", () => {
    const matrix = [[10], [20], [30], [40]];
    expect(luckyNumbers(matrix)).toEqual([40]);
  });

  test("should handle a matrix where all elements are lucky numbers", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    expect(luckyNumbers(matrix)).toEqual([3]);
  });

  test("should handle a matrix with only one element", () => {
    const matrix = [[5]];
    expect(luckyNumbers(matrix)).toEqual([5]);
  });
});
