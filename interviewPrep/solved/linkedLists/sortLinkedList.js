/*
Leetcode 148
Given the head of a linked list, return the list after sorting it in ascending order.

Example 1:
Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

Example 3:
Input: head = []
Output: []
 */

const sortList = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  // Using mergesort
  // Split list into two and merge them in ascending order recursively
  const [left, right] = split(head);

  // temporary node to link all sorted nodes
  const root = new ListNode(null);
  return merge(root, sortList(left), sortList(right));
};

function split(node) {
  let slow = node;
  let fast = node;

  // find the middle node
  // so that we can split the list into 2: 0->slow and slow.next->end
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const left = node;
  const right = slow.next;

  // break off list so that left doesn't link to right
  slow.next = null;
  return [left, right];
}

function merge(root, left, right) {
  let pointer = root;

  // merge the smaller node in the left and right list first
  // return the 2nd node in the list because the first is a temporary node
  while (left !== null || right !== null) {
    if (left === null) {
      pointer.next = right;
      right = right.next;
    } else if (right === null) {
      pointer.next = left;
      left = left.next;
    } else {
      if (left.val < right.val) {
        pointer.next = left;
        left = left.next;
      } else {
        pointer.next = right;
        right = right.next;
      }
    }
    pointer = pointer.next;
  }
  return root.next;
}
