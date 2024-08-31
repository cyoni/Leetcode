// runtime: O(n) where n is the length of the array.
// space: O(1)
// https://leetcode.com/problems/container-with-most-water/

var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    maxArea = 0;

  while (left < right) {
    const numLeft = height[left];
    const numRight = height[right];

    const minLine = Math.min(numLeft, numRight);
    const steps = right - left;

    maxArea = Math.max(maxArea, steps * minLine);

    if (numLeft < numRight) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
