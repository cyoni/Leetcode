// runtime: O(n) where n is num of elements in "arrays"
// space: O(1)
// https://leetcode.com/problems/maximum-distance-in-arrays/

var maxDistance = function (arrays) {
  let smallestMin = arrays[0][0];
  let largestMax = arrays[0].at(-1);
  let result = 0;

  for (let i = 1; i < arrays.length; i++) {
    const current = arrays[i];

    const first = current[0];
    const last = current.at(-1);

    result = Math.max(
      result,
      Math.abs(last - smallestMin),
      Math.abs(largestMax - first)
    );

    smallestMin = Math.min(smallestMin, first);
    largestMax = Math.max(largestMax, last);
  }

  return result;
};

module.exports = maxDistance;
