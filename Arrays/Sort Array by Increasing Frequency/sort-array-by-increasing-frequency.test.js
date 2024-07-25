const  frequencySort  = require("./sort-array-by-increasing-frequency");


test('sorts array [1, 1, 2, 2, 2, 3] correctly', () => {
    expect(frequencySort([1, 1, 2, 2, 2, 3])).toEqual([3, 1, 1, 2, 2, 2]);
});

test('sorts array [2, 3, 1, 3, 2] correctly', () => {
    expect(frequencySort([2, 3, 1, 3, 2])).toEqual([1, 3, 3, 2, 2]);
});

test('sorts array [-1, -2, -2, -3] correctly', () => {
    expect(frequencySort([-1, -2, -2, -3])).toEqual([-1, -3, -2, -2]);
});

test('sorts array [1, 2, 3, 4] correctly', () => {
    expect(frequencySort([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
});

test('sorts empty array correctly', () => {
    expect(frequencySort([])).toEqual([]);
});

test('sorts array with all same elements [2, 2, 2] correctly', () => {
    expect(frequencySort([2, 2, 2])).toEqual([2, 2, 2]);
});


