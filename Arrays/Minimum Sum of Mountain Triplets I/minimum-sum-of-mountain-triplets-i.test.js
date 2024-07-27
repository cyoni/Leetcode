const findMinimumMountainSum = require("./minimum-sum-of-mountain-triplets-i.js");

test("should return the minimum possible sum of a mountain triplet", () => {
  expect(findMinimumMountainSum([1, 2, 1, 4, 3])).toBe(4);
  expect(findMinimumMountainSum([3, 5, 2, 6, 1])).toBe(9);
  expect(findMinimumMountainSum([1, 2, 3, 4, 5])).toBe(-1);
  expect(findMinimumMountainSum([5, 1, 3, 2, 6])).toBe(6);
  expect(findMinimumMountainSum([1, 2, 3, 4, 5, 4, 3, 2, 1])).toBe(4);
  expect(findMinimumMountainSum([1, 1, 1, 1, 1])).toBe(-1);
  expect(findMinimumMountainSum([5, 4, 3, 2, 1])).toBe(-1);
  expect(findMinimumMountainSum([1, 5, 4, 3, 6, 2])).toBe(6);
});
