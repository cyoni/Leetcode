// runtime: O(n*m) where n is the number of rows and m is the number of columns
// space: O(1): this is an in-place solution
// https://leetcode.com/problems/rotate-image/

var rotate = function (matrix) {
  // transport matrix:
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      const tmp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = tmp;
    }
  }

  // reverse each row
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
};
