const { canReachDFS, canReachBFS } = require("./solution");

describe("canReachDFS", () => {
  test("should return true for array [4, 2, 3, 0, 3, 1, 2] starting at index 5", () => {
    const arr = [4, 2, 3, 0, 3, 1, 2];
    const start = 5;
    expect(canReachDFS(arr, start)).toBe(true);
  });

  test("should return true for array [4, 2, 3, 0, 3, 1, 2] starting at index 0", () => {
    const arr = [4, 2, 3, 0, 3, 1, 2];
    const start = 0;
    expect(canReachDFS(arr, start)).toBe(true);
  });

  test("should return false for array [3, 0, 2, 1, 2] starting at index 2", () => {
    const arr = [3, 0, 2, 1, 2];
    const start = 2;
    expect(canReachDFS(arr, start)).toBe(false);
  });

  test("should handle single-element array [0] starting at index 0", () => {
    const arr = [0];
    const start = 0;
    expect(canReachDFS(arr, start)).toBe(true);
  });

  test("should handle single-element array [1] starting at index 0", () => {
    const arr = [1];
    const start = 0;
    expect(canReachDFS(arr, start)).toBe(false);
  });

  test("should return false for array with no reachable zeroes", () => {
    const arr = [1, 1, 1, 1, 1];
    const start = 2;
    expect(canReachDFS(arr, start)).toBe(false);
  });

  test("should handle large array with multiple paths to zero", () => {
    const arr = [10, 23, 0, 5, 1, 3, 2, 4, 0];
    const start = 7;
    expect(canReachDFS(arr, start)).toBe(true);
  });
});

describe("canReachBFS", () => {
  test("should return true for array [4, 2, 3, 0, 3, 1, 2] starting at index 5", () => {
    const arr = [4, 2, 3, 0, 3, 1, 2];
    const start = 5;
    expect(canReachBFS(arr, start)).toBe(true);
  });

  test("should return true for array [4, 2, 3, 0, 3, 1, 2] starting at index 0", () => {
    const arr = [4, 2, 3, 0, 3, 1, 2];
    const start = 0;
    expect(canReachBFS(arr, start)).toBe(true);
  });

  test("should return false for array [3, 0, 2, 1, 2] starting at index 2", () => {
    const arr = [3, 0, 2, 1, 2];
    const start = 2;
    expect(canReachBFS(arr, start)).toBe(false);
  });

  test("should handle single-element array [0] starting at index 0", () => {
    const arr = [0];
    const start = 0;
    expect(canReachBFS(arr, start)).toBe(true);
  });

  test("should handle single-element array [1] starting at index 0", () => {
    const arr = [1];
    const start = 0;
    expect(canReachBFS(arr, start)).toBe(false);
  });

  test("should return false for array with no reachable zeroes", () => {
    const arr = [1, 1, 1, 1, 1];
    const start = 2;
    expect(canReachBFS(arr, start)).toBe(false);
  });

  test("should handle large array with multiple paths to zero", () => {
    const arr = [10, 23, 0, 5, 1, 3, 2, 4, 0];
    const start = 7;
    expect(canReachBFS(arr, start)).toBe(true);
  });
});
