// Leetcode 328

/*
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.
*/

var oddEvenList = function(head) {
  if (!head) {
    return null;
  }
  let currEven;
  let currOdd;
  let evenHead;

  currOdd = head;
  currEven = head.next;
  evenHead = currEven;
  while (currOdd && currEven && currOdd.next && currEven.next) {
    currOdd.next = currEven.next;
    currOdd = currOdd.next;
    currEven.next = currOdd.next;
    currEven = currEven.next;
  }
  currOdd.next = evenHead;
  return head;
};
