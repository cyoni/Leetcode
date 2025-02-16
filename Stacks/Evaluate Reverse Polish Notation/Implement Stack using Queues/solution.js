var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  if (this.queue1.length) {
    this.queue2.push(x, ...this.queue1);
    this.queue1 = [];
  } else {
    this.queue1.push(x, ...this.queue2);
    this.queue2 = [];
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  const _pop = (queue) => (queue.length > 0 ? queue.shift() : null);
  return _pop(this.queue1) || _pop(this.queue2);
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  const _top = (queue) => (queue.length > 0 ? queue[0] : null);
  return _top(this.queue1) || _top(this.queue2);
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue1.length && !this.queue2.length;
};
