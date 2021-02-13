const Node = require("./solved/dataStructures/linkedList").Node;
const LinkedList = require("./solved/dataStructures/linkedList").LinkedList;

//Time Complexity: O(n)
//Space Complexity: O(1)
function isCircularList(head) {
  let slow = head;
  let fast = head;

  while (slow && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
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

let current = list.head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}




/*           
 *      1-->2-->3-->4<--------7
 *                   \       /
 *                    -->5-->6
 */
let list2 = new LinkedList();
list2.append(1);
list2.append(2);
list2.append(3);
list2.append(4);
list2.append(5);
list2.append(6);
list2.append(7);

current = list2.head;
let cycleStart;
while (current.value !== 7) {
  if (current.value === 4) {
    cycleStart = current;
  }

  current = current.next;
  if (current.value === 7) {
    current.next = cycleStart;
  }
}

console.log(isCircularList(list.head));
console.log(isCircularList(list2.head));
