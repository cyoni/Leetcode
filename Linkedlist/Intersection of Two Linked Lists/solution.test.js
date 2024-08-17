const ListNode = require("../../utils/tree");
const getIntersectionNode = require("./solution");

describe("getIntersectionNode", () => {
  function createLinkedList(values) {
    let head = null;
    let tail = null;
    for (const value of values) {
      const node = new ListNode(value);
      if (!head) {
        head = node;
        tail = head;
      } else {
        tail.next = node;
        tail = node;
      }
    }
    return head;
  }

  test("lists intersect at a node", () => {
    const intersect = new ListNode(8, new ListNode(4, new ListNode(5)));
    const listA = createLinkedList([4, 1]);
    const listB = createLinkedList([5, 6, 1]);

    listA.next.next = intersect;
    listB.next.next.next = intersect;

    expect(getIntersectionNode(listA, listB)).toBe(intersect);
  });

  test("lists do not intersect", () => {
    const listA = createLinkedList([1, 2, 3]);
    const listB = createLinkedList([4, 5, 6]);

    expect(getIntersectionNode(listA, listB)).toBeNull();
  });

  test("one list is empty", () => {
    const listA = createLinkedList([1, 2, 3]);
    const listB = null;

    expect(getIntersectionNode(listA, listB)).toBeNull();
  });

  test("both lists are empty", () => {
    const listA = null;
    const listB = null;

    expect(getIntersectionNode(listA, listB)).toBeNull();
  });

  test("lists intersect at the beginning", () => {
    const intersect = new ListNode(1);
    const listA = intersect;
    const listB = intersect;

    expect(getIntersectionNode(listA, listB)).toBe(intersect);
  });
});
