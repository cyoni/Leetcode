// https://leetcode.com/problems/sort-list/
// utilization of merge sort
// complexity:
// runtime: o(n*log(n))

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function mergeSort(left, right) {
  let result = new ListNode(null);
  let current = result;

  while (left && right) {
    if (left.val > right.val) {
      current.next = right;
      right = right.next;
    } else {
      current.next = left;
      left = left.next;
    }
    current = current.next;
  }

  if (left) {
    current.next = left;
  }

  if (right) {
    current.next = right;
  }

  return result.next;
}

const findMiddle = (node) => {
  let pSlow = node;
  let pFast = node;

  while (pFast?.next?.next) {
    pSlow = pSlow.next;
    pFast = pFast.next.next;
  }
  return pSlow;
};

var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const middle = findMiddle(head);
  const next = middle.next;
  middle.next = null;

  return mergeSort(sortList(head), sortList(next));
};

const list = new ListNode(4)
list.next = new ListNode(2)
list.next.next = new ListNode(1)
list.next.next.next =  new ListNode(3)

sortList(list)