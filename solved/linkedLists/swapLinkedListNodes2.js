const Node = require("./solved/dataStructures/linkedList").Node;
const LinkedList = require("./solved/dataStructures/linkedList").LinkedList;

/*
 * Create a method which swaps the first occurance of the locations of two nodes in the linked list
 */

//Time Complexity: O(n)
//Space Complexity: O(1)
function swap(head, a, b) {
  if (!head || a === b) {
    return head;
  }

  //return the previous and node of a target
  function locate(node, target) {
    let prev = null;
    let current = node;

    while(current) {
      if (current.value === target){
        return [prev, current];
      }
      prev = current;
      current = current.next;
    }
    return [null, null];
  }

  //get the previous and current nodes of a and b
  let [prev1, current1] = locate(head, a);
  let [prev2, current2] = locate(head, b);

  if (!current1 || !current2) {
    return head;
  }

  if (prev1) {
    prev1.next = current2;
  }
  if (prev2) {
    prev2.next = current1;
  }


  [current1.next, current2.next] = [current2.next, current1.next];
  if (prev1 === null) {
    return current2;
  }
  if (prev2 === null) {
    return current1;
  }
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

swap(list.head, 6, 9);
let current = list.head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
