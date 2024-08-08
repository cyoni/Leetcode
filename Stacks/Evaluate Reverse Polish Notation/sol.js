// https://leetcode.com/problems/evaluate-reverse-polish-notation/

// runtime O(n)
// space O(n)

var evalRPN = function (tokens) {
  const calculate = (num1, num2, operator) => {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return Math.trunc(num1 / num2);
    }
  };
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const curr = tokens[i];
    if (curr !== "+" && curr !== "-" && curr !== "/" && curr !== "*") {
      stack.push(Number(curr));
    } else {
      const num2 = stack.pop();
      const num1 = stack.pop();
      stack.push(calculate(num1, num2, curr));
    }
  }

  return stack.pop();
};
