const findMinimumMountainSum = require("./minimum-sum-of-mountain-triplets-i.js")

test('should return the minimum possible sum of a mountain triplet', () => {
    expect(findMinimumMountainSum([1, 2, 1, 4, 3])).toBe(6); // 1 (minLeft) + 2 (middle) + 3 (minRight) = 6
    expect(findMinimumMountainSum([3, 5, 2, 6, 1])).toBe(8); // 3 (minLeft) + 5 (middle) + 1 (minRight) = 8
    expect(findMinimumMountainSum([1, 2, 3, 4, 5])).toBe(-1); // No valid mountain triplet
    expect(findMinimumMountainSum([5, 1, 3, 2, 6])).toBe(8); // 1 (minLeft) + 3 (middle) + 2 (minRight) = 6
    expect(findMinimumMountainSum([1, 2, 3, 4, 5, 4, 3, 2, 1])).toBe(6); // 1 (minLeft) + 4 (middle) + 1 (minRight) = 6
    expect(findMinimumMountainSum([1, 1, 1, 1, 1])).toBe(-1); // No valid mountain triplet
    expect(findMinimumMountainSum([5, 4, 3, 2, 1])).toBe(-1); // No valid mountain triplet
    expect(findMinimumMountainSum([1, 5, 4, 3, 6, 2])).toBe(8); // 1 (minLeft) + 5 (middle) + 2 (minRight) = 8
});