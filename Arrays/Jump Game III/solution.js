// https://leetcode.com/problems/jump-game-iii
// BFS:
// runtime: O(n) where n is the length of the array. Each index is visited at most once.
// space: O(1)

// DFS:
// runtime: O(n) where n is the length of the array. Each index is visited at most once.
// space: O(1)

function canReachDFS(arr, start) {
  if (start >= arr.length || start < 0 || arr[start] === null) {
    return false;
  }

  if (arr[start] === 0) {
    return true;
  }

  const jump = arr[start];

  arr[start] = null; // marking node as visited

  return canReachDFS(arr, start - jump) || canReachDFS(arr, start + jump);
}

function canReachBFS(arr, start) {
  const queue = [start];

  while (queue.length > 0) {
    const item = queue.shift();

    if (arr[item] === 0) {
      return true;
    }

    const curr = arr[item];
    arr[item] = null; // marking node as visited

    const left = item - curr;
    left >= 0 && arr[left] !== null ? queue.push(left) : null;

    const right = item + curr;
    arr.length > right && arr[right] !== null ? queue.push(right) : null;
  }

  return false;
}

module.exports = { canReachDFS, canReachBFS };
