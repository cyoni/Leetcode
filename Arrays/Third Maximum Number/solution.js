import MinHeap from "../../Data Structures/Min Heap";

// https://leetcode.com/problems/third-maximum-number/
// runtime O(n)
// space O(1)

// using compare variables
var thirdMax_first = function (nums) {
  let first = null,
    second = null,
    third = null;

  for (const num of nums) {
    if (first === num || second === num || third === num) {
      continue;
    }

    if (first === null || num > first) {
      third = second;
      second = first;
      first = num;
    } else if (second === null || num > second) {
      third = second;
      second = num;
    } else if (third === null || num > third) {
      third = num;
    }
  }

  return third === null ? Math.max(first, second) : third;
};

// using min-heap
// runtime: O(n*log(k)) where n=numbers of array and k=3 which is the size of the tree.
// space: O(n)
// where n is the numbers of the input.

var thirdMax_second = function (nums) {
  nums = [...new Set(nums)];

  if (nums.length < 3) {
    return Math.max(...nums);
  }

  const heap = new MinHeap();

  for (const num of nums) {
    if (heap.size() < 3) {
      heap.insert(num);
    } else if (heap.peek() < num) {
      heap.extractMin();
      heap.insert(num);
    }
  }

  return heap.peek();
};
