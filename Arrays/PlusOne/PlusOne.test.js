
const plusOne = require("./PlusOne")

it('adds one to [1, 2, 3] to get [1, 2, 4]', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
});

test('adds one to [9, 9, 9] to get [1, 0, 0, 0]', () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
});

test('adds one to [0] to get [1]', () => {
    expect(plusOne([0])).toEqual([1]);
});

test('adds one to [1, 9, 9] to get [2, 0, 0]', () => {
    expect(plusOne([1, 9, 9])).toEqual([2, 0, 0]);
});
 
test('adds one to [4, 3, 2, 1] to get [4, 3, 2, 2]', () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
});

test('adds one to [9] to get [1, 0]', () => {
    expect(plusOne([9])).toEqual([1, 0]);
});

test('adds one to [2, 9] to get [3, 0]', () => {
    expect(plusOne([2, 9])).toEqual([3, 0]);
});

test('adds one to [1, 2, 9] to get [1, 3, 0]', () => {
    expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
});

test('adds one to [9, 0, 9] to get [9, 1, 0]', () => {
    expect(plusOne([9, 0, 9])).toEqual([9, 1, 0]);
});

test('adds one to [1, 0, 0, 0] to get [1, 0, 0, 1]', () => {
    expect(plusOne([1, 0, 0, 0])).toEqual([1, 0, 0, 1]);
});