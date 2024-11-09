// https://leetcode.com/problems/jump-game
// runtime: O(n) where n is the size of 'nums'
// space: O(1)

var canJump = function (nums) {
  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    maxIndex = Math.max(maxIndex, nums[i] + i);
    if (maxIndex >= nums.length - 1) return true;
    if (maxIndex === i) return false;
  }
  return false;
};
