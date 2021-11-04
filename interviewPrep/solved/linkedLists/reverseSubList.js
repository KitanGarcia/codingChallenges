const Node = require("./solved/dataStructures/linkedList").Node;
const LinkedList = require("./solved/dataStructures/linkedList").LinkedList;

//Time Complexity: O(n)
//Space Complexity: O(1)
function reverseList(head, m, n) {
  if (head === null) {
    return null;
  }
  let previous = null;
  let current = head;

  //decrement n and m, so from the position we get to, we just need to move remaining n spaces more
  //after this loop, previous is the node right before we reverse and current is the first one we reverse
  while (m > 1) {
    previous = current;
    current = current.next;
    m--;
    n--;
  }

  //connection is set to previous so we can reconnect our sublist to the beginning of the list
  let connection = previous;
  let tail = current;

  //reverse the nodes up until n
  while (n > 0) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;

    n--;
  }

  //connect the beginning of the list back to the sublist since previous has changed
  if (connection !== null) {
    connection.next = previous;
  }
  else {
    head = previous;
  }

  //connect sublist back to remaining end of list
  tail.next = current;

  return head;
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

current = reverseList(list.head, 3, 6);
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
