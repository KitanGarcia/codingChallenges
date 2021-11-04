/**
 *  Homework 10 - Binary Search Tree
 *
 *  TreeNode class
 *
 *  Prompt:    Create a TreeNode class
 *             The TreeNode class should contain the following properties:
 *
 *                   value:   integer value (default null)
 *                    left:   pointer to another node (initially null)
 *                   right:   pointer to another node (initially null)
 *
 *                 Example:   let sample = new TreeNode(1)
 *                            sample.value   // 1
 *                            sample.left    // null
 *                            sample.right   // null
 *
 *
 *  BinarySearchTree class.
 *
 *  Prompt:    Create a BinarySearchTree class
 *
 *             The BinarySearchTree class should contain the following
 *             properties:
 *
 *                    root:   A pointer to the root node (initially null)
 *                    size:   The number of nodes in the BinarySearchTree
 *
 *             The BinarySearchTree class should also contain the following
 *             methods:
 *
 *                  insert:   A method that takes takes an integer value, and
 *                            creates a node with the given input.  The method
 *                            will then find the correct place to add the new
 *                            node. Values larger than the current node node go
 *                            to the right, and smaller values go to the left.
 *
 *                            Input:     value
 *                            Output:    undefined
 *
 *                  search:   A method that will search to see if a node with a
 *                            specified value exists and returns true or false
 *                            if found.
 *
 *                            Input:     value
 *                            Output:    boolean
 *
 *
 *             What are the time and auxilliary space complexities of the
 *             various methods?
 *
 */

'use strict';


class TreeNode {
  constructor(value) {
    this.value = (value ? value : null);
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  // Time Complexity:
  // Auxiliary Space Complexity:
  insert(value) {
    console.log("VALUE: " + value);
    //insert to empty
    if (this.size == 0) {
      this.root = new TreeNode(value);
    }

    //recurse if root exists
    else {
      let current = this.root;
      insertValue(current);
    }

    //need recursion to check left and right of each parent
    function insertValue(node) {
      //end of traversal insert left
      if (node.left === null && value <= node.value) {
        node.left = new TreeNode(value);
        return;
      }

      //end of traversal insert right
      if (node.right === null && value > node.value) {
        node.right = new TreeNode(value);
        return;
      }

      //traverse left
      else if (value <= node.value) {
        insertValue(node.left)
      }

      //traverse right
      else if (value > node.value) {
        insertValue(node.right)
      }
    }


    /* Iterative Solution Below
     *
     *
    let newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      this.size++;
      return;
    }

    let parent = null;
    let child = this.root;

    while (child !== null) {
      parent = child;
      if (value < parent.value) {
        child = parent.left;
      }
      else {
        child=  parent.right;
      }
    }

    if (value < parent.value) {
      parent.left = newNode;
    }
    else {
      parent.right = newNode;
    }
    */

    this.size++;
  }


  // Time Complexity:
  // Auxiliary Space Complexity:
  search(value) {
    console.log("SEARCHING FOR " + value);

    if (!this.root) {
      return false;
    }

    let current = this.root;
    return searchValue(current);


    //recursion to check left and right of each parent
    function searchValue(node) {
      if (value === node.value) {
        return true;
      }

      else if (value <= node.value && node.left) {
        console.log("Left");
        searchValue(node.left);
      }
      else if (value > node.value && node.right) {
        console.log("Right");
        searchValue(node.right);
      }
      return false;
    }

    /* Iterative Solution Below
     *
     *
    let current = this.root;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }

      if (value < current.value) {
        current = current.left;
      }
      else {
        current = current.right;
      }
      return false;
    }
    */

  }
}




////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


console.log('TreeNode Class');
let testCount = [0, 0];

assert(testCount, 'able to create an instance', () => {
  let node = new TreeNode();
  return typeof node === 'object';
});

assert(testCount, 'has value property', () => {
  let node = new TreeNode();
  return node.hasOwnProperty('value');
});

assert(testCount, 'has left property', () => {
  let node = new TreeNode();
  return node.hasOwnProperty('left');
});

assert(testCount, 'has right property', () => {
  let node = new TreeNode();
  return node.hasOwnProperty('right');
});

assert(testCount, 'has default value set to null', () => {
  let node = new TreeNode();
  return node.value === null;
});

assert(testCount, 'able to assign a value upon instantiation', () => {
  let node = new TreeNode(5);
  return node.value === 5;
});

assert(testCount, 'able to reassign a value', () => {
  let node = new TreeNode();
  node.value = 5;
  return node.value === 5;
});

assert(testCount, 'able to point to left child node', () => {
  let node1 = new TreeNode(5);
  let node2 = new TreeNode(10);
  node1.left = node2;
  return node1.left.value === 10;
});

assert(testCount, 'able to point to right child node', () => {
  let node1 = new TreeNode(5);
  let node2 = new TreeNode(10);
  node1.right = node2;
  return node1.right.value === 10;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Binary Search Tree Class');
testCount = [0, 0];

assert(testCount, 'able to create an instance', () => {
  let bst = new BinarySearchTree();
  return typeof bst === 'object';
});

assert(testCount, 'has root property', () => {
  let bst = new BinarySearchTree();
  return bst.hasOwnProperty('root');
});

assert(testCount, 'has size property', () => {
  let bst = new BinarySearchTree();
  return bst.hasOwnProperty('size');
});

assert(testCount, 'default root set to null', () => {
  let bst = new BinarySearchTree();
  return bst.root === null;
});

assert(testCount, 'default size set to zero', () => {
  let bst = new BinarySearchTree();
  return bst.size === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('BinarySearchTree Insert Method');
testCount = [0, 0];

assert(testCount, 'has insert method', () => {
  let bst = new BinarySearchTree();
  return Object.prototype.toString.apply(bst.insert) === '[object Function]';
});

assert(testCount, 'able to insert a node into empty binary search tree', () => {
  let bst = new BinarySearchTree();
  bst.insert(5);
  return bst.size === 1 && bst.root.value === 5;
});

assert(testCount, 'able to insert node to left of root node', () => {
  let bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(3);
  return bst.size === 2 && bst.root.value === 5 && bst.root.left.value === 3;
});

assert(testCount, 'able to insert node to right of node left of root node', () => {
  let bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(3);
  bst.insert(4);
  return bst.size === 3 && bst.root.value === 5 && bst.root.left.value === 3 &&
    bst.root.left.right.value === 4;
});

assert(testCount, 'able to insert node to right of root node', () => {
  let bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(8);
  return bst.size === 2 && bst.root.value === 5 && bst.root.right.value === 8;
});

assert(testCount, 'able to insert node to left of node right of root node', () => {
  let bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(8);
  bst.insert(7);
  return bst.size === 3 && bst.root.value === 5 && bst.root.right.value === 8 &&
    bst.root.right.left.value === 7;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('BinarySearchTree Search Method');
testCount = [0, 0];

assert(testCount, 'has search method', () => {
  let bst = new BinarySearchTree();
  return Object.prototype.toString.apply(bst.search) === '[object Function]';
});

assert(testCount, 'returns true when element exists in binary search tree', () => {
  let bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(3);
  bst.insert(8);
  bst.insert(4);
  bst.insert(7);
  return bst.search(4) === true;
});

assert(testCount, 'returns false when element does not exist in binary search tree', () => {
  let bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(3);
  bst.insert(8);
  bst.insert(4);
  bst.insert(7);
  return bst.search(10) === false;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


// custom assert function to handle tests
// input: count {Array} - keeps track out how many tests pass and how many total
//        in the form of a two item array i.e., [0, 0]
// input: name {String} - describes the test
// input: test {Function} - performs a set of operations and returns a boolean
//        indicating if test passed
// output: {undefined}
function assert(count, name, test) {
  if(!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, '*'];
  } else {
    count[1]++;
  }

  let pass = 'false';
  let errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch(e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}
