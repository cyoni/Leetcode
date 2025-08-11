// https://leetcode.com/problems/points-that-intersect-with-cars/
// runtime: O(n)

var numberOfPoints = function (nums) {
  nums.sort((a, b) => a[0] - b[0]);

  const merged = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const [start, end] = nums[i];

    const lastMerged = merged.at(-1);
    if (lastMerged[1] >= start) {
      lastMerged[1] = Math.max(end, lastMerged[1]);
    } else {
      merged.push(nums[i]);
    }
  }

  return merged.reduce((acc, curr) => acc + curr[1] - curr[0] + 1, 0);
};
