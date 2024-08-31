// runtime:
// insert: O(1)
// delete: O(1)
// random: O(1)

// space: O(n) where n is the numbers in the Map
// https://leetcode.com/problems/insert-delete-getrandom-o1/

var RandomizedSet = function () {
  this.map = new Map();
  this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const isPresent = this.map.has(val);
  if (isPresent) return false;
  this.map.set(val, this.arr.length);
  this.arr.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map.has(val)) {
    const index = this.map.get(val);

    const lastItem = this.arr[this.arr.length - 1];
    this.arr[index] = lastItem;

    this.arr.pop();

    this.map.set(lastItem, index);
    this.map.delete(val);
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const size = this.arr.length;
  return this.arr[Math.floor(Math.random() * size)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
