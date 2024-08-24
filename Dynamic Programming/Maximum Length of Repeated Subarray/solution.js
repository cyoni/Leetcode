// runtime: O(n*m), where n is nums1.length and m is nums2.length
// space: O(n*m)
// https://leetcode.com/problems/maximum-length-of-repeated-subarray

var findLength = function (nums1, nums2) {
  const matrix = Array(nums1.length + 1)
    .fill(0)
    .map((x) => Array(nums2.length + 1).fill(0));
  let maxLen = 0;

  for (let i = 1; i < nums1.length + 1; i++) {
    for (let j = 1; j < nums2.length + 1; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        maxLen = Math.max(matrix[i][j], maxLen);
      }
    }
  }

  return maxLen;
};

findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]);
