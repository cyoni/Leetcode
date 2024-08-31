// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// runtime: O(n) where n is the number of prices
// space: O(1)

var maxProfit = function (prices) {
  let left = 0,
    right = 1;
  let largestProfit = 0;

  while (right < prices.length) {
    const profit = prices[right] - prices[left];

    largestProfit = Math.max(profit, largestProfit);

    if (prices[left] > prices[right]) {
      left = right;
    }

    right++;
  }

  return largestProfit;
};
