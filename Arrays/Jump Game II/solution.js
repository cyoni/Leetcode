// https://leetcode.com/problems/jump-game-ii/
// runtime: O(n) where n is the size of 'nums'
// space: O(1)

var jump = function (nums) {
  let jumps = 0;
  let maxSegmentIndex = 0;
  let maxJumpIndex = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxJumpIndex = Math.max(maxJumpIndex, nums[i] + i);

    if (maxSegmentIndex >= nums.length - 1) return jumps;

    if (i === maxSegmentIndex) {
      jumps++;
      maxSegmentIndex = maxJumpIndex;
    }
  }

  return jumps;
};
