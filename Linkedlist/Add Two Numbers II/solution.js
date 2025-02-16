// Add Two Numbers II
// https://leetcode.com/problems/add-two-numbers-ii
//

const { ListNode, countList, reverseList } = require("../../utils/linkedlist");

// 1. Using recursive approach
// runtime: O(n+m) where n, m are the number of elements in the first and second list respectively 
var addTwoNumbers_Recursive = function (l1, l2) {
  const l1Len = countList(l1);
  const l2Len = countList(l2);

  const longerList = l1Len > l2Len ? l1 : l2;
  let shorterList = l1Len > l2Len ? l2 : l1;

  const diff = Math.abs(l2Len - l1Len);

  for (let i = 0; i < diff; i++) {
    const node = new ListNode(0);
    node.next = shorterList;
    shorterList = node;
  }

  let { node, carry } = sumLists(longerList, shorterList);
  let result = node;

  if (carry) {
    const tmp = new ListNode(1);
    tmp.next = node;
    result = tmp;
  }

  return result;
};

// 2. Reversing lists and utilizing a stack
// runtime: O(n+m) where n, m are the number of elements in the first and second list respectively 
var addTwoNumbers_WithStack = function (l1, l2) {
  const countList = (head) => {
    let counter = 0;
    let curr = head;
    while (curr) {
      counter++;
      curr = curr.next;
    }

    return counter;
  };

  const l1Len = countList(l1);
  const l2Len = countList(l2);

  const longerList = l1Len > l2Len ? l1 : l2;
  let shorterList = l1Len > l2Len ? l2 : l1;

  const diff = Math.abs(l2Len - l1Len);

  for (let i = 0; i < diff; i++) {
    const node = new ListNode(0);
    node.next = shorterList;
    shorterList = node;
  }

  const reverseList1 = reverseList(longerList);
  const reverseList2 = reverseList(shorterList);

  const stack = [];

  let curr = reverseList1;
  let curr2 = reverseList2;
  let carry = 0;

  while (curr) {
    let sum = curr.val + curr2.val + carry;
    if (sum >= 10) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }

    stack.push(sum);
    curr = curr.next;
    curr2 = curr2.next;
  }

  if (carry) {
    stack.push(carry);
  }

  const result = new ListNode(null);
  let resultCurr = result;
  while (stack.length) {
    resultCurr.next = new ListNode(stack.pop());
    resultCurr = resultCurr.next;
  }

  return result.next;
};

const sumLists = (list1, list2) => {
  if (list1 == null) {
    return { node: null, carry: 0 };
  }

  const data = sumLists(list1.next, list2.next);

  const sum = list1.val + list2.val + data.carry || 0;
  const nodeSum = new ListNode(sum % 10);

  nodeSum.next = data.node;

  return { node: nodeSum, carry: sum >= 10 ? 1 : 0 };
};
