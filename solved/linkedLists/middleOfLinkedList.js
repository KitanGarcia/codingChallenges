const Node = require("./solved/dataStructures/linkedList").Node;
const LinkedList = require("./solved/dataStructures/linkedList").LinkedList;

/*
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list
 * If there are two middle nodes, return the second middle node
 *
 *
 * Another way to do this is to count each node, divide count by two and take the ceiling, and iterate to that point in the list
 */

//Time Complexity: O(n)
//Space Complexity: O(1)
function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.value;
}



let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.append(9);

let head1 = list.head;


let list2 = new LinkedList();
list2.append(5);
list2.append(8);
list2.append(9);
list2.append(3);
list2.append(1);
list2.append(2);
list2.append(6);
list2.append(5);
list2.append(10);
list2.append(11);
list2.append(7);
list2.append(12);

let head2 = list2.head;

console.log(findMiddle(head1)); //should return 5
console.log(findMiddle(head2)); //should return 2
