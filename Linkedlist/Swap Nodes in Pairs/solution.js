// https://leetcode.com/problems/swap-nodes-in-pairs/
// runtime: O(n) where n is the number of nodes
// space: O(1)

var swapPairs = function (head) {
  const root = new ListNode(-1);
  root.next = head;

  let prev = root;
  let curr = head;

  while (curr?.next) {
    const nextNode = curr.next;
    const nextNextNode = nextNode.next;

    prev.next = nextNode;
    curr.next = nextNextNode;
    
    prev.next.next = curr;
    prev = curr;
    curr = curr.next;
  }

  return root.next;
};
