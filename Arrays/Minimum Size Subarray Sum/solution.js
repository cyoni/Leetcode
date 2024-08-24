// runtime: O(n), where n is nums.length
// space: O(1)
// https://leetcode.com/problems/minimum-size-subarray-sum/

var minSubArrayLen = function (target, nums) {
  let pRight = 0,
    pLeft = 0;
  let sum = nums[0];
  let minSubArrLength = Infinity;

  while (pRight < nums.length) {
    if (sum < target) {
      pRight++;
      sum = sum + nums[pRight];
    } else {
      minSubArrLength = Math.min(minSubArrLength, pRight - pLeft + 1);
      sum = sum - nums[pLeft];
      pLeft++;
    }
  }
  return minSubArrLength === Infinity ? 0 : minSubArrLength;
};

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
