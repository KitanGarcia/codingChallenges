/*
 * Parent must be smaller than child
 *
 * Elements are inserted and removed from the breadth-most position
 *
 *                       2
 *           5                       4
 *     9          6            8           7
 *
 *  This is a valid heap. We would insert on the left with a new row.
 *  If we delete, we would remove the 7, then 8, 6, 9
 *
 *
 *  When we insert an element, we "bubble up." This means inserting it in
 *  its position and swapping it with its parent until the heap condition of
 *  parent being smaller than child is met.
 *
 *  Insertion of an element is O(log(n)) since just half the heap
 *  at most is affected
 *
 *
 *  To delete an element, we "bubble down." This means swapping the root
 *  with the last element, deleting the root, and swapping the new root
 *  downward until the heap condition of parent being smaller than child
 *  is met. For these swaps, we always swap the parent with the smaller of
 *  the two children
 *
 *  Example. Insert 1
 *
 *                       2
 *           5                       4
 *     9          6            8           7
 *  1
 *
 *            Begin bubble up. Swap 1 with 9
 *
 *                       2
 *           5                       4
 *     1          6            8           7
 *  9
 *
 *            Continue bubble up. Swap 1 with 5
 *
 *                       2
 *           1                       4
 *     5          6            8           7
 *  9
 *
 *            Complete bubble up. Swap 1 with 5
 *
 *                       1
 *           2                       4
 *     5          6            8           7
 *  9
 *
 *
 *
 * Example. Delete root
 *              Swap root with last element
 *                       9
 *           2                       4
 *     5          6            8           7
 *  1
 *
 *     Delete 1 and begin bubble down. Swap 9 with 2 (2 is smaller than 4)
 *                       2
 *           9                       4
 *     5          6            8           7
 *  
 *
 *
 *      Complete bubble down. Swap 9 with 5 (5 is smaller than 6)
 *                       2
 *           5                       4
 *     9          6            8           7
 *
 *
 *  Heaps are represented as arrays and written in a breadth-first manner
 *  The above heap would be: [2, 5, 4, 9, 6, 8, 7]
 *  From this, we can relate the indices of each parent to its children
 *  child = 2 * parent + 1, 2 * parent + 2
 *  parent = (child - 1) / 2   or   (child - 2) / 2 depending on if child index is even or odd
 *
 */

class MinHeap {
  constructor() {
    this.storage = [];
  }

  //for swapping parent and child
  swap(parent, child) {
    [ this.storage[parent], this.storage[child] ] = [ this.storage[child], this.storage[parent] ];
  }

  //return first top of heap
  peak() {
    return this.storage[0];
  }

  //return number of elements in storage
  size() {
    return this.storage.length;
  }

  //add and situate a new value
  insert(val) {
    //add value to end of storage
    this.storage.push(val);

    //bubble up last element
    this.bubbleUp(this.size() - 1);
  }

  //swap child with parent until heap parent is less than child
  bubbleUp(child) {
    let parent = this.getParent(child);

    //as long as child has a parent and the child is less than the parent (heap condition not met)
    while (child > 0 && this.storage[child] < this.storage[parent]) {
      this.swap(child, parent);

      //reset parent and child for further iterations of loop
      child = parent;
      parent = this.getParent(child);
    }
  }

  //find index of parent given index of child
  getParent(child) {
    if (child % 2 === 0) {
      return (child - 2) / 2;
    }
    else {
      return (child - 1) / 2;
    }
  }

  removePeak() {
    //swap first and last element, then pop off last and bubble the new first element down
    this.swap(0, this.size() - 1);
    let result = this.storage.pop();

    this.bubbleDown(0);

    return result;
  }

  bubbleDown(parent) {
    let child = this.getChild(parent);

    //as long as child is a valid index min heap condition is not fulfilled
    while (child < this.size() && this.storage[child] < this.storage[parent]) {
      this.swap(child, parent);

      //reset parent and child for further iterations of loop
      parent = child;
      child = this.getChild(parent);
    }
  }

  getChild(parent) {
    let child1 = 2 * parent + 1;
    let child2 = 2 * parent + 2;

    //child 1 is off the end of the array
    if (child1 >= this.size()) {
      return child1;
    }

    //child 2 is off the end of the array
    else if (child2 >= this.size()) {
      return child1;
    }

    //both indices are valid. We want the smaller one
    else if (this.storage[child1] < this.storage[child2]) {
      return child1;
    }

    //both indices are valid. We want the smaller one
    else {
      return child2;
    }
  }

  remove(value) {
    let removeIndex;
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] === value) {
        removeIndex = i;
      }
    }

    //if the value cannot be found in the array
    if (removeIndex === undefined) {
      return;
    }

    //swap found element with the last element of the array
    this.swap(removeIndex, this.size() - 1);

    //remove the value we found which is now at end
    let result = this.storage.pop();

    //bubble up and bubble down the swapped value (previously at end) to make sure heap conditions are met
    this.bubbleUp(removeIndex);
    this.bubbleDown(removeIndex);
    return result;
  }
}

let test = new MinHeap();
test.insert(4);
test.insert(5);
test.insert(9);
test.insert(6);
test.insert(8);
test.insert(7);
test.insert(2);
console.log(test);
console.log(test.removePeak());
console.log(test.removePeak());
console.log(test.remove(6));
console.log(test);
