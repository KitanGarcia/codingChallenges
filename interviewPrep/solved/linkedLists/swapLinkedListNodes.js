const Node = require("./solved/dataStructures/linkedList").Node;
const LinkedList = require("./solved/dataStructures/linkedList").LinkedList;

//Time Complexity: O(n)
//Space Complexity: O(1)
var swapNodes = function(head, k) {
  let listLength = 0;
  let count = 1;
  
  let index1 = k;
  let index2 = 0;
  
  let node1 = null;
  let node2 = null;
  
  
  let connectStart = null;
  let connectEnd = null;
  let connectAfterStart = null;
  let connectBeforeEnd = null;
  
  
  //find length of list so we can calculate the 2nd index
  let current = head;
  while (current !== null) {
    current = current.next;
    listLength++;
  }
  index2 = listLength + 1 - k;
  
  
  //make index2 always the larger one so our subsequent algorithm does not become opposite for other cases
  if (index1 > index2) {
    [index1, index2] = [index2, index1];
  }


  
  //nothing needs to be swapped if there is 1 element
  if (index1 === index2 || listLength === 1) {
    return head;
  }
  
  //swap 2 elements if they are the only ones in the list
  if (listLength === 2) {
    let temp = head.next;    
    temp.next = head;
    head.next = null;
    head = null;
    return temp;
  }
  
  
  //define all of our nodes where we need to disconnect/reconnect our two to swap
  current = head;
  while (current !== null) {
    if (count < index1) {
      connectStart = current; //get starting node to reconnect after swap
    }
    if (count === index1) {
      node1 = current;
      connectAfterStart = node1.next;
    }
    if (count === index2 - 1) {
      connectBeforeEnd = current;
    }
    if (count === index2) {
      node2 = current;
      connectEnd = current.next; //get ending node to reconnect after swap
    }
    count++;
    current = current.next
  }
  
  
  //swap the first and last element
  if (index2 === listLength) {
    let temp = node1.next;
    connectBeforeEnd.next = node1;
    node1.next = null;
    node2.next = temp;
    return node2;
  }
  
  //nodes are right next to each other. No need to worry about middle connections
  if (index2 - index1 === 1) {
    connectStart.next = node2;
    node2.next = node1;
    node1.next = connectEnd;
  }
  
  //max nodes to reconnect. 1 or 2 middle connections
  else{
    node2.next = null
    connectStart.next = node2;
    node2.next = connectAfterStart;
  
    node1.next = null;
    connectBeforeEnd.next = node1;
    node1.next = connectEnd;
  }
  
  return head;
};



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

current = swapNodes(list.head, 2);
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
