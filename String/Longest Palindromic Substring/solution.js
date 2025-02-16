// https://leetcode.com/problems/longest-palindromic-substring
// runtime: O(n*n)

var longestPalindrome = function (s) {
  let maxLen = 0;
  let maxLeft = 0;
  let maxRight = 0;

  const expandAroundCenter = (s, left, right) => {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      const currLen = right - left + 1;
      if (currLen > maxLen) {
        maxLeft = left;
        maxRight = right;
        maxLen = currLen;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(s, i, i + 1); // handle even palindrome
    expandAroundCenter(s, i, i); // handle odd palindrome
  }

  return s.slice(maxLeft, maxRight + 1);
};
