// https://leetcode.com/problems/insert-interval
// runtime: O(n)

var insert = function (intervals, newInterval) {
  const result = [];
  const length = intervals.length;

  let p = 0;
  // insert non overlapping elements
  while (p < length && newInterval[0] > intervals[p][1]) {
    result.push(intervals[p]);
    p++;
  }

  while (
    p < length &&
    intervals[p][0] <= newInterval[1] &&
    newInterval[0] <= intervals[p][1]
  ) {
    // update newInterval with overlapping elements
    newInterval[0] = Math.min(newInterval[0], intervals[p][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[p][1]);
    p++;
  }

  result.push(newInterval);

  // insert remaining non-overlapping elements
  while (p < intervals.length) {
    result.push(intervals[p]);
    p++;
  }

  return result;
};
