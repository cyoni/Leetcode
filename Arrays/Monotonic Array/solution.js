// runtime: O(n)
// https://leetcode.com/problems/monotonic-array/

var isMonotonic = function (nums) {
  let p = 0;
  let isIncreasing = false;

  while (p + 1 < nums.length && nums[p] <= nums[p + 1]) {
    if (nums[p] !== nums[p + 1]) {
      isIncreasing = true;
    }
    p++;
  }

  while (!isIncreasing && p + 1 < nums.length && nums[p] >= nums[p + 1]) {
    p++;
  }

  if (p !== nums.length - 1) {
    return false;
  }

  return true;
};
