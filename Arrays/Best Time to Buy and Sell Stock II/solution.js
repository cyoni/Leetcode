// runtime: O(n) where n is the number of all elements
// space: O(1)
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

var maxProfit_BestSolution = function (prices) {
  let largestProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      largestProfit += prices[i] - prices[i - 1];
    }
  }

  return largestProfit;
};

var maxProfitInitialSolution = function (prices) {
  let left = 0,
    right = 1;
  let largestProfit = 0;

  while (right < prices.length) {
    let localProfit = 0;
    let profit = prices[right] - prices[left];

    while (profit > 0 && profit > localProfit) {
      localProfit = profit;
      right++;
      profit = prices[right] - prices[left];
    }

    largestProfit += localProfit;
    left = right++;
  }

  return largestProfit;
};
