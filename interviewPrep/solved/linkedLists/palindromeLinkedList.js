// Leetcode 234

// Given the head of a singly linked list, return true if it is a palindrome.
var isPalindrome = function(head) {
  let count = 0;
  let stack = [];
  let curr = head;

  while (curr != null) {
    count++;
    stack.push(curr.val);
    curr = curr.next;
  }

  let half = Math.floor((count - 1) / 2);
  let count2 = 0;
  curr = head;
  while (curr !== null && count2 <= half) {
    if (stack.pop() !== curr.val) {
      return false;
    }
    count2++;
    curr = curr.next;
  }
  return true;
};


/*
 * Get the middle with fast and slow
 * fast = fast.next.next;
 * slow = slow.next;
 *
 *
 * OR
 * Make a list and reverse it
 */
