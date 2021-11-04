const Node = require("./solved/dataStructures/linkedList").Node;
const LinkedList = require("./solved/dataStructures/linkedList").LinkedList;

//Time Complexity: O(n)
//Space Complexity: O(1)
function reverseListIterative(head) {
  let previous = null;
  let current = head;
  let next = null;

  //1 --> 2 --> 3 --> 4
  //      becomes
  //1 <-- 2 <-- 3 <-- 4
  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous; //previous becomes the new head
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

current = reverseListIterative(list.head);
while (current !== null) {
  console.log(current.value);
  current = current.next;
}



//Time Complexity: O(n)
//Space Complexity: O(n) due to recursive call stack
function reverseListRecursive(head) {
  if (head === null || head.next === null) {
    return head;
  }

  //recursively get last element and set as new head
  let reversedListHead = reverseListRecursive(head.next);
  head.next.next = head; //set next node's next value to the current node. Starts at 2nd last element
  head.next = null; //set tail to null
  return reversedListHead;
}


let list2 = new LinkedList();
list2.append(1);
list2.append(2);
list2.append(3);
list2.append(4);
list2.append(5);
list2.append(6);
list2.append(7);
list2.append(8);
list2.append(9);

current = reverseListRecursive(list2.head);
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
