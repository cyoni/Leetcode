// runtime: O(n)
// https://leetcode.com/problems/valid-mountain-array

var validMountainArray = function (arr) {
  if (arr.length <= 2) {
    return false;
  }

  let p = 0;

  while (p + 1 < arr.length && arr[p] < arr[p + 1]) {
    p++;
  }

  if (p === 0 || p === arr.length - 1) {
    return false;
  }

  while (p + 1 < arr.length && arr[p] > arr[p + 1]) {
    p++;
  }

  if (p !== arr.length - 1) {
    return false;
  }

  return true;
};
