// runtime: O(n+m), where n and m represent the number of nodes in headA and headB respectively
// space: O(1)
// https://leetcode.com/problems/intersection-of-two-linked-lists/

const { ListNode, countList } = require("../../utils/linkedlist");

const fillShortestList = (head, num) => {
  const root = new ListNode(null);

  let curr = root;
  while (num > 0) {
    curr.next = new ListNode(null);
    curr = curr.next;
    num--;
  }

  curr.next = head;
  return root.next;
};

var getIntersectionNode = function (headA, headB) {
  const firstLen = countList(headA);
  const secLen = countList(headB);

  const diff = Math.abs(firstLen - secLen);

  const longestList = firstLen > secLen ? headA : headB;
  let shortestList = firstLen > secLen ? headB : headA;

  shortestList = fillShortestList(shortestList, diff);

  let curr = longestList;
  let curr2 = shortestList;

  while (curr) {
    if (curr === curr2) return curr;
    curr = curr.next;
    curr2 = curr2.next;
  }

  return null;
};

module.exports = getIntersectionNode;
