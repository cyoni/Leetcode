// https://leetcode.com/problems/baseball-game/
// runtime: O(n)

var calPoints = function (operations) {
  const stack = [];
  let res = 0;

  for (const operation of operations) {
    if (isNaN(operation)) {
      if (operation === "+") {
        const lastNum = stack.pop() || 0;
        const prevNum = stack.at(-1) || 0;
        stack.push(lastNum, lastNum + prevNum);
      } else if (operation === "D") {
        stack.push((stack.at(-1) || 0) * 2);
      } else if (operation === "C") {
        stack.pop();
      }
    } else {
      stack.push(Number(operation));
    }
  }

  stack.forEach((curr) => {
    res += Number(curr);
  });

  return res;
};
