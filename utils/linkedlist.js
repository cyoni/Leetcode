const countList = (head) => {
  let counter = 0;
  while (head) {
    head = head.next;
    counter++;
  }
  return counter;
};

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const reverseList = (node) => {
  let curr = node;
  let prev = null;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
module.exports = { ListNode, countList, reverseList };
