/*
 * Node Class
 * Has the following properties:
 *   value
 *   next
 */

class Node {
  constructor(value) {
    if (value) {
      this.value = value;
    }
    else {
      this.value = null;
    }
    this.next = null;
  }
}


/*
 * LinkedList class
 * Has the following properties:
 *   length
 *   head
 *   tail
 *
 * And the following methods:
 *   append: append a node to the end of the list
 *   insert: insert a value at a specified index in the list
 *   delete: remove a value at a specified index
 *   contains: check to see if a value is contained in the list
 */

class LinkedList {
  constructor(node) {
    if (node) {
      this.head = node;
      this.length = 1;
    }
    else {
      this.head = null;
      this.length = 0;
    }
    this.tail = null;
  }

  //Append a value to the end of the list
  //Time Complexity: O(n)
  //Space Complexity: O(1)
  append(value) {
    this.insert(value, this.length);
  }

  //insert a value into the list by index
  //Time Complexity: O(n) worst case (in middle of list)
  //Space Complexity: O(1)
  insert(value, index) {
    if (index > this.length + 1 || index < 0) {
      console.log("Index is out of bounds");
      return;
    }

    let newNode = new Node(value);

    //List is empty. This will be the first insertion into the list
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    //List has 1 node, meaning the head and tail are the same
    else if (this.length === 1) {
      this.head.next = newNode;
      this.tail = newNode;
    }

    //List has more than 1 node and we are adding to the end of it
    else if (index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = null;
    }

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

  delete(index) {
    if (index > this.length + 1 || index < 0) {
      console.log("Index is out of bounds");
      return;
    }

    //list is empty
    if (this.length === 0) {
      console.log("Can't delete. List is empty.");
      return;
    }

    //list has 1 node
    else if (this.length === 1) {
      console.log("Only node");
      this.head = null;
      this.head = null;
    }

    //delete first node
    else if (index === 0) {
      this.head = this.head.next;
    }

    //delete value in middle of list, or tail
    else {
      let count = 0;
      let current = this.head;
      let previous = current;

      //traverse
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      //delete the tail
      if (index === this.length - 1) {
        this.tail = previous;
      }

      //make the deletion and adjust the pointers
      previous.next = current.next;
      current = null;
    }
    this.length--;
  }

  //Check if a value is in the list
  //Time Complexity: O(n)
  //Space Complexity: O(1)
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /*
  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
    */
}

module.exports = {Node, LinkedList};

let node1 = new Node(1);

let list1 = new LinkedList(node1);
list1.append(2);
list1.append(3);
list1.append(5);
list1.append(7);
list1.insert(4, 3);
list1.insert(6, 5);

//if we have 1, 2, 3, 4, 5, 6, 7
//the below will result in 2, 3, 4, 6
list1.delete(4);
list1.delete(0);
list1.delete(4);
