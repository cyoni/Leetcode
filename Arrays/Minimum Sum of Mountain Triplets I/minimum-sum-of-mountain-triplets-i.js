// https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/
// runtime: O(n)

var findMinimumMountainSum = function (nums) {
  const leftMin = Array(nums.length).fill(Infinity);
  const rightMin = Array(nums.length).fill(Infinity);

  for (let i = 1; i < nums.length; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i - 1]);
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], nums[i + 1]);
  }

  let minSum = Infinity;

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > leftMin[i] && nums[i] > rightMin[i]) {
      let localSum = nums[i] + leftMin[i] + rightMin[i];
      minSum = Math.min(localSum, minSum);
    }
  }

  return minSum === Infinity ? -1 : minSum;
};

module.exports = { findMinimumMountainSum };
