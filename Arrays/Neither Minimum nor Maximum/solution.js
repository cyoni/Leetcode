var findNonMinOrMax = function (nums) {
  if (nums.length < 3) return -1;

  let min = Infinity;
  let max = -Infinity;

  for (const num of nums) {
    if (num > max) {
      max = num;
    }

    if (num < min) {
      min = num;
    }
  }

  for (const num of nums) {
    if (num !== min && num !== max) {
      return num;
    }
  }

  return -1;
};
