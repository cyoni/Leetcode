// runtime: O(n) where n is num of elements in "s"
// space: O(n)
// https://leetcode.com/problems/longest-substring-without-repeating-characters

var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let left = 0;
  let longestLen = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map.has(char)) {
      left = Math.max(left, map.get(char) + 1);
    }

    longestLen = Math.max(longestLen, i - left + 1);
    map.set(char, i);
  }

  return longestLen;
};
