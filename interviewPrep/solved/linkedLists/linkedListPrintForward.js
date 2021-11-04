const Node = require("./solved/dataStructures/linkedList").Node;
const LinkedList = require("./solved/dataStructures/linkedList").LinkedList;

function listPrintForward(list) {
  let current = list.head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
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
listPrintForward(list);
