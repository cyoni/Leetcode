// https://leetcode.com/problems/lucky-numbers-in-a-matrix/
var luckyNumbers = function (matrix) {
  const result = [];

  const minElems = [];

  const maxInCol = new Map();

  for (let i = 0; i < matrix.length; i++) {
    let min = Infinity,
      col = 0;

    for (let j = 0; j < matrix[i].length; j++) {
      if (min > matrix[i][j]) {
        min = matrix[i][j];
        col = j;
      }
    }

    minElems.push({ col, min });
  }

  for (let item of minElems) {
    const { col, min } = item;

    if (maxInCol.has(col)) {
      if (maxInCol.get(col) === min) {
        result.push(min);
      }
      continue;
    }

    let max = -Infinity;
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][col] > max) {
        max = matrix[i][col];
      }
    }

    if (max === min) result.push(min);
    maxInCol.set(col, max);
  }

  return result;
};

module.exports = { luckyNumbers };
