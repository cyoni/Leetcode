// runtime: O(n*m) where n is the size of nums1 and m is the size of nums2
// space: O(n*m)
// https://leetcode.com/problems/maximum-length-of-repeated-subarray

var findLength = function (nums1, nums2) {
  const matrix = Array(nums1.length + 1)
    .fill(0)
    .map((_) => Array(nums2.length + 1).fill(0));
  let maxSubset = 0;

  for (let i = 1; i < nums1.length + 1; i++) {
    for (let j = 1; j < nums2.length + 1; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        matrix[i][j] = 1 + matrix[i - 1][j - 1];
        maxSubset = Math.max(maxSubset, matrix[i][j]);
      }
    }
  }

  return maxSubset;
};
