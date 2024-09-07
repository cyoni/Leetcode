// https://leetcode.com/problems/h-index/
// runtime: O(n*log(n)) where n is the number of citations
// space: O(1)

var hIndex = function (citations) {
  // sort the array in descending order:
  citations.sort((a, b) => b - a);
  let hIndex = 0;

  // check if the number of citations of the ith element is at least i
  for (let i = 1; i <= citations.length; i++) {
    const citationsAmount = citations[i - 1];
    if (i <= citationsAmount) {
      hIndex = i;
    } else break;
  }

  return hIndex;
};
