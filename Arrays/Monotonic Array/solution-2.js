var isMonotonic = function (nums) {
  let isIncreasing = null;

  for (let i = 0; i < nums.length - 1; i++) {
    const curr = nums[i];
    if (curr > nums[i + 1]) {
      if (isIncreasing === false) {
        return false;
      }
      isIncreasing = true;
    } else if (curr < nums[i + 1]) {
      if (isIncreasing === true) {
        return false;
      }
      isIncreasing = false;
    }
  }

  return true;
};
