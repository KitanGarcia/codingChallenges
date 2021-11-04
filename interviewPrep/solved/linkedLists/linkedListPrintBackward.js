const Node = require("./solved/dataStructures/linkedList").Node;
const LinkedList = require("./solved/dataStructures/linkedList").LinkedList;

function listPrintBackward(node) {
  //accounts for empty list
  if (node) {
    if (node.next) {
      listPrintBackward(node.next);
    }
    console.log(node.value);
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
listPrintBackward(list.head);
