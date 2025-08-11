// runtime: O(n)
// https://leetcode.com/problems/remove-duplicates-from-sorted-list

var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }

  let prev = head;
  let next = head.next;

  while (next) {
    if (prev.val !== next.val) {
      prev.next = next;
      prev = next;
    }
    next = next.next;
  }

  prev.next = next;

  return head;
};
