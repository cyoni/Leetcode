// runtime: O(n)
// https://leetcode.com/problems/degree-of-an-array/description/?difficulty=EASY&page=1

var findShortestSubArray = function (nums) {
  const stats = {};
  let maxOcc = -1;
  let minLen = Infinity;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (!stats[curr]) {
      stats[curr] = { start: i, end: null, len: null, occ: 0 };
    }

    const start = stats[curr].start;
    stats[curr] = { start, end: i, occ: stats[curr].occ + 1 };

    maxOcc = Math.max(maxOcc, stats[curr].occ);
  }

  Object.keys(stats).forEach((key) => {
    const stat = stats[key];
    if (stat.occ === maxOcc) {
      minLen = Math.min(minLen, stat.end - stat.start + 1);
    }
  });

  return minLen;
};
