/*
 *  Remove Duplicates from Sorted List II
 *
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
 *
 * Input: [1, 2, 3, 3, 4, 4, 5]
 * Output: [1, 2, 5]
 *
 *
 * Input: [1, 1, 1, 2, 3]
 * Output: [2, 3]
 * We can lost our head node
 */




/*
 0   1   2   3   3   3   4   4   5   6
 P   C
     P   C
         P   C
                C
                     C                                           P.next = 4, C.next = 4
         P               C
         P                   C                                   P.next = 5, C.next = 5
                                 P   C
                                     P   C
*/

//WORKING SOLUTION
//Time Complexity: O(n)
//Space Complexity: O(1)
function deleteDuplicates(head) {
  let dummy = new ListNode();
  dummy.next = head;
  let current = head;
  let previous = dummy;
  
  while (current !== null) {
    while (current.next && current.val === current.next.val) {
      current = current.next;
    }
    if (previous.next === current) {
      previous = current;
    }
    else {
      previous.next = current.next;
      current = current.next;
    }
  }
  return dummy.next;
}






/*
 * Something is not working here
 *
 * Approach: 
 * To account for losing head node, we can make a dummy head node. We can manipulate the list and return dummy.next
 *
 * Previous
 * Current
 * Future (current.next)
 *
 *  if lastEncountered doesn't match future,
 *    current is ok
 *
 *  0 -> 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5
 *  DC   H
 *  D    C    H
 *  D         C    H
 *  D         C         H
 *  D         C             HCn
 *  D         C              Cn   H
 *  D         C              Cn        H
 *  D         C                        Cn    H
 *
 *
 *
 *
 *  0 -> 1 -> 1 -> 1 -> 2 -> 3
 */


//Time Complexity: O(n)
function deleteDuplicates(head) {
  let dummy = new Node(null, head);
  let current = dummy;

  let hunter = head;

  while (hunter.next !== null) {
    if (hunter.next !== null && hunter.val === hunter.next.val) {
      while (hunter.next !== null && hunter.val === hunter.next.val) {
        hunter = hunter.next;
      }
      current.next = hunter.next;
    }
    else {
      current = current.next;
    }
    hunter = hunter.next;
  }
  return dummy.next;
}
