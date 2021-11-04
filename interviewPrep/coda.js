
// Given a node definition 
// interface TreeNode {
//   value: string;
//   left?: TreeNode;
//   right?: TreeNode;
// }

// Write a function that takes a root node as input, and returns a string with the values of the tree in depth first pre-order (root, then left subtree, then right subtree), separated by spaces


// Input 1
//         1
//         /\
//        2  5
//       /\  /\
//      3 4  6 7
     
// Input 2
//         1
//        / \
//       2   5
//      /   /
//     3   6
//    /   /
//   4   7

// Input 3
//       1
//      / \
//    401 88
//    /
//  349
//  /
// 90

// Output 1 -> "1 2 3 4 5 6 7"
// Output 2 -> "1 2 3 4 5 6 7"
// Output 3 -> "1 401 349 90 88"

// Now that we have the node traversal in place, let's tweak the return value. When visiting a node in the tree, the string should receive a number of dashes equal to the depth, followed by the value of that node.

// Output 1 -> "1 -2 --3 --4 -5 --6 --7"
// Output 2 -> "1 -2 --3 ---4 -5 --6 ---7"
// Output 3 -> "1 -401 --349 ---90 -88"

// Now let's reverse the inputs. Make a function that takes as input a string, in the format given by your previous method, and returns the nodes that make up that tree. (i.e., the input format for part 2)

// Note: To remove ambiguity in the string format, when constructing a node at a particular depth, if the parent does not have a child yet, make it the left child, otherwise make it the right child.

// You can assume a valid tree is represented by the input, and you can use space as the delimiter

// For part 3
/*
const input1 = "1 -2 --3 --4 -5 --6 --7";
const input2 = "1 -2 --3 ---4 -5 --6 ---7";
const input3 = "1 -401 --349 ---90 -88";
*/

class TreeNode {
    value;
    left;
    right;
  
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  
  printDepthFirst(node) {
    let result = "";
    //let depth = 0;
    function dfs(node, depth) {
      if (!node) {
        return null;
      }
      let dashes = "-".repeat(depth);
      depth++;
      
      result = result + dashes + node.value + " ";
      
      dfs(node.left, depth);
      dfs(node.right, depth);
    }
    dfs(node, 0);
    return result;
  }
  
}
        
const tree1 = new TreeNode('1', new TreeNode('2', new TreeNode('3'), new TreeNode('4')), new TreeNode('5', new TreeNode('6'), new TreeNode('7')));
const tree2 = new TreeNode('1', new TreeNode('2', new TreeNode('3', new TreeNode('4'))), new TreeNode('5', new TreeNode('6', new TreeNode('7'))));
const tree3 = new TreeNode('1', new TreeNode('401', new TreeNode('349', new TreeNode('90'))), new TreeNode('88'));

let input1 = tree1.printDepthFirst(tree1);
let input2 = tree2.printDepthFirst(tree2);
let input3 = tree3.printDepthFirst(tree3);



/*
const input1 = "1 -2 --3 --4 -5 --6 --7";
const input2 = "1 -2 --3 ---4 -5 --6 ---7";
const input3 = "1 -401 --349 ---90 -88";
1  2   5  3  6  4   7
loop through queue and shift()


new TreeNode(value, leftChild, rightChild)
could be new TreeNode(value, new TreeNode(...), new TreeNode(...))




//         1                                             1
//         /\                                               2
//        2  5                                                 3
//       /\  /\                                                4
//      3 4  6 7                                            5
//                                                             6
//                                                             7
     
// Input 2
//         1                                              1
//        / \                                                2
//       2   5                                                  3 
//      /   /                                                      4
//     3   6                                                 5
//    /   /                                                     6
//   4   7                                                         7

// Input 3
//       1                                                1
//      / \                                                  401
//    401 88                                                      349
//    /                                                                90
//  349                                                      88
//  /
// 90
*/

function buildTree(input) {
  let array = input.split(" ");

  //depth is what we expect
  function traverse(depth, index) {
    if (index >= array.length - 1) {
      return;
    }

    const numDashes = getNumDashes(array[index]);

    console.log(depth);


    traverse(depth + 1, index + 1);
  }
  traverse(0, 0);
  return array;
}

function getNumDashes(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "-") {
      count++;
    }
  }
  return count;
}

console.log(buildTree(input1));

/*
            make stack? Or queue?
            loop through string
            if has no dash, the that's the root
            
            which node
            
            
            string
            string.split(" ")
            recurse on this new array:
            result = []
            
            //current index, dashes we want
            recurse(index, dashes) {
               if (index > array.length) {
               return;
               }
               
               //separate the dashes
               //if dashes separated  === dashes {
               result.push(array[index])
               }
            
            
            //left is always directly after root
            
            
            //right: inc index until we find el with  #dashes++
            
            //search for children of node
            recurse(index + 1, dashes + "-");
            
            search for sibling (right of left)
            
            }
*/

