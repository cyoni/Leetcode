// https://leetcode.com/problems/two-sum-less-than-k
// runtime: O(n*log(n)) where n is the number of nodes
// space: O(1)

function findTwoSumLessThanK(nums, k) {
  let l = 0;
  let r = k.length - 1;
  let maxSum = -1;
  nums.sort();

  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum < k) {
      maxSum = Math.max(maxSum, sum);
      l++;
    }

    if (sum > k) {
      r--;
    }
  }

  return maxSum;
}
