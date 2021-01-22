const Node = require("./solved/dataStructures/linkedList.js").Node;
const LinkedList = require("./solved/dataStructures/linkedList.js").LinkedList;
/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: head1 = [2,4,3], head2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: head1 = [0], head2 = [0]
Output: [0]
*/

//THE BELOW SOLUTIONS ARE CORRECT
function addNumbers(head1, head2) {
  let list = new Node();
  let head = list;
  
  let sum = 0;
  let carry = 0;
  
  //check sum to make sure carry is included in last digit. ie. 1000001
  while (head1 !== null || head2 !== null || sum > 0) {
    if (head1) {
      sum += head1.val;
      head1 = head1.next;
    }
    if (head2) {
      sum += head2.val;
      head2 = head2.next;
    }

    if (sum >= 10) {
      sum = sum % 10;
      carry = 1;
    }
    else {
      carry = 0;
    }
    head.next = new Node(sum);
    head = head.next;
    sum = carry;
  }


  let current = list.next;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }

  return list.next;
}

//CLEANER SOLUTION IN MY OPINION
function addNumbers2(l1, l2) {
  let list = new Node();
  let head = list;
  
  let pointer1 = l1;
  let pointer2 = l2;
  let sum = 0;
  let carry = 0;
  
  while (pointer1 !== null || pointer2 !== null) {
    //this sum includes the previous carry
    sum += (pointer1 === null) ? 0 : pointer1.val;
    sum += (pointer2 === null) ? 0 : pointer2.val
    
    if (sum >= 10) {
      sum = sum % 10;
      carry = 1;
    }
    else {
      carry = 0;
    }
    
    pointer1 = (pointer1 === null) ? null : pointer1.next;
    pointer2 = (pointer2 === null) ? null : pointer2.next;
    
    head.next = new Node(sum);
    head = head.next;
    sum = carry;
  }
  
  //take care of last carry if necessary. ie. 1000001
  if (sum > 0) {
    head.next = new Node(sum);
  }
  return list.next;
}




let list = new LinkedList();
let list2 = new LinkedList();

list.append(2);
list.append(4);
list.append(3);

list2.append(5);
list2.append(6);
list2.append(4);


let current = addNumbers(list.head, list2.head);
while (current !== null) {
  console.log(current.value);
  current = current.next;
}


current = addNumbers2(list.head, list2.head);
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
