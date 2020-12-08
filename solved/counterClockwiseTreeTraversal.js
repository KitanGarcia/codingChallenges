/*

For this task, you will be given the elements of a perfect binary tree of
 characters, stored within a simple tree data structure.

Your goal is to write a function that starts at the root of the 
tree and returns a counter clockwise traversal of the nodes at the 
edge of the tree.

1. Understanding:
     Input/output: (ask for an example, then come up with your own example)
     Constraints 
2. Diagram
3. Pseudocode
4. Code



input: list of nodes. Can be visualized below

                       a
                    /      \
                  g           w
                /   \        /   \
              m       p      u     z
            /   \    / \    / \   / \
          f      c  s   r  t   o k   x
Output: [a, g, m, f, c, s, r, t, o, k, x, z, w]

Ask for Constraints:
Only edges
perfect binary tree. What's that? A tree where every non-leaf node has exactly 2 children


What would my output be in this scenario
                      a
                    /   \
                  g       w
                /
              d

This is not a perfect binary tree. Invalid input

Input:    a
         / \
        g   w

Output: a, g, w

Diagramming: split the problem
                       a
                    /      \
                  g           w
                /   \        /   \
              m       p      u     z
            /   \    / \    / \   / \
          f      c  s   r  t   o k   x

Get all the left values:
add to result array
traverse to the next node

Get all the children:
go through the full tree
if a child is a leaf, add it to result array

Get all the right values backwards:
traverse to the next node
add to result array
*/

//this is the input
let tree =
{
"value": "a",
"left": {
"value": "g",
"left": {
"value": "m",
"left": {
"value": "f",
"left": null,
"right": null
},
"right": {
"value": "c",
"left": null,
"right": null
}
},
"right": {
"value": "p",
"left": {
"value": "s",
"left": null,
"right": null
},
"right": {
"value": "r",
"left": null,
"right": null
}
}
},
"right": {
"value": "w",
"left": {
"value": "u",
"left": {
"value": "t",
"left": null,
"right": null
},
"right": {
"value": "o",
"left": null,
"right": null
}
},
"right": {
"value": "z",
"left": {
"value": "k",
"left": null,
"right": null
},
"right": {
"value": "x",
"left": null,
"right": null
}
}
}
}


//BRUTE FORCE
//better solution at the bottom

//Gets all the left nodes excluding leaves
function traverseLeft(root, result) {
  //base case
  if (!root.left) {
    return result;
  }

  //recursive case
  result.push(root.value);
  return traverseLeft(root.left, result);
}

//Gets all leaves
function traverseChildren(root, result) {
  //base case
  if (!root.left && !root.right) {
    result.push(root.value);
    return result;
  }

  //recursive case
  traverseChildren(root.left, result);
  traverseChildren(root.right, result);
  return result;
}

function traverseRight(root, result) {
  //base case
  if (!root.right) {
    return result;
  }

  //recursive case
  traverseRight(root.right, result);
  result.push(root.value);
  return result;
}

function counterClockwise(root) {
  let result = [];
  result.push(root.value);

  //... spread operator deconstructs the array so we get only values instead of an array of values
  result.push(...traverseLeft(root.left, []));
  result.push(...traverseChildren(root, []));
  result.push(...traverseRight(root.right, []));
  return result;
}

/**********************************************************************************************************/
function counterClockwise2(root) {
  let result = [];
  
  function traverse(root, left, right) {
    //leaves
    if (!root.left && !root.right) {
      result.push(root.value);
      return; //terminate so it doesn't look for null.left
    }

    //left preorder
    if (left) {
      result.push(root.value);
    }
    traverse(root.left, left, false);

    //right postorder
    traverse(root.right, false, right);
    if (right && !left) {
      result.push(root.value);
    }
  }
  traverse(root, true, true);

  return result;
}

console.log(counterClockwise(tree));
console.log(counterClockwise2(tree));




