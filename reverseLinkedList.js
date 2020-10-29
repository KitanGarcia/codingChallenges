/*
 *  Homework 09 - Linked List
 */

/*
 *
 *  ListNode class
 *
 *  Prompt:    Create a ListNode class
 *             The ListNode class should contain the following properties:
 *
 *                 value:   {Integer} (initially null)
 *                  next:   {ListNode} (initially null)
 *
 *               Example:   input: let sample1 = new ListNode(1)
 *                          sample1.value     // 1
 *                          sample1.next      // null
 *
 *               Example:   input: let sample2 = new ListNode()
 *                          sample2.value     // null
 *                          sample2.next      // null
 *
 *
 *  LinkedList class
 *
 *  Prompt:     Create a LinkedList class
 *              The LinkedList class should contain the following properties:
 *
 *                length:   {Integer}
 *                  head:   {ListNode}
 *                  tail:   {ListNode}
 *
 *              The LinkedList class should also contain the following methods:
 *
 *                append:   A method that appends a value to the end of the
 *                          LinkedList.
 *
 *                          Input:     value {Integer}
 *                          Output:    {undefined}
 *
 *                insert:   A method that inserts an integer value at a set
 *                          index in the LinkedList (assume head index is 0).
 *
 *                          Input:     value {Integer}
 *                          Input:     index {Integer}
 *                          Output:    {undefined}
 *
 *                delete:   A method that removes a node at a specified index.
 *
 *                          Input:     index {Integer}
 *                          Output:    {undefined}
 *
 *              contains:   A method that checks to see if a value is contained
 *                          in the list.
 *
 *                          Input:     value {Integer}
 *                          Output:    {Boolean}
 *
 */

'use strict';

class ListNode {
  constructor(value) {
    if (value) {
      this.value = value;
    }
    else {
      this.value = null;
    }
    //this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
  append(value) {
    this.insert(value, this.length);
    /*
    this.tail = new ListNode(value);
    this.length++;
    if (this.head == null) {
      this.head = this.tail;
    }
    */
  }

  // Time Complexity: O(n) if between 2 nodes
  // Auxiliary Space Complexity: O(1)
  insert(value, index) {

    //index is out of bounds
    if (index > this.length + 1 || index < 0) {
      //do not insert a node
      console.log("Index is out of bounds");
      return;
    }

    let newNode = new ListNode(value);

    //empty list so head and tail are same
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    //insertion to beginning so head and head.next must be updated
    else if (index === 0) {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }

    //one node so head.next and tail are the same
    else if (this.length === 1) {
      this.head.next = newNode;
      this.tail = newNode;
    }

    //insertion at end
    else if (index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    //inserting between 2 nodes
    else {
      let count = 0;
      let current = this.head;
      let previous = current;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.length++;
  }

  // Time Complexity: O(n) if deleting tail or between two nodes
  // Auxiliary Space Complexity: O(1)
  delete(index) {

    if (index < 0 || index >= this.length) {
      return;
    }

    //deleting only node in list
    if (this.length === 1) {
      console.log("Only node");
      this.head = null;
      this.tail = null;
    }
    
    //deleting head
    else if (index === 0) {
      console.log("head");
      this.head = this.head.next;
    }

    //traverse linked list
    else {
      console.log("between");
      let count = 0;
      let current = this.head;
      let previous = current;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      //if deleting the tail
      if (index === this.length - 1) {
        this.tail = previous;
      }
      //current is the one to delete
      previous.next = current.next;
      current = null;
    }

    this.length--;
  }

  // Time Complexity: O(n)
  // Auxiliary Space Complexity: O(1)
  contains(value) {
    let current = this.head;
    while (current != this.tail.next) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

//create a function to reverse the order of nodes in the linked list
//return ListNode
function reverseList(node) {
  console.log("NEED TO COMPLETE THIS FUNCTION");
}

let nodes = [];
nodes.push(new ListNode(5));
nodes.push(new ListNode(7));
nodes.push(new ListNode(15));
nodes.push(new ListNode(3));
nodes.push(new ListNode(1));
nodes.push(new ListNode(8));
nodes.push(new ListNode(6));
nodes.push(new ListNode(17));
nodes.push(new ListNode(20));

let linkedList = new LinkedList();
for (let i = 0; i < nodes.length; i++) {
  linkedList.append(nodes[i]);
}


reverseList(linkedList.head);
