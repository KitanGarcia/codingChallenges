const Node = require("./solved/dataStructures/linkedList").Node;
const LinkedList = require("./solved/dataStructures/linkedList").LinkedList;

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
 * We can lose our head node
 */

/*
 * LINKED LIST IS SORTED! THIS HELPSA
 *
 *     1   2   3   3   4   4   5
 *  P  C
 *     P   C                               Advance current and previous until we find current.next === current
 *         P   C
 *         P       C
 *         P           C
 *         P               C
 *         P                   C
 *
 *
 *
 *     1   2   3   3   4   5   5
 *  P  C
 *     P   C                               Advance current and previous until we find current.next === current
 *         P   C                             Increment current until a new value is found.
 *         P       C
 *         P           C                     New value is found. Check if next val is same. Else prev.next = curr
 *                     P   C
 *                     P       C
 *
 */

//Time Complexity: O(n)
//Space Complexity: O(1)
function removeDuplicates(head) {
  let dummy = new Node(); //an empty list node with next as head so we have flexibility in starting our list if the head is a duplicate
  dummy.next = head;

  let current = head;
  let previous = dummy;

  while (current !== null) {
    //if we see duplicates, iterate until we find a new value
    while (current.next && current.value === current.next.value) {
      current = current.next;
    }
    //move previous up one
    if (previous.next === current) {
      previous = current;
    }
    //jump across to skip duplicates
    else {
      previous.next = current.next;
      current = current.next;
    }
  }
  return dummy.next;
}


let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(3);
list.append(4);
list.append(4);
list.append(5);

removeDuplicates(list.head);

let current = list.head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}



let list2 = new LinkedList();
list2.append(1);
list2.append(1);
list2.append(1);
list2.append(2);
list2.append(3);

removeDuplicates(list2.head);

current = list2.head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}



let list3 = new LinkedList();
list3.append(1);
list3.append(2);
list3.append(3);
list3.append(4);
list3.append(4);

removeDuplicates(list3.head);

current = list3.head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
